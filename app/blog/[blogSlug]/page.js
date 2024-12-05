import Link from "next/link";

export default async function BlogPostPage({ params }) {
  const { blogSlug } = await params;
  return (
    <main>
      <h1>Blog {blogSlug} </h1>
      <div className="link-container">
        <p className="link">
          <Link href="/blog">Go Back</Link>
        </p>
      </div>
    </main>
  );
}
