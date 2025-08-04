import { Bounce, toast } from "react-toastify";

export function toastWarn(message: string): void {
    toast.warn(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
}