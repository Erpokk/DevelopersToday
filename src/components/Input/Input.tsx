import React, { useState } from "react";
import styles from "./Input.module.css";
import { FaEye, FaEyeSlash, FaTimes, FaPlus, FaMinus } from "react-icons/fa";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({ type = "text", clearable, ...props }) => {
    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClear = () => setValue("");
    const togglePassword = () => setShowPassword((prev) => !prev);
    const increment = () => setValue((prev) => String(Number(prev || 0) + 1));
    const decrement = () => setValue((prev) => String(Number(prev || 0) - 1));

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperInput}>
                <input
                    {...props}
                    type={inputType}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={styles.input}
                />

                {/* Number controls */}

                <div className={styles.actions}>
                    {type === "number" && (
                        <>
                            <button type="button" onClick={increment} className={styles.iconBtn}>
                                <FaPlus />
                            </button>
                            <button type="button" onClick={decrement} className={styles.iconBtn}>
                                <FaMinus />
                            </button>
                        </>
                    )}
                    {type === "password" && (
                        <button type="button" onClick={togglePassword} className={styles.iconBtn}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    )}
                </div>
            </div>
            {clearable && value && (
                <button type="button" onClick={handleClear} className={styles.iconBtn}>
                    <FaTimes />
                </button>
            )}
        </div>
    );
};
