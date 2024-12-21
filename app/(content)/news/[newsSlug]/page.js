import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage({ params }) {
  const { newsSlug } = await params;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="absolute top-40">
      <header className="flex flex-col gap-4 mb-4">
        <Link href={`/news/${newsItem.slug}/image`}>
          <div className="relative w-[400px] aspect-[4/3]">
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
        </Link>
        <h1 className="text-heading text-primary">{newsItem.title} </h1>
        <p>{newsItem.date}</p>
      </header>
      <p className="mt-4 tracking-wide">{newsItem.content}</p>
    </article>
  );
}
