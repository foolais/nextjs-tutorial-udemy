import Posts from "@/components/post/posts";
import { getPosts } from "@/lib/post";
import Link from "next/link";

export default async function PostPage() {
  const posts = await getPosts();
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-heading">
          All <span className="text-primary">posts</span> by all users
        </h1>
        <Link href="/post/new-post" className="btn-primary">
          <p>Create a new post</p>
        </Link>
      </header>
      <Posts posts={posts} />
    </>
  );
}
