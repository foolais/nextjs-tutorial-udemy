import Link from "next/link";

export default function MealItem(props) {
  const { slug } = props;
  return (
    <article>
      <header>
        {/* images */}
        <div>
          <h2>title</h2>
          <p>by creator</p>
        </div>
      </header>
      <div>
        <p>description</p>
        <div>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
