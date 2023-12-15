"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/signin");
    }
  }, []);

  return (
    <div>
      <h1>Logged In</h1>
    </div>
  );
}
