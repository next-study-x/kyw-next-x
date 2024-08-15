export default function FollowProfile() {
  return (
    <div className="my-4 p-3 flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-3 ">
        <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#689f38] rounded-full">
          <p className="text-white">영웅</p>
        </div>
        <div className="flex flex-col">
          <p className="text-15 text-white font-bold">김영웅</p>
          <p className=" text-15 text-gray-400">@woong_zzang97</p>
        </div>
      </div>
      <button className="w-[72px] h-[32px] text-center text-14 rounded-full font-bold bg-white text-black">
        Follow
      </button>
    </div>
  );
}
