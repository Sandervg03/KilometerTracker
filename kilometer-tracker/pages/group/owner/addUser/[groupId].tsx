import { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { toastWarn } from "../../../components/toast_messages/toast_warn";
import { toastError } from "../../../components/toast_messages/toast_error";
import { toastSuccess } from "../../../components/toast_messages/toast_success";
import Link from "next/link";
import {
  GroupByIdQuery,
  GroupByIdQueryVariables,
  InsertGroupUserMutation,
  InsertGroupUserMutationVariables,
} from "../../../../src/generated/graphql";
import { userClient } from "../../../../src/graphql/client";
import {
  GROUP_BY_ID,
  INSERT_GROUP_USER,
} from "../../../../src/graphql/operations";

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
      try {
        const group: GroupByIdQuery = await userClient(
          document.cookie["token"]
        ).request<GroupByIdQuery, GroupByIdQueryVariables>(GROUP_BY_ID, {
          id: Array.isArray(groupId) ? groupId[0] : groupId,
        });

        if (group.group[0].owner !== localStorage.getItem("email")) {
          toastWarn("Failed to verify group ownership.");
          router.push("/group/user/overview");
          return;
        }
      } catch (error) {
        switch (error.response?.errors?.[0]?.message) {
          case "Could not verify JWT: JWTExpired":
            toastError("Session expired, please login again.");
            router.push("/user/login");
            break;
          case "field \"group\" not found in type: 'query_root'":
            toastWarn("You don't have permissions to view this group.");
            router.push("/group/user/overview");
            break;
          case "check constraint of a select permission has failed":
            toastWarn("You don't have permissions to view this group.");
            router.push("/group/user/overview");
            break;
          default:
            toastError("An unknown error occured, please contact support.");
            router.push("/group/user/overview");
            break;
        }
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
      const addUser: InsertGroupUserMutation = await userClient(
        document.cookie["token"]
      ).request<InsertGroupUserMutation, InsertGroupUserMutationVariables>(
        INSERT_GROUP_USER,
        {
          groupId: Array.isArray(groupId) ? groupId[0] : groupId,
          userEmail: formData.userEmail,
        }
      );

      setIsLoading(false);

      if (addUser.insert_group_users.affected_rows > 0) {
        toastSuccess("User added to group successfully");
        router.push(`/group/user/overview/${groupId}`);
      } else {
        toastWarn("Adding user failed.");
      }
    } catch (error) {
      setIsLoading(false);

      switch (error.response?.errors?.[0]?.message) {
        case "Could not verify JWT: JWTExpired":
          toastWarn("Session expired, please login again.");
          router.push("/user/login");
          break;
        case "check constraint of an insert/update permission has failed":
          toastWarn("You don't have permissions for this action.");
          router.push("/group/user/overview");
          break;
        default:
          toastError("An unknown error occured, please contact support.");
          router.push("/group/user/overview");
          break;
      }
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
      <Link
        href="/group/user/overview"
        style={{ position: "absolute", top: 20, left: 20 }}>
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
