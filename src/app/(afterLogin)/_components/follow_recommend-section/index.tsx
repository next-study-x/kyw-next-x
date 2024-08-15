import FollowProfile from "../follow_profile";

export default function FollowRecommendSection() {
  return (
    <section>
      <div className="border border-[#2f3336] rounded-[20px]">
        <div className="py-3 px-4">
          <h3 className="text-[20px] text-[#e7e9ea] font-bold">
            Who to Follow
          </h3>
        </div>
        <FollowProfile />
        <FollowProfile />
        <FollowProfile />
      </div>
    </section>
  );
}
