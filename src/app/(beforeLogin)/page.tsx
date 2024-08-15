import Footer from "@/components/footer";
import LoginLeftSection from "@/ui/login-home/left-section";
import LoginRightSection from "@/ui/login-home/right-section";

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
