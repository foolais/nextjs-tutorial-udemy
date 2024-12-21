import { formatDate } from "@/lib/format";
import Image from "next/image";
import LikeButton from "./like-icon";

function Post({ post }) {
  return (
    <article className="flex gap-4 border-[1px] border-stone-600 p-4 rounded-md max-w-[650px]">
      <div className="relative w-[150px] aspect-square">
        <Image
          src={post.image || ""}
          alt={post.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="w-full flex flex-col justify-between">
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
            <LikeButton />
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  return (
    <ul className="flex flex-col gap-4 my-8">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
