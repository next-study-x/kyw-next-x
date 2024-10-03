"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function NavProfile() {
  const router = useRouter();
  const { data } = useSession();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => router.replace("/"));
  };

  if (!data) {
    return;
  }
  return (
    <div
      onClick={onLogout}
      className="my-4 p-3 flex items-center justify-between hover:bg-gray-100/50 rounded-[33px] cursor-pointer"
    >
      <div className="w-full flex items-center gap-3">
        <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#689f38] rounded-full">
          <p className="text-white">영웅</p>
        </div>
        <div className="hidden lg:inline-flex items-center justify-between flex-grow">
          <div className="flex flex-col gap-0.5">
            <p className="text-15 text-white font-bold">김영웅</p>
            <p className=" text-15 text-gray-400">@woong_zzang97</p>
          </div>
        </div>
      </div>
    </div>
  );
}
