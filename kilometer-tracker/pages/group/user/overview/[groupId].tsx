import { useRouter } from "next/router";
import styles from "../../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { toastWarn } from "../../../components/toast_messages/toast_warn";
import { toastError } from "../../../components/toast_messages/toast_error";
import Link from "next/link";

export default function GroupOverview() {
    const router = useRouter();
    const { groupId } = router.query;

    const [loading, setLoading] = useState(true);

    const [group, setGroup] = useState(null);
    const [groupUsers, setGroupUsers] = useState([]);

    useEffect(() => {
        if (!groupId) {
            toastWarn("Group ID is missing");
            router.push("/group/user/overview");
            return;
        }
        async function getData() {
            try {
                const response = await fetch(`/api/group/user/getGroup?groupId=${groupId}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const result = await response.json();

                if (response.ok) {
                    setGroup(result.group);
                    setGroupUsers(result.users);
                } else {
                    switch (response.status) {
                        case 401:
                            toastWarn(`Session expired: ${result.error}`);
                            router.push("/user/login");
                            break;
                        case 404:
                            toastWarn(`Not found: ${result.error}`);
                            break;
                        case 503:
                            toastWarn(`Service unavailable: ${result.error}`);
                            break;
                        default:
                            toastWarn(`Error: ${result.error || "Something went wrong"}`);
                    }
                }
                console.log(result);
            } catch (error) {
                toastError("Network error. Please check your connection and try again.");
            }
        }

        getData().then(() => setLoading(false));
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {loading && <p>Loading...</p>}
                {!loading && (
                    <>
                        <Link href="/group/user/overview" style={{ position: "absolute", top: 20, left: 20 }}>
                            Go to groups overview
                        </Link>
                        <h1 className={styles.title}>Group Overview</h1>
                        <p className={styles.description}>Users in group: {group._name}</p>
                        {groupUsers.map(user => (
                            <ul>
                                {user._firstName + ' ' + user._lastName}
                            </ul>
                        ))}
                    </>
                )}
            </div>
        </main>
    )
}