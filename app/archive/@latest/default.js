import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2 className="text-heading text-xl">Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
