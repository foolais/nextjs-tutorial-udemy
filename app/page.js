import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        {/* slideshow */}
        <div className="flex flex-col items-end mr-[5%] w-full">
          <div className="w-1/2">
            <h1 className="bg-primary bg-clip-text text-transparent text-4xl font-bold">
              NEXTLEVEL FOOD FOR EVERYONE
            </h1>
            <p className="mt-2 text-lg font-light">
              Taste & Enjoy food from all over the world.
            </p>
          </div>
          <div className="mt-6 flex gap-8 items-center w-1/2">
            <Link href="/community" className="font-semibold">
              <span className="bg-primary bg-clip-text text-transparent">
                Join the Community
              </span>
            </Link>
            <Link
              href="/meals"
              className="bg-primary py-2 px-4 rounded-md font-semibold"
            >
              <span className="text-white">Explore Meals</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center gap-6 text-center mt-16">
        <section className="flex flex-col items-center max-w-[550px]">
          <h2 className="text-2xl font-semibold bg-primary bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="mt-6 mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className="flex flex-col items-center max-w-[550px] mt-6">
          <h2 className="text-2xl font-semibold bg-primary bg-clip-text text-transparent">
            Why NextLevel Food?
          </h2>
          <p className="mt-6 mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
