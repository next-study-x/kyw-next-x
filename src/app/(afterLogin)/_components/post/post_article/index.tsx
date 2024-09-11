"use client";

import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article
      className="relative px-4 py-3 flex border-b gap-2 border-gray-100"
      onClickCapture={onClick}
    >
      {children}
    </article>
  );
}
