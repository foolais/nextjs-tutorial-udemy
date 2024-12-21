import NavBack from "@/components/nav-back";
import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
  setMonthByNumber,
} from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = await getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news available for this selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears()) ||
    (selectedMonth && !getAvailableNewsMonths(+selectedYear))
  ) {
    notFound();
  }

  return (
    <>
      <header>
        <nav>
          <ul className="flex gap-6 mb-4">
            {selectedYear && (
              <li>
                <NavBack text="Go back" />
              </li>
            )}
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/filter/${selectedYear}/${link}`
                : `/archive/filter/${link}`;

              return (
                <li key={link}>
                  <Link
                    href={href}
                    className="hover:text-primary text-lg font-semibold transition-all duration-300 ease-in-out text-stone-300"
                  >
                    {selectedYear ? setMonthByNumber(+link) : link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
