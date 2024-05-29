"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white dark:bg-gray900">
      <p className="text-black dark:text-white text-title24Bold">404</p>
      <button onClick={() => router.push("/")}>뒤로가기</button>
    </div>
  );
}
