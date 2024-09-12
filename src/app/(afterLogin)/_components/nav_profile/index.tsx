import Link from "next/link";

export default function NavProfile() {
  return (
    <Link
      href={`/woong_zzang97`}
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
          <svg
            fill="white"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-[18px] r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i"
          >
            <g>
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </g>
          </svg>
        </div>
      </div>
    </Link>
  );
}
