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

export default function FilteredNewsPage({ params }) {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news available for this selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth))
  ) {
    notFound();
  }

  return (
    <>
      <header>
        <nav>
          <ul className="flex gap-6 mb-4">
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link
                    href={href}
                    className="hover:text-primary text-lg font-semibold transition-all duration-300 ease-in-out text-stone-300"
                  >
                    {selectedYear ? setMonthByNumber(link) : link}
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
