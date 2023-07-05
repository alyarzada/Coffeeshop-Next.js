import { getAllCoffees, getSingleCoffee } from "@/services/coffeesReqs";
import { CoffeeType } from "@/types";
import Button from "../components/Button";
import Image from "next/image";

export async function generateStaticParams() {
  const coffees: Array<CoffeeType> = await getAllCoffees();
  return coffees.map((coffee: CoffeeType) => ({ id: String(coffee.id) }));
}

interface Props {
  params: {
    id: number;
  };
}

const Coffee: React.FC<Props> = async ({ params }) => {
  const coffee: CoffeeType = await getSingleCoffee(params.id);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[40%]">
        <Image
          fill
          className="w-full rounded shadow shadow-lg"
          src={coffee.img}
          alt={coffee.name}
        />

        <div>
          <div className="flex justify-between items-center my-3">
            <h2 className="font-semibold text-lg">{coffee.name}</h2>
            <h2 className="font-semibold text-lg">${coffee.price}</h2>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <ul className="flex gap-x-2">
                {coffee.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="text-[#A1693D] text-sm">
                    {ingredient}
                    <span>
                      {index == coffee.ingredients.length - 1 ? "" : " +"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button coffee={coffee} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
