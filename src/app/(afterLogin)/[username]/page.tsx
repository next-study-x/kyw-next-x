import BackButton from "../_components/backbutton";
import Post from "../_components/post";

export default function Profile() {
  const user = {
    nickname: "어영웅",
    id: "woong_zzang97",
    image: "/trip.png",
  };

  return (
    <main className="w-[600px] flex flex-col">
      <div className="flex items-center h-[53px] text-white">
        <BackButton />
        <h3 className="text-xl font-bold ml-[30px]">{user.nickname}</h3>
      </div>
      <div className="flex items-center border-b border-gray-100 p-3">
        <div className="flex items-center mr-3 rounded-full">
          <img
            src={user.image}
            alt={user.id}
            className="w-[134px] rounded-full"
          />
        </div>
        <div className="flex-1 mx-3">
          <div className="font-bold text-xl">{user.nickname}</div>
          <div className="text-sm">@{user.id}</div>
        </div>
        <button className="border border-gray-300 px-4 py-0 rounded-full h-[34px] bg-black text-white text-sm flex items-center justify-center cursor-pointer hover:bg-gray-800">
          팔로우
        </button>
      </div>
      <div>
        <Post />
        <Post />
      </div>
    </main>
  );
}
