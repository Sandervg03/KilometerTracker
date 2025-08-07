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

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        if (!groupId) {
            toastWarn("Group ID is missing");
            router.push("/group/user/overview");
            return;
        }
        async function getGroupData() {
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

        async function getGroupTripsData() {
            try {
                const response = await fetch(`/api/trips/byGroup?groupId=${groupId}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const result = await response.json();

                if (response.ok) {
                    setTrips(result);
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

        Promise.all([getGroupData(), getGroupTripsData()]).then(() => setLoading(false))
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
                        <p className={styles.description}>Trips made in group: {group._name}</p>
                        <table className={styles.table}>
                            <tr>
                                <td>User</td>
                                <td>Refilled fuel</td>
                                <td>Final mileage</td>
                            </tr>
                            {trips.map(trip => (
                                <tr>
                                    <td>{
                                        (() => {
                                            const matchedUser = groupUsers.find(user => user._email === trip._email);
                                            return matchedUser ? `${matchedUser._firstName} ${matchedUser._lastName}` : trip._email;
                                        })()
                                    }</td>
                                    <td>{trip._filledTank ? "Yes" : "No"}</td>
                                    <td>{trip._currentMileage}</td>
                                </tr>
                            ))}
                        </table>
                        <Link href={`/trips/register/${group._id}`}>Register a trip!</Link>
                    </>
                )}
            </div>
        </main>
    )
}