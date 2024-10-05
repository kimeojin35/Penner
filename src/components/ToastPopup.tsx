"use client";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  setToast: any;
  position?: "top" | "bottom";
  type?: "default" | "error" | "fail" | "success";
}

export function ToastPopup({
  message,
  setToast,
  position = "bottom",
  type = "default",
}: ToastProps) {
  const toastType = {
    default: "",
    error: "",
    fail: "",
    success: "",
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);
  return (
    <div
      className={`${
        toastType[type]
      } fixed z-20 p-4 flex w-full max-w-[400px] items-center justify-center rounded-lg bg-gray100 opacity-90 backdrop-blur-xl shadow-[0px_2px_8px_rgba(0,0,0,0.25)] ${
        position === "top" ? "animate-toast-top" : "animate-toast-bottom"
      }`}
    >
      <p className="text-medium20 text-gray800">{message}</p>
    </div>
  );
}
