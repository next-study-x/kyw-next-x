"use client";

import GoogleLogo from "../../../public/googleLogo.png";

import Link from "next/link";
import Image from "next/image";

import Button from "../button";
import TextDivider from "../text-divider";
import { useRouter } from "next/navigation";
import Modal from "../modal";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        username: id,
        password,
        redirect: false,
      });
      router.replace("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Modal className="top-[25%]">
      <Modal.header />
      <Modal.body>
        <form
          onSubmit={onSubmit}
          className="mx-auto min-w-[364px] max-w-[364px] px-8"
        >
          <h1 className="mt-6 mb-7 text-gray-600 text-[31px] font-bold">
            X 가입하기
          </h1>
          <div className="mb-6 p-2 rounded-[20px] w-[300px] h-[38px] flex items-center gap-2 bg-white">
            <div className="p-1 bg-[#689f38] text-white rounded-full text-[8px]">
              영웅
            </div>
            <div className="flex-1 flex flex-col text-[11px]">
              <p className="text-[#3c4043]">영웅(으)로 로그인</p>
              <p className="text-[#5f6368]">houndhollis9797@gmail.com</p>
            </div>
            <Image src={GoogleLogo} width={18} height={18} alt="구글로고" />
          </div>
          <Button as="link" className="mb-3">
             Apple로 로그인하기
          </Button>
          <TextDivider text="또는" className="text-[17px]" />
          <input
            type="text"
            className="outline-none text-white mt-3 w-full h-[56px] pl-2 placeholder:text-[#71767a] placeholder:text-[16px] bg-black border border-gray-100 rounded"
            placeholder="이메일 주소 또는 사용자 아이디"
            value={id}
            onChange={onChangeId}
          />
          <input
            type="password"
            className="outline-none text-white mt-3 w-full h-[56px] pl-2 placeholder:text-[#71767a] placeholder:text-[16px] bg-black border border-gray-100 rounded"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={onChangePassword}
          />
          <Button type="submit" as={"button"} className="mt-6">
            다음
          </Button>
          <Button
            as="button"
            appearance="black"
            onClick={() => router.replace("/i/flow/password_reset")}
            className="mt-6 text-white border border-[#536471] hover:bg-gray-100/50"
          >
            비밀번호를 잊으셨나요?
          </Button>
          <div className="mt-12 flex items-center gap-0.5 text-15">
            <p className="text-[#71767a]">계정이 없으신가요?</p>
            <Link href={""} className="text-blue-500 hover:underline">
              가입하기
            </Link>
          </div>
        </form>
      </Modal.body>
    </Modal>
  );
};

export default LoginForm;
