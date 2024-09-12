"use client";

import { useRouter } from "next/navigation";
import { faker } from "@faker-js/faker";
import { dateFormatter } from "@/utils/date_format";

export default function Room() {
  const router = useRouter();
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { roomId: 123, content: "안녕하세요", createdAt: new Date() },
      { roomId: 123, content: "안녕하세요zz", createdAt: new Date() },
    ],
  };

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <div
      onClickCapture={onClick}
      className="p-4 flex flex-row transition-[background-color] hover:bg-gray-100/50 cursor-pointer"
    >
      <div className="w-[40px] h-[40px] rounded-full mr-4">
        <img src={faker.image.avatar()} alt="아바타" />
      </div>
      <div className="flex flex-col">
        <div className="text-[#536471]">
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp;
          <span>{dateFormatter(user.Messages?.at(-1).createdAt)}</span>
        </div>
        <div className="text-[#536471]">{user.Messages?.at(-1)?.content}</div>
      </div>
    </div>
  );
}
