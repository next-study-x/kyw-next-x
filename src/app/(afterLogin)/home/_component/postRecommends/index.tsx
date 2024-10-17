"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../../_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_components/post";
import { PostItem } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<PostItem[]>({
    queryKey: ["posts", "recommends"],
    queryFn: () => getPostRecommends(),
    staleTime: 1000 * 60,
  });
  console.log(data);
  return data?.map((post) => <Post key={post.postId} post={post} />);
}
