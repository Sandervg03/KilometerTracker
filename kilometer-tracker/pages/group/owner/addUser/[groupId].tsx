import { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { toastWarn } from "../../../components/toast_messages/toast_warn";
import { toastError } from "../../../components/toast_messages/toast_error";
import { toastSuccess } from "../../../components/toast_messages/toast_success";
import Link from "next/link";

export default function AddUserToGroup() {
  const router = useRouter();
  const { groupId } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    userEmail: "",
  });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!groupId) {
      toastWarn("Group ID is missing.");
      router.push("/group/user/overview");
      return;
    }

    async function verifyGroup() {
      const response = await fetch(`/api/group/owner/getGroup?groupId=${groupId}`, {
        method: "GET",
      });

      if (!response.ok) {
        const result = await response.json();
        toastWarn(result.error || "Failed to verify group.");
        router.push("/group/user/overview");
        return;
      }
      setIsLoading(false);
    }

    verifyGroup();
  }, [router.isReady, groupId, router]);

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
        router.push(`/group/user/overview/${groupId}`);
      } else {
        switch (response.status) {
          case 401:
            toastWarn(result.error || "Session expired.");
            router.push("/user/login");
            break;
          case 403:
            toastWarn(result.error || "Permission denied.");
            router.push("/user/login");
            break;
          default:
            toastWarn(result.error || "Adding user failed.");
        }
      }
    } catch (error) {
      setIsLoading(false);
      toastError("Network error. Please check your connection and try again.");
    }
  };

  if (isLoading) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Link href="/group/user/overview" style={{ position: "absolute", top: 20, left: 20 }}>
        Go to groups overview
      </Link>
      <div className={styles.container}>
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
      </div>
    </main>
  );
}