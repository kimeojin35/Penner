"use client";
import { Check } from "@/assets";
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
    default: <Check />,
    error: "",
    fail: "",
    success: <Check />,
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
      className={`fixed animate-toast-bottom z-20 py-4 px-5 bottom-4 flex max-w-[400px] items-center justify-center rounded-full bg-gray800 shadow-md gap-4`}
    >
      <div className="rounded-full flex w-7 h-7 justify-center items-center bg-white">
        {toastType[type]}
      </div>
      <p className="text-medium18 text-white">{message}</p>
    </div>
  );
}
