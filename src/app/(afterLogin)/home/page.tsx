import Post from "../_components/post";
import PostForm from "./_component/post-form";
import Tab from "./_component/tab";
import TabProvider from "./_component/tab_provider";

export default function Home() {
  return (
    <main>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
