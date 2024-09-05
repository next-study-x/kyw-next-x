import BackButton from "../_components/backbutton";
import Post from "../_components/post";
import SearchForm from "../_components/searchForm";
import Tab from "./_compoent/Tab";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};
export default function SearchPage({ searchParams }: Props) {
  return (
    <main className="w-[600px] flex flex-col">
      <div className="z-50 bg-black bg-opacity-85 backdrop-blur-md w-[600px] fixed">
        <div className="flex items-center">
          <div className="w-[56px]">
            <BackButton />
          </div>
          <div className="flex items-center h-[53px] w-[543px]">
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className="mt-[110px]">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/* <SearchResult searchParams={searchParams} /> */}
      </div>
    </main>
  );
}
