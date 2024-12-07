import Image from "next/image";
import Pizza from "@/assets/icons/pizza.png";
import Salad from "@/assets/icons/salad.png";
import WorkGroup from "@/assets/icons/workgroup.png";

const community = [
  { icon: Pizza, name: "Share your favorite recipes" },
  { icon: Salad, name: "Discover new recipes" },
  { icon: WorkGroup, name: "Connect with other food enthusiasts" },
];

export default function Community() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center mb-8">
        <h1 className="text-3xl font-semibold">
          One shared passion for
          <span className="bg-primary bg-clip-text text-transparent">
            {" "}
            Food
          </span>
        </h1>
        <p className="text-lg w-3/4">
          The community is a place where people come together to share their
          love for food.
        </p>
      </header>
      <main className="text-center">
        <h2 className="text-2xl font-semibold mb-6">What can you do here?</h2>
        <ul>
          {community.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-4 text-lg font-semibold mb-8"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={100}
                height={100}
                priority
                placeholder="blur"
              />
              {item.name}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
