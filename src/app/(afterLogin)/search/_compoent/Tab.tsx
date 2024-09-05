"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className="fixed z-10 w-[598px] bg-black bg-opacity-85 backdrop-blur-md">
      <div className="flex h-[53px]">
        <div
          onClick={onClickHot}
          className="flex-1 flex items-center justify-center text-sm cursor-pointer relative text-white"
        >
          인기
          <div
            className={`h-[4px] bg-blue-500 w-[56px] absolute bottom-0 rounded-full ${
              current === "new" ? "hidden" : ""
            }`}
          ></div>
        </div>
        <div
          onClick={onClickNew}
          className="flex-1 flex items-center justify-center text-sm cursor-pointer relative text-white"
        >
          최신
          <div
            className={`h-[4px] bg-blue-500 w-[56px] absolute bottom-0 rounded-full ${
              current === "hot" ? "hidden" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
