import { faker } from "@faker-js/faker";
import Link from "next/link";
import BackButton from "../../_components/backbutton";
import clsx from "clsx";
import { dateFormatter } from "@/utils/date_format";

export default function ChatRoom() {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };

  const message = [
    {
      messageId: 1,
      roomId: 123,
      id: "won",
      content: "안녕하세요",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "woong_zzang97",
      content: "안녕하세요zz",
      createdAt: new Date(),
    },
  ];

  const messageCommon = "pb-6";

  return (
    <main className="px-4 text-white w-[600px] h-[100dvh] flex flex-col items-stretch">
      <div className="h-[54px] flex items-center">
        <BackButton />
        <h2 className="text-20 font-bold ml-[40px]">{user.nickname}</h2>
      </div>
      <Link
        className="mb-5 border-b border-gray-100 transition-[background-color] hover:bg-gray-100/30 py-5 px-4 flex flex-col items-center"
        href={user.nickname}
      >
        <img
          className="w-[64px] h-[64px] rounded-full"
          src={user.image}
          alt={user.id}
        />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div>
        {message.map((m) => {
          if (m.id === "woong_zzang97") {
            return (
              <div
                className={`${messageCommon} flex flex-col items-end`}
                key={m.messageId}
              >
                <div className="leading-[20px] text-15 py-3 px-4 bg-[#0083eb] rounded-[22px]">
                  {m.content}
                </div>
                <div className="mt-2 text-13 text-[#536471]">
                  {dateFormatter(m.createdAt)}
                </div>
              </div>
            );
          }
          return (
            <div
              className={`${messageCommon} flex flex-col items-start`}
              key={m.messageId}
            >
              <div className="leading-[20px] text-15 py-3 px-4 text-black bg-[#eff3f4] rounded-[22px]">
                {m.content}
              </div>
              <div className="mt-2 text-13 text-[#536471]">
                {dateFormatter(m.createdAt)}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
