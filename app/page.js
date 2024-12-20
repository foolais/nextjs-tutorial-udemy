import ImageSlideshow from "@/components/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center gap-8 w-full">
        <div className="w-[400px]">
          <ImageSlideshow />
        </div>
        <div className="flex flex-col w-[450px]">
          <div>
            <h1 className="text-primary text-heading">
              NEXTLEVEL FOOD FOR EVERYONE
            </h1>
            <p className="mt-2 text-lg font-light">
              Taste & Enjoy food from all over the world.
            </p>
          </div>
          <div className="mt-6 flex gap-8 items-center">
            <Link href="/community" className="font-semibold">
              <span className="text-primary">Join the Community</span>
            </Link>
            <Link
              href="/meals"
              className="bg-primary py-2 px-4 rounded-md font-semibold group"
            >
              <span className="text-white group-hover:text-foreground transition-all duration-300 ease-in-out">
                Explore Meals
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center gap-6 text-center mt-16">
        <section className="flex flex-col items-center max-w-[550px]">
          <h2 className="text-2xl font-semibold text-primary">How it works</h2>
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
          <h2 className="text-2xl font-semibold text-primary">
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
