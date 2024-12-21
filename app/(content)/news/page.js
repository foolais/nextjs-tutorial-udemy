import NewsList from "@/components/news/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <header className="pb-6">
        <h1 className="text-heading">News Page</h1>
      </header>
      <main>
        <NewsList news={news} />;
      </main>
    </>
  );
}
