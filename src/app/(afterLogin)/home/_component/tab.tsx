"use client";

import clsx from "clsx";
import { useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("for");

  return (
    <div className="sticky top-0 backdrop-blur-[20px] w-[598px] border-b border-gray-100 z-50">
      <div className="flex">
        <div
          onClick={() => setTab("for")}
          className={clsx(
            "py-4 text-15 flex-1 flex justify-center text-[#71767B] hover:bg-gray-100/50 cursor-pointer",
            { "!text-white font-bold": tab === "for" }
          )}
        >
          For you
          {tab === "for" && (
            <div className="absolute bottom-0 w-[56px] h-[4px] bg-blue-500 rounded-full" />
          )}
        </div>
        <div
          onClick={() => setTab("rec")}
          className={clsx(
            "py-4 text-15 flex-1 flex justify-center text-[#71767B] hover:bg-gray-100/50 cursor-pointer",
            { "!text-white font-bold": tab === "rec" }
          )}
        >
          Following
          {tab === "rec" && (
            <div className="absolute bottom-0 w-[56px] h-[4px] bg-blue-500 rounded-full" />
          )}
          <div />
        </div>
      </div>
    </div>
  );
}
