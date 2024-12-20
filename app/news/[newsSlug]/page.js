import { DUMMY_NEWS } from "@/lib/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function NewsDetailPage({ params }) {
  const { newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article>
      <header className="flex flex-col gap-4 mb-4">
        <div className="relative w-[400px] aspect-[4/3]">
          <Image
            src={`/images/${newsItem.image}`}
            alt={newsItem.title}
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
        <h1 className="text-heading text-primary">{newsItem.title} </h1>
        <p>{newsItem.date}</p>
      </header>
      <p className="mt-4 tracking-wide">{newsItem.content}</p>
    </article>
  );
}
