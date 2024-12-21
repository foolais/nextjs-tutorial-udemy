import { formatDate } from "@/lib/format";
import Image from "next/image";
import LikeButton from "./like-icon";

function Post({ post }) {
  return (
    <article>
      <div className="w-[200px] aspect-[3/4]">
        <Image src={post.image} alt={post.title} fill />
      </div>
      <div>
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
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
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
