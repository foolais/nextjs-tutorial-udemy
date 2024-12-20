import Link from "next/link";
import { DUMMY_NEWS } from "@/lib/dummy-news";
import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <header className="pb-6">
        <h1 className="text-heading">News Page</h1>
      </header>
      <main>
        <ul className="grid grid-cols-3 lg:grid-cols-4 gap-6 my-4">
          {DUMMY_NEWS.map((news) => {
            return (
              <li
                key={news.id}
                className="text-center hover:bg-stone-800 rounded-md pb-4"
              >
                <Link
                  href={`/news/${news.slug}`}
                  className="center flex-col font-semibold hover:text-primary transition-all duration-300 ease-in-out text-lg gap-4"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={`/images/${news.image}`}
                      alt={news.title}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                  <span>{news.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
