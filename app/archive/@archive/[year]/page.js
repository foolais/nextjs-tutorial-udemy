import NewsList from "@/components/news/news-list";
import { getNewsForYear } from "@/lib/news";

export default function ArchiveYearPage({ params }) {
  const { year } = params;
  const newsItem = getNewsForYear(year);

  return <NewsList news={newsItem} />;
}
