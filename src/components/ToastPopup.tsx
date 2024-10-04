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
      } fixed z-20 flex h-[4rem] w-[90%] max-w-[73rem] items-center justify-center rounded-[1rem] bg-green-50 opacity-[97%] shadow-[0px_2px_8px_rgba(0,0,0,0.25)] ${
        position === "top" ? "animate-toast-top" : "animate-toast-bottom"
      }`}
    >
      <p className="text-Body text-white">{message}</p>
    </div>
  );
}
//
