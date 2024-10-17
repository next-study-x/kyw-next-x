import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Post from "../_components/post";
import PostForm from "./_component/post-form";
import Tab from "./_component/tab";
import TabProvider from "./_component/tab_provider";
import { getPostRecommends } from "./_lib/getPostRecommends";
import PostRecommends from "./_component/postRecommends";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: () => getPostRecommends(),
  });
  const dehydreateState = dehydrate(queryClient);

  console.log(queryClient.getQueryData(["posts", "recommends"]));
  return (
    <main>
      <HydrationBoundary state={dehydreateState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
