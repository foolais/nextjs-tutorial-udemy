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
import { Suspense } from "react";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    notFound();
  }

  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header>
      <nav>
        <ul className="flex gap-6 mb-4">
          {year && (
            <li>
              <NavBack text="Go back" />
            </li>
          )}
          {links.map((link) => {
            const href = year
              ? `/archive/filter/${year}/${link}`
              : `/archive/filter/${link}`;

            return (
              <li key={link}>
                <Link
                  href={href}
                  className="hover:text-primary text-lg font-semibold transition-all duration-300 ease-in-out text-stone-300"
                >
                  {year ? setMonthByNumber(+link) : link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  if (news && news.length > 0) {
    return <NewsList news={news} />;
  }
  return <p>No news available for this selected period</p>;
}

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p className="text-loading">Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p className="text-loading">Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
