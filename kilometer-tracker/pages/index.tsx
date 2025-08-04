import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.query.register = "true";
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Kilometer Tracker</h1>
        <h3><Link href="/user/login">Log in</Link> or <Link href="/user/register">register</Link> to get started.</h3>
      </div>
    </main>
  );
}
