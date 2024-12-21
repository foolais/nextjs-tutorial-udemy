import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const { newsSlug } = await params;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog
        open
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl p-2 bg-stone-800 rounded-md overflow-hidden"
      >
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </dialog>
    </>
  );
}
