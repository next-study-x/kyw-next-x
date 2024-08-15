import NavSection from "./_components/nav";
import NavProfile from "./_components/nav_profile";
import NavSearchSection from "./_components/nav_search_section";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-stretch bg-[#000]">
      <header className="grow flex flex-col items-end">
        <section className="w-[275px] h-screen">
          <div className="p-2 fixed w-[275px] h-screen flex flex-col">
            <NavSection />
            <NavProfile />
          </div>
        </section>
      </header>
      <div className="flex items-start h-full flex-col grow">
        <div className=" h-full w-[990px] flex justify-between">
          <main className="w-[600px] border-x border-gray-100">{children}</main>
          <NavSearchSection />
        </div>
      </div>
    </div>
  );
}
