"use client";

// import { DUMMY_NEWS } from "@/lib/dummy-news";
import NewsList from "@/components/news/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
        setNews([]);
      }

      const data = await response.json();
      setNews(data);
      setIsLoading(false);
    }

    fetchNews();
  }, []);

  if (isLoading)
    return <p className="center text-white text-2xl">Loading...</p>;
  if (error) return <p className="center text-white text-2xl">{error}</p>;

  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header className="pb-6">
        <h1 className="text-heading">News Page</h1>
      </header>
      <main>{newsContent}</main>
    </>
  );
}
