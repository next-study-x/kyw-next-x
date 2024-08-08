"use client";

import { useState } from "react";

import Button from "@/components/button";
import Modal from "@/components/modal";
import TextFiled from "@/components/textFiled";

export default function PasswordResetForm() {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Modal>
      <Modal.header />
      <Modal.body className="px-[80px] h-full flex flex-col justify-between">
        <div>
          <div className="my-5">
            <h1 className="text-white font-bold text-[31px]">내 X 계정찾기</h1>
            <p className="text-[#71767b] text-15 tracking-[-0.3px]">
              비밀번호를 변경하려면 계정에 연결된 이메일, 전화번호 또는 사용자
              아이디를 입력해 주세요.
            </p>
          </div>
          <TextFiled
            label="이메일, 전화번호 또는 사용자 아이디"
            value={input}
            onChange={handleChange}
          />
        </div>
        <Button
          disabled={input.length === 0}
          as="button"
          className="w-full h-[52px] rounded-full my-6 disabled:bg-[#787a7a]"
        >
          다음
        </Button>
      </Modal.body>
    </Modal>
  );
}
