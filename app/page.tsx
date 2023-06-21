import Image from "next/image";
import Menu from "./components/Menu";

const fetchCoffees = async () => {
  const res = await fetch("http://localhost:3004/coffees");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const coffees = await fetchCoffees();

  return (
    <main>
      <div className="flex items-center justify-around">
        <div>
          <h1 className="text-[50px]">
            {`Let's have a`} <span className="text-teal-400">coffee!</span>
          </h1>
          <button className="rounded bg-[#8E5E33] text-slate-50 px-3 py-2 text-sm">
            <a href="#menu">Dive in 🔥</a>
          </button>
        </div>
        <div>
          <Image
            src="/50219.jpg"
            alt="Vercel Logo"
            width={300}
            height={100}
            priority
          />
        </div>
      </div>

      <Menu data={coffees} />
    </main>
  );
}
