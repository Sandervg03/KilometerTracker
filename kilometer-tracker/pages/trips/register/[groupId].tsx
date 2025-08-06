import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { toastWarn } from "../../components/toast_messages/toast_warn";
import { toastError } from "../../components/toast_messages/toast_error";
import Link from "next/link";

export default function RegisterTrip() {
    const router = useRouter();
    const { groupId } = router.query;

    const [isLoading, setIsLoading] = useState(true);

    const [group, setGroup] = useState(null);
    const [groupUsers, setGroupUsers] = useState([]);

    useEffect(() => {
        if (!groupId) {
            toastWarn("Group ID is missing");
            console.log(groupId)
            // router.push("/group/user/overview");
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
            } catch (error) {
                toastError("Network error. Please check your connection and try again.");
            }
        }

        getData().then(() => setIsLoading(false));
    }, [])

    const handleSubmit = async () => {

    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {isLoading && <p>Loading...</p>}
                {!isLoading && (
                    <>
                        <Link href="/group/user/overview" style={{ position: "absolute", top: 20, left: 20 }}>
                            Go to groups overview
                        </Link>
                        <h1>Register your trip.</h1>
                        <h3>Enter your current mileage below.</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="number" required />
                            <select required>
                                {groupUsers.map(user => (
                                    <>
                                        {user._email === localStorage.getItem("email") &&
                                            <option value={user._firstName + ' ' + user._lastName} defaultChecked>{user._firstName + ' ' + user._lastName}</option>
                                        }
                                        {user._email !== localStorage.getItem("email") &&
                                            <option value={user._firstName + ' ' + user._lastName}>{user._firstName + ' ' + user._lastName}</option>
                                        }
                                    </>
                                ))}
                            </select>
                            <button type="submit">Register current mileage</button>
                        </form>
                    </>
                )}
            </div>
        </main>
    )
}