import Trend from "../trend";

export default function TrendScetion() {
  return (
    <section>
      <div className="mb-4 border border-[#2f3336] rounded-[20px]">
        <div className="py-3 px-4">
          <h3 className="text-[20px] text-[#e7e9ea] font-bold">
            Trends for you
          </h3>
        </div>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </section>
  );
}
