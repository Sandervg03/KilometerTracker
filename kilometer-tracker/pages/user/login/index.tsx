import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { toastWarn } from "../../components/toast_messages/toast_warn";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      setIsLoading(false);

      if (response.ok) {
        router.push("/group/overview");
      } else {
        switch (response.status) {
          case 401:
            toastWarn(`Incorrect credentials: ${result.error}`);
            break;
          case 404:
            toastWarn(`User not found: ${result.error}`);
            break;
          case 503:
            toastWarn(`Service unavailable: ${result.error}`);
            break;
          default:
            toastWarn(`Error: ${result.error || "Registration failed"}`);
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        "Network error. Please check your connection and try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
