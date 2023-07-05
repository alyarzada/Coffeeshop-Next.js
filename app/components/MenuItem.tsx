import Link from "next/link";
import { CoffeeType } from "@/types";
import Image from "next/image";

const MenuItem = ({ coffee }: { coffee: CoffeeType }) => {
  return (
    <div className="relative group overflow-hidden">
      <Link href={`coffees/${coffee.id}`}>
        <Image
          width={320}
          height={200}
          src={coffee.img}
          alt="coffee"
          className="cursor-pointer rounded shadow shadow-lg  scale-100 group-hover:scale-110 transition-all duration-300"
        />
        <div className="rounded absolute top-0 left-0 w-full h-full bg-black/30 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </Link>
      <div className="absolute z-20 rounded-r bottom-2 bg-teal-400/70 left-0 pl-2 w-[130px] text-slate-50">
        <h2 className="text-md">{coffee.name}</h2>
        <p className="text-sm text-[#3c200a] font-semibold">${coffee.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
