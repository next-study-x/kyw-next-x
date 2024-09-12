import Image from "next/image";
import TripImage from "../../../../../public/trip.png";
import PostIcons from "./post_icons";
import { dateFormatter } from "@/utils/date_format";
import PostArticle from "./post_article";
import Link from "next/link";
import { faker } from "@faker-js/faker";
import PostImages from "./post_images";

export default function Post() {
  const target = {
    postId: 1,
    User: {
      id: "woong_zzang97",
      nickname: "영웅",
      image: "/trip.png",
    },
    content: "바다가고 싶다..",
    createdAt: new Date(),
    Images: [
      {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 2,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 3,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 4,
        link: faker.image.urlLoremFlickr(),
      },
    ],
  };

  return (
    <PostArticle post={target}>
      <div>
        <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#689f38] rounded-full">
          <p className="text-white">영웅</p>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 self-start">
            <Link
              href={`/${target.User.id}`}
              className=" text-15 text-[#E7E9EA] font-bold"
            >
              woong_zzang97
            </Link>
            <svg
              fill="rgb(29 155 240)"
              viewBox="0 0 22 22"
              aria-label="Verified account"
              role="img"
              className="w-[18px] h-[18px] r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i"
              data-testid="icon-verified"
            >
              <g>
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
              </g>
            </svg>
            <p className="text-[#71767B] text-15">
              {dateFormatter("2024-08-29T03:33:15.887Z")}
            </p>
          </div>
          <div className="absolute top-1.5 right-1.5 w-[34px] h-[34px] flex items-center justify-center hover:bg-[#051824] rounded-full">
            <svg
              fill="gray"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="hover:fill-blue-500 cursor-pointer w-[18px] r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i"
            >
              <g>
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </g>
            </svg>
          </div>
        </div>
        <p className="text-white">🚨 바다 가고 싶습니다, </p>
        <div>
          <PostImages post={target} />
        </div>
        <PostIcons />
      </div>
    </PostArticle>
  );
}
