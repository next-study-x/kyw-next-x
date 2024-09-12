"use client";

import { usePathname } from "next/navigation";
import TrendScetion from "../trend_section";
import FollowRecommendSection from "../follow_recommend-section";

export default function NavSearchSection() {
  const pathname = usePathname();

  return (
    <section className="hidden md:inline-flex w-[350px] flex-col gap-4">
      {pathname !== "/explore" && (
        <form className="flex items-center sticky top-[-0.5px] h-[42px] w-[350px] mt-1.5 rounded-[20px] bg-[#202327] z-50">
          <svg
            className="ml-5"
            fill="rgb(83, 100, 113)"
            width={20}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </g>
          </svg>
          <input
            className="outline-none h-full bg-[#202327] border-none p-3 ml-[5px] text-15"
            type="search"
            placeholder="Search"
          />
        </form>
      )}
      <div className="sticky top-0">
        {pathname !== "/explore" && <TrendScetion />}
        <FollowRecommendSection />
      </div>
    </section>
  );
}
