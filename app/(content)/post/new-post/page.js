import { createPost } from "@/actions/post/posts";
import PostForm from "@/components/post/post-form";

export default function NewPostsPage() {
  return <PostForm action={createPost} />;
}
