export default function ArchiveLayout(props) {
  const { children, latest } = props;
  return (
    <main>
      <h1 className="text-heading mb-4"> News Archive</h1>
      {children}
      <span className="block h-[0.5px] bg-white my-6"></span>
      {latest}
    </main>
  );
}
