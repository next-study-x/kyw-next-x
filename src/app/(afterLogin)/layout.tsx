import NavSection from "./_components/nav";
import NavProfile from "./_components/nav_profile";
import NavSearchSection from "./_components/nav_search_section";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="h-full flex items-stretch bg-[#000]">
      <header className="grow flex flex-col items-end">
        <section className="w-[72px] lg:w-[275px] h-screen">
          <div className="p-2 fixed w-[inherit] px-2 lg:px-0 h-screen flex flex-col items-center lg:items-stretch">
            <NavSection />
            <NavProfile />
          </div>
        </section>
      </header>
      <div className="flex items-start h-full flex-col grow">
        <div className=" h-full w-[660px] lg:w-[990px] flex justify-between">
          <main className="w-[600px] border-x border-gray-100">{children}</main>
          <NavSearchSection />
        </div>
      </div>
      {modal}
    </div>
  );
}
