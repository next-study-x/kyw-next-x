import Footer from "@/components/footer";
import LeftSection from "@/section/login-home/left-section";
import RightSection from "@/section/login-home/right-section";

export default function Home() {
  return (
    <main className="w-dvw h-dvh flex flex-col bg-[#000]">
      <div className="h-full w-full flex sm:flex-col md:flex-row items-center mx-auto">
        {/* <div className="flex-1 flex justify-center items-center min-w-0 max-w-[1000px]">
          <Image src={Xlogo} width={360} height={30} alt="홈페이지 로고" />
        </div> */}
        <LeftSection />
        <RightSection />
      </div>

      {/* 푸터 영역 */}
      <Footer />
    </main>
  );
}
