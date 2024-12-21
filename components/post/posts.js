"use client";

import { formatDate } from "@/lib/format";
import Image from "next/image";
import LikeButton from "./like-icon";
import { togglePostLikeStatus } from "@/actions/post/posts";
import { useOptimistic } from "react";

function Post({ post, action }) {
  return (
    <article className="flex gap-4 border-[1px] border-stone-600 p-4 rounded-md max-w-[650px]">
      <div className="relative w-[150px] aspect-square">
        <Image
          src={post.image || ""}
          alt={post.title}
          fill
          className="object-cover object-center rounded-md"
        />
      </div>
      <div className="w-full flex flex-col justify-around">
        <header className="flex justify-between gap-4">
          <div className="grid gap-1">
            <h2 className="text-2xl font-semibold tracking-wide">
              {post.title}
            </h2>
            <p className="text-sm">
              Shared by {post.userFirstName} on{" "}
              <span>{formatDate(post.createdAt)}</span>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? "liked" : ""}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(
    posts,
    (prevPosts, updatedPostId) => {
      const updatedPostIndex = prevPosts.findIndex(
        (post) => post.id === updatedPostId
      );

      if (updatedPostIndex === -1) return prevPosts;

      const updatedPost = { ...prevPosts[updatedPostIndex] };
      updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
      updatedPost.isLiked = !updatedPost.isLiked;
      const newPosts = [...prevPosts];
      newPosts[updatedPostIndex] = updatedPost;

      return newPosts;
    }
  );

  if (!optimisticPosts || optimisticPosts.length === 0)
    return <p className="text-center">There are no posts yet.</p>;

  async function updatePost(postId) {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="flex flex-col gap-4 my-8">
      {optimisticPosts.map((post, index) => (
        <Post key={index} post={post} action={updatePost} />
      ))}
    </ul>
  );
}
