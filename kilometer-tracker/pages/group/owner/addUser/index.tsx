import { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { toastWarn } from "../../../components/toast_messages/toast_warn";
import { toastError } from "../../../components/toast_messages/toast_error";
import { toastSuccess } from "../../../components/toast_messages/toast_success";

export default function AddUserToGroup() {
  const router = useRouter();
  const [groupId, setGroupId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!groupId) return;

    setIsLoading(true);

    async function doAsync() {
      const response = await fetch(
        `/api/group/owner/getGroup?groupId=${groupId}`,
        { method: "GET" }
      );
      if (!response.ok) {
        const result = await response.json();
        switch (response.status) {
          case 400:
            toastWarn(`Invalid group ID: ${result.error}`);
            router.push("/group/overview");
            break;
          case 401:
            toastWarn(`Session expired: ${result.error}`);
            router.push("/user/login");
            break;
          case 403:
            toastWarn(`Permission denied: ${result.error}`);
            router.push("/user/login");
            break;
          case 404:
            toastWarn(`Group not found: ${result.error}`);
            break;
          case 503:
            toastWarn(`Service unavailable: ${result.error}`);
            break;
          default:
            toastWarn(`Error: ${result.error || "Fetching group failed"}`);
        }
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    }

    doAsync();
  }, [groupId, router]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      if (typeof router.query.groupId === "string") {
        setGroupId(router.query.groupId);
      } else {
        setGroupId(null);
      }
    }
  }, [router.isReady, router.query.groupId]);

  const [formData, setFormData] = useState({
    userEmail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("/api/group/owner/addUser", {
        method: "POST",
        body: JSON.stringify({
          groupId: groupId,
          userEmail: formData.userEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      setIsLoading(false);

      if (response.ok) {
        toastSuccess("User added to group successfully");
      } else {
        switch (response.status) {
          case 401:
            toastWarn(`Session expired: ${result.error}`);
            break;
          case 403:
            toastWarn(`Permission denied`);
            router.push("/user/login");
            break;
          case 404:
            toastWarn(`User not found: ${result.error}`);
            break;
          case 503:
            toastWarn(`Service unavailable: ${result.error}`);
            break;
          default:
            toastWarn(`Error: ${result.error || "Adding user failed"}`);
        }
      }
    } catch (error) {
      toastError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {!mounted && <p>Loading...</p>}
        {mounted && !router.isReady && <p>Loading...</p>}
        {mounted && router.isReady && !groupId && <p>Invalid group ID</p>}
        {isLoading && <p>Loading...</p>}
        {mounted && router.isReady && groupId && !isLoading && (
          <>
            <h1>Add user to group</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="userEmail"
                placeholder="New user email"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
              <button type="submit">Add user to Group</button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
