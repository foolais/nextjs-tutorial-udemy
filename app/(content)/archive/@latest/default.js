import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2 className="text-heading text-xl">Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
