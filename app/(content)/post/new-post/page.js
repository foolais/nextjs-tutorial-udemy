import PostForm from "@/components/post/post-form";
import { storePost } from "@/lib/post";
import { redirect } from "next/navigation";

export default function NewPostsPage() {
  async function createPost(prevState, formData) {
    "use server";
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    let errors = [];

    if (!title || title.trim().length === 0) {
      errors.push("Title is required!");
    }

    if (!image || image?.size === 0) errors.push("Image is required!");

    if (!content || content.trim().length === 0) {
      errors.push("Content is required!");
    }

    if (errors.length > 0) return { errors };

    await storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });

    redirect("/post");
  }

  return <PostForm action={createPost} />;
}
