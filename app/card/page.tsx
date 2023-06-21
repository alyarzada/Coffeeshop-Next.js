import Image from "next/image";
import CardItem from "./components/CardItem";

export const getAllCardItems = async () => {
  const resp = await fetch("http://localhost:3004/cartItems", {
    cache: "no-store",
  });

  return resp.json();
};

const Card = async () => {
  const cardItems = await getAllCardItems();

  return (
    <div className="px-10">
      <h2 className="text-xl text-teal-400 font-semibold">Card</h2>
      <hr className="mb-10" />
      <div className="flex justify-center gap-x-40">
        <div>
          <div className="h-[320px] w-[400px] overflow-auto">
            {cardItems.length > 0 ? (
              <ul>
                {cardItems.map((item) => (
                  <CardItem key={item.id} item={item} />
                ))}
              </ul>
            ) : (
              <h2>There is no coffee 😕</h2>
            )}
          </div>
          <button className="bg-teal-400 mt-3 ml-auto block hover:bg-teal-500 transition-all duration-300 text-sm text-slate-50 rounded px-3 py-2">
            Confirm Order ✅
          </button>
        </div>

        <Image
          src="/coffee-menu-infographic-cartoon-vector-2222372.jpg"
          alt="coffee"
          className="rounded-xl rotate-6"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Card;
