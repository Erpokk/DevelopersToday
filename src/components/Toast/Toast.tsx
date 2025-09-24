import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";
import { FaXmark } from "react-icons/fa6";

export type ToastType = "success" | "error" | "info" | "warning";
export type AnimationType = "fade" | "slide";

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
    animation?: AnimationType;
}

export const Toast: React.FC<ToastProps> = ({
    message,
    type = "info",
    duration = 3000,
    onClose,
    animation = "fade",
}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    useEffect(() => {
        if (!visible) {
            const timer = setTimeout(() => onClose?.(), 300); // время анимации
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <div
            className={`${styles.toast} ${styles[type]} ${visible
                    ? animation === "slide"
                        ? styles.enterSlide
                        : styles.enterFade
                    : animation === "slide"
                        ? styles.exitSlide
                        : styles.exitFade
                }`}
        >
            {message}
            <button
                onClick={() => setVisible(false)}
                className={styles.closeBtn}
            >
                <FaXmark />
            </button>
        </div>
    );
};
