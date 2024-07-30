"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-gray900">
      <p className="text-black dark:text-white text-title24Bold">404</p>
      <button
        className="dark:text-white text-gray900"
        onClick={() => router.back()}
      >
        뒤로가기
      </button>
    </div>
  );
}
