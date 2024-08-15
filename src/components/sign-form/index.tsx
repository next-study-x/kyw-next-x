"use client";

import { useState } from "react";
import Modal from "../modal";
import TextFiled from "../textFiled";
import Button from "../button";
import DateSelector from "../date-selector";

export default function SignForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Modal>
      <Modal.header />
      <Modal.body className="px-[80px] flex flex-col w-full h-full">
        <div className="flex flex-col gap-7">
          <h1 className="mt-5 text-white font-bold text-[31px]">
            계정을 생성하세요
          </h1>
          <TextFiled
            label="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextFiled
            label="휴대폰"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <p className="pt-3 text-blue-500 text-15 text-end hover:underline">
          대신 이메일 사용하기
        </p>
        <div className="mt-5 flex-1">
          <p className="mb-2 text-white text-15 font-bold">생년월일</p>
          <p className="mb-1 text-[#71767b] text-14 tracking-[-0.3px] leading-[16px]">
            이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
            주제에 상관없이 나의 연령을 확인하세요.
          </p>
          <div className="flex">
            <DateSelector />
          </div>
        </div>
        <Button
          disabled={!name && !phoneNumber}
          as="button"
          className="w-full h-[52px] my-3 rounded-full disabled:bg-[#787a7a]"
        >
          다음
        </Button>
      </Modal.body>
    </Modal>
  );
}
