import Post from "@/app/(afterLogin)/_components/post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import PostIcons from "@/app/(afterLogin)/_components/post/post_icons";
import PhotoModalCloseButton from "./_componet/PhotoModalCloseButton";
import { faker } from "@faker-js/faker";

export default function PhotoModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };
  return (
    <div className="bg-black bg-opacity-95 fixed z-50 left-0 top-0 w-screen h-screen flex flex-row">
      <PhotoModalCloseButton />
      <div className="flex-1 flex flex-col">
        <img src={photo.link} alt={photo.Post?.content} className="hidden" />
        <div
          className="flex-1 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${photo.link})` }}
        />
        <div className="flex justify-center items-center">
          <div className="w-[600px] h-[60px]">
            <PostIcons />
          </div>
        </div>
      </div>
      <div className="w-[350px] bg-white border-l border-gray-200 overflow-auto">
        <Post />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
