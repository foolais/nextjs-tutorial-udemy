import Image from "next/image";
import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="grid grid-cols-3 lg:grid-cols-4 gap-6 my-4">
      {news.map((news) => {
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
  );
}
