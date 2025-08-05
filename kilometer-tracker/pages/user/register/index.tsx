import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";
import { toastWarn } from "../../components/toast_messages/toast_warn";
import { toastError } from "../../components/toast_messages/toast_error";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toastWarn("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      setIsLoading(false);

      if (response.ok) {
        router.push("/user/login");
      } else {
        switch (response.status) {
          case 400:
            toastWarn(`Validation Error: ${result.error}`);
            break;
          case 409:
            toastWarn(`Email already in use: ${result.error}`);
            break;
          case 503:
            toastWarn(`Service unavailable: ${result.error}`);
            break;
          default:
            toastWarn(`Error: ${result.error || "Registration failed"}`);
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
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
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
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <button type="submit">Register</button>
            </form>
            <h3>Already have an account? <Link href="/user/login">Login</Link></h3>
          </>
        )}
      </div>
    </main>
  );
}
