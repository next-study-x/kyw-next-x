import BackButton from "@/app/(afterLogin)/_components/backbutton";
import Post from "@/app/(afterLogin)/_components/post";
import CommentForm from "./_component/CommentForm";

export default function SinglePost() {
  return (
    <div className="text-white w-[599px] border-r border-gray-100 bg-black flex flex-col items-stretch">
      <div className="flex h-[53px] items-center">
        <BackButton />
        <h3 className="text-20 font-bold">게시하기</h3>
      </div>
      <Post />
      <CommentForm />
    </div>
  );
}
