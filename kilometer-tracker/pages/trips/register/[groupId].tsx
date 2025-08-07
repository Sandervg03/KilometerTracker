import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { toastWarn } from "../../components/toast_messages/toast_warn";
import { toastError } from "../../components/toast_messages/toast_error";
import Link from "next/link";
import { toastSuccess } from "../../components/toast_messages/toast_success";

export default function RegisterTrip() {
    const router = useRouter();
    const { groupId } = router.query;

    const [isLoading, setIsLoading] = useState(true);

    const [group, setGroup] = useState(null);
    const [groupUsers, setGroupUsers] = useState([]);

    const [formData, setFormData] = useState({
        currentMileage: 0,
        email: localStorage.getItem("email"),
        filledTank: false,
        groupId: groupId
    })

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
            } catch (error) {
                toastError("Network error. Please check your connection and try again.");
            }
        }

        getData().then(() => setIsLoading(false));
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type, value } = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);

        try {
            const response = await fetch('/api/trips/register', {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            setIsLoading(false);

            if (response.ok) {
                toastSuccess("Trip registered succesfully!");
                router.push(`/group/user/overview/${groupId}`);
            } else {
                const result = await response.json();
                switch (response.status) {
                    case 401:
                        toastWarn(`Session expired: ${result.error}`);
                        router.push("/user/login");
                        break;
                    case 403:
                        toastWarn(`Forbidden: ${result.error}`);
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
            setIsLoading(false);
            toastError("Network error. Please check your connection and try again.");
        }
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
                            <div className={styles.formItem}>What is the mileage at now?</div>
                            <input type="number" name="currentMileage" onChange={handleChange} required />
                            <div className={styles.formItem}>Who was the latest driver?</div>
                            <select name="email" value={formData.email} onChange={handleChange} required>
                                {groupUsers.map(user => (
                                    <option key={user._id} value={user._email}>
                                        {user._firstName + ' ' + user._lastName}
                                    </option>
                                ))}
                            </select>
                            <div className={styles.formItem}>
                                <input id="filledTank" type="checkbox" name="filledTank" onChange={handleChange} />
                                <label htmlFor="filledTank">Did you refill the fuel?</label>
                            </div>
                            <button type="submit" style={{ marginTop: "10px" }}>Register current mileage</button>
                        </form>
                    </>
                )}
            </div>
        </main>
    )
}