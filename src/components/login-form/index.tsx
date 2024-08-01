"use client";

import XLogo from "../../../public/Zlogogg.png";
import GoogleLogo from "../../../public/googleLogo.png";

import Link from "next/link";
import Image from "next/image";

import Button from "../button";
import TextDivider from "../text-divider";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <div
      style={{ backgroundColor: "rgba(91, 112, 131, 0.4)" }}
      className="w-[100vw] h-[full] flex items-center justify-center absolute inset-0"
    >
      <div className="py-[12px] relative bg-black w-[600px] h-[650px] flex flex-col items-center rounded-16">
        <div
          onClick={onClose}
          className="absolute w-[34px] h-[34px] border-none cursor-pointer left-4 top-4 hover:bg-black/50"
        >
          <svg
            width={20}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path
                fill="#fff"
                d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
              ></path>
            </g>
          </svg>
        </div>
        <Image src={XLogo} width={30} height={30} alt="X logo" />
        <div className="mx-auto min-w-[364px] max-w-[364px] px-8">
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
            className="mt-3 w-full h-[56px] pl-2 placeholder:text-[#71767a] placeholder:text-[16px] bg-black border border-gray-100 rounded"
            placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
          />
          <Button as="link" className="mt-6">
            다음
          </Button>
          <Button
            as="link"
            appearance="black"
            className="mt-6 text-white border border-[#536471]"
          >
            비밀번호를 잊으셨나요?
          </Button>
          <div className="mt-12 flex items-center gap-0.5 text-15">
            <p className="text-[#71767a]">계정이 없으신가요?</p>
            <Link href={""} className="text-blue-500 hover:underline">
              가입하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
