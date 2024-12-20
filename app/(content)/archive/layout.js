export default function ArchiveLayout({ archive, latest }) {
  return (
    <main>
      <h1 className="text-heading mb-4"> News Archive</h1>
      <section>{archive}</section>
      <span className="block h-[0.5px] bg-white my-6"></span>
      <section id="latest-news">{latest}</section>
    </main>
  );
}
