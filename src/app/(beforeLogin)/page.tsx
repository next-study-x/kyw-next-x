import Footer from "@/components/footer";
import LoginLeftSection from "@/ui/login-home/left-section";
import LoginRightSection from "@/ui/login-home/right-section";
import Button from "@/components/button";
import Image from "next/image";
import GoogleLogo from "../../../public/googleLogo.png";
import TextDivider from "@/components/text-divider";

export default function Home() {
  return (
    <main className="w-dvw h-dvh flex flex-col bg-[#000]">
      <div className="h-full w-full flex sm:flex-col md:flex-row items-center mx-auto">
        <LoginLeftSection />
        <LoginRightSection />
      </div>
      {/* 푸터 영역 */}
      <Footer />
    </main>
  );
}
