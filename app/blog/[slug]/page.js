import Link from "next/link";

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog {params.slug} </h1>
      <div className="link-container">
        <p className="link">
          <Link href="/blog">Go Back</Link>
        </p>
      </div>
    </main>
  );
}
