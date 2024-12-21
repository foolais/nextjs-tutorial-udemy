import NewsList from "@/components/news/news-list";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) throw new Error("Failed to fetch news");

  const news = await response.json();

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
