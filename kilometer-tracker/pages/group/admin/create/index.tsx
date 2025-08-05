import { useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { toastWarn } from "../../../components/toast_messages/toast_warn";
import { toastError } from "../../../components/toast_messages/toast_error";
import { toastSuccess } from "../../../components/toast_messages/toast_success";

export default function GroupCreate() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    ownerEmail: "",
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
      const response = await fetch("/api/group/admin/create", {
        method: "POST",
        body: JSON.stringify({
          ownerEmail: formData.ownerEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      setIsLoading(false);

      if (response.ok) {
        toastSuccess("Group created successfully");
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
            toastWarn(`Error: ${result.error || "Creation failed"}`);
        }
      }
    } catch (error) {
      toastError("Network error. Please check your connection and try again.");
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <>
            <h1>Create a group</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="ownerEmail"
                placeholder="Group owner email"
                value={formData.ownerEmail}
                onChange={handleChange}
                required
              />
              <button type="submit">Create Group</button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
