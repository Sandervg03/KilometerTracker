import { useEffect, useRef, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { toastWarn } from "../../../components/toast_messages/toast_warn";
import { toastError } from "../../../components/toast_messages/toast_error";
import Link from "next/link";
import Image from "next/image";

export default function Overview() {
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState([]);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (openMenu && menuRefs.current[openMenu] && !menuRefs.current[openMenu]!.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    const handleOptionsClick = (groupId: string) => {
        setOpenMenu(prev => (prev === groupId ? null : groupId));
    };

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
                            <div className={styles.list}>
                                {groups.map((group) => (
                                    <div className={styles.listItem} key={group._id} ref={el => { menuRefs.current[group._id] = el; }}>
                                        <Link href={`/group/user/overview/${group._id}`}>{group._name}</Link>
                                        {group._owner === localStorage.getItem("email") && (
                                            <>
                                                <Image
                                                    src="/media/img/more.png"
                                                    alt="More options"
                                                    width={25}
                                                    height={10}
                                                    style={{ filter: "invert(100%)", cursor: "pointer" }}
                                                    onClick={() => handleOptionsClick(group._id)}
                                                />
                                                {openMenu === group._id && (
                                                    <div className={styles.dropdownMenu}>
                                                        <Link href={`/group/owner/addUser/${group._id}`} className={styles.dropdownItem}>Add user</Link>
                                                        <Link href={`/group/owner/renameGroup/${group._id}`} className={styles.dropdownItem}>Rename group</Link>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    )
}