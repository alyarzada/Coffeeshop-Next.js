"use client";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

const CardItem = ({ item }) => {
  const amountHandler = async (action: string) => {
    const resp = await fetch(`http://localhost:3004/cartItems/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...item,
        amount: action === "inc" ? item.amount + 1 : item.amount - 1,
      }),
    });
    const json = await resp.json();

    return json;
  };

  const deleteHandler = async () => {
    try {
      const resp = await fetch(`http://localhost:3004/cartItems/${item.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const json = await resp.json();
      toast.success("coffee is gone.. 😓");
      return json;
    } catch (err) {
      toast.error("something went wrong 😕");
    }
  };

  return (
    <li className="border-b flex justify-between items-center gap-x-2 py-3 px-2">
      <div className="flex items-center gap-x-2">
        <img className="w-[70px] rounded" src={item.img} alt="image" />
        <h5 className="text-sm">{item.name}</h5>
      </div>

      <div className="flex gap-x-2">
        <span className="cursor-pointer" onClick={() => amountHandler("dec")}>
          -
        </span>
        <span>{item.amount}</span>
        <span onClick={() => amountHandler("inc")} className="cursor-pointer">
          +
        </span>
      </div>

      <p className="text-sm text-yellow-950 font-semibold">${item.price}</p>

      <button onClick={deleteHandler}>
        <AiTwotoneDelete className="text-rose-500" />
      </button>
    </li>
  );
};

export default CardItem;
