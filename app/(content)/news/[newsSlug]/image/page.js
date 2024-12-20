import { DUMMY_NEWS } from "@/lib/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const { newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="relative w-full aspect-[4/3]">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        fill
        className="rounded-md object-cover object-center"
      />
    </div>
  );
}
