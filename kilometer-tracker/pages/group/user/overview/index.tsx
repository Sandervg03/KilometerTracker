import { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { toastWarn } from "../../../components/toast_messages/toast_warn";
import { toastError } from "../../../components/toast_messages/toast_error";
import Link from "next/link";

export default function Overview() {
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState([]);

    const router = useRouter();

    useEffect(() => {
        async function fetchGroups() {
            try {
                const response = await fetch('/api/group/user/getGroups', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                const result = await response.json();

                if (response.ok) {
                    setGroups(result);
                } else {
                    switch (response.status) {
                        case 401:
                            toastWarn(`Session expired: ${result.error}`);
                            router.push("/user/login");
                            break;
                        case 404:
                            toastWarn(`No groups found: ${result.error}`);
                            break;
                        case 503:
                            toastWarn(`Service unavailable: ${result.error}`);
                            break;
                        default:
                            toastWarn(`Error: ${result.error || "Something went wrong"}`);
                    }
                }
            } catch (error) {
                toastError("Network error. Please check your connection and try again.");
            }
        }

        fetchGroups().then(() => setIsLoading(false));
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {isLoading && <p>Loading...</p>}
                {!isLoading && (
                    <>
                        <h1>Your groups</h1>
                        {groups.length === 0 ? (
                            <p>No groups found.</p>
                        ) : (
                            <ul>
                                {groups.map((group) => (
                                    <li key={group._id}>
                                        <Link href={`/group/user/overview/${group._id}`}>{group._name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
        </main>
    )
}