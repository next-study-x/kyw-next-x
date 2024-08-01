import Image from "next/image";
import Xlogo from "../../../public/Zlogogg.png";
import GoogleLogo from "../../../public/googleLogo.png";

import Footer from "@/components/footer";
import Button from "@/components/button";
import TextDivider from "@/components/text-divider";

export default function Home() {
  return (
    <main className="w-dvw h-dvh flex flex-col bg-[#000]">
      <div className="h-full w-full flex sm:flex-col md:flex-row items-center mx-auto">
        <div className="flex-1 flex justify-center items-center min-w-0 max-w-[1000px]">
          <Image src={Xlogo} width={360} height={30} alt="홈페이지 로고" />
        </div>

        <div className="flex-1 flex flex-col justify-center text-[#E7E9EA] px-9">
          <h1 className="my-8 text-[64px] font-bold whitespace-nowrap tracking-[-1.2px]">
            지금 일어나고 있는 일
          </h1>
          <h2 className="mb-8 text-[31px] font-bold">지금 가입하세요.</h2>
          <div className="flex flex-col gap-2">
            <div className="p-2 rounded-[20px] w-[300px] h-[38px] flex items-center gap-2 bg-white">
              <div className="p-1 bg-[#689f38] rounded-full text-[8px]">
                영웅
              </div>
              <div className="flex-1 flex flex-col text-[11px]">
                <p className="text-[#3c4043]">영웅(으)로 로그인</p>
                <p className="text-[#5f6368]">houndhollis9797@gmail.com</p>
              </div>
              <Image src={GoogleLogo} width={18} height={18} alt="구글로고" />
            </div>
            <Button as="button" className="text-black">
               Apple에서 가입하기
            </Button>
            <TextDivider text="또는" />
            <Button as="link" href="/i/flow/signup" appearance="blue">
              계정 만들기
            </Button>
            <div className="w-[300px] mb-5">
              <p className="text-11 font-normal text-[#71767c]">
                가입하시려면 <span className="text-[#1d9bf0]">쿠기 사용</span>을
                포함해 <span className="text-[#1d9bf0]">이용약관</span>과{" "}
                <span className="text-[#1d9bf0]">개인정보 처리방침</span>에
                동의해야 합니다.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="mb-5 text-[#E7E9EA] text-[17px] font-bold">
                이미 트위터에 가입하셨나요?
              </h2>
              <Button
                as="link"
                href="/i/flow/login"
                appearance="black"
                className="border border-[#536471] text-[#1d9bf0] hover:bg-gray-100/50 an"
              >
                로그인
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 영역 */}
      <Footer />
    </main>
  );
}
