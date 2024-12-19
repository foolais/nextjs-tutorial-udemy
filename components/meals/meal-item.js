import Image from "next/image";
import Link from "next/link";

export default function MealItem(props) {
  const { id, title, creator, slug, image, summary } = props;

  return (
    <article className="rounded-lg overflow-hidden bg-stone-800">
      <header>
        <div className="relative h-52 w-full">
          <Image
            src={image}
            alt={id}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold tracking-wide bg-clip-text text-transparent bg-primary">
            {title.length <= 15 ? title : title.slice(0, 15) + "..."}
          </h2>
          <p className="capitalize text-sm text-stone-400">by {creator}</p>
        </div>
      </header>
      <div className="px-4 pb-4 min-h-[150px] max-h-[150px] flex  flex-col justify-between">
        <p className="font-light text-balance">
          {summary.length < 75 ? summary : summary.slice(0, 75) + "..."}
        </p>
        <div className="mt-6 flex justify-end">
          <Link
            href={`/meals/${slug}`}
            className="bg-primary py-2 px-4 rounded-md font-semibold hover:text-foreground transition-all duration-300 ease-in-out"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
