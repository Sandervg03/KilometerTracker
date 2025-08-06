import { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { toastWarn } from "../../../components/toast_messages/toast_warn";
import { toastError } from "../../../components/toast_messages/toast_error";
import { toastSuccess } from "../../../components/toast_messages/toast_success";
import Link from "next/link";

export default function RenameGroup() {
  const router = useRouter();
  const { groupId } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
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
      const response = await fetch("/api/group/owner/rename", {
        method: "PUT",
        body: JSON.stringify({
          groupId: groupId,
          name: formData.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      setIsLoading(false);

      if (response.ok) {
        toastSuccess("Group renamed succesfully");
        router.push(`/group/user/overview/${groupId}`);
      } else {
        const result = await response.json();
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
        <h1>Rename group</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="New group name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <button type="submit">Rename Group</button>
        </form>
      </div>
    </main>
  );
}