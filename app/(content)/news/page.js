import { DUMMY_NEWS } from "@/lib/dummy-news";
import NewsList from "@/components/news/news-list";

export default function NewsPage() {
  return (
    <>
      <header className="pb-6">
        <h1 className="text-heading">News Page</h1>
      </header>
      <main>
        <NewsList news={DUMMY_NEWS} />
      </main>
    </>
  );
}
