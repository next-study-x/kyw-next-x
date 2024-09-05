import SearchForm from "../_components/searchForm";
import Trend from "../_components/trend";

export default function Page() {
  return (
    <div>
      <SearchForm />
      <div className="text-white">
        <h3 className="p-3 text-[20px] font-bold text-[#E7E9EA]">
          Trends for you
        </h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
