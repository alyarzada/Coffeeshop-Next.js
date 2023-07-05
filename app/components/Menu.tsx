import MenuItem from "./MenuItem";
import { CoffeeType } from "@/types";

interface Props {
  data: CoffeeType[];
}

const Menu: React.FC<Props> = async ({ data }) => {
  return (
    <div id="menu" className="mt-10 p-36">
      <h2 className="text-[24px] text-center text-teal-400">Menu</h2>
      <hr className="mb-10 mt-2" />
      <div className="grid grid-cols-3 place-items-center gap-6">
        {data.map((coffee) => (
          <MenuItem key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
