"use client";

import { AiTwotoneDelete } from "react-icons/ai";
import {
  cardItemAmountHandler,
  deleteCardItem,
} from "@/services/cardItemsReqs";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface Props {
  item: CoffeeType;
}

const CardItem: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  const { mutate: deleteHandler } = useMutation({
    mutationFn: deleteCardItem,
    onSuccess: () => router.refresh(),
  });
  const { mutate: amountHandler } = useMutation({
    mutationFn: cardItemAmountHandler,
    onSuccess: () => router.refresh(),
  });

  return (
    <li className="border-b flex justify-between items-center gap-x-2 py-3 px-2">
      <div className="flex items-center gap-x-2">
        <img className="rounded h-[70px]" src={item.img} alt="coffee" />
        <h5 className="text-sm">{item.name}</h5>
      </div>

      <div className="flex gap-x-2">
        <span
          className="cursor-pointer"
          onClick={() =>
            amountHandler({
              action: "dec",
              id: item.id,
              item,
            })
          }
        >
          -
        </span>
        <span>{item.amount}</span>
        <span
          onClick={() =>
            amountHandler({
              action: "inc",
              id: item.id,
              item,
            })
          }
          className="cursor-pointer"
        >
          +
        </span>
      </div>

      <p className="text-sm text-yellow-950 font-semibold">${item.price}</p>

      <p>${Math.round(item.amount * item.price)}</p>

      <button onClick={() => deleteHandler(item.id)}>
        <AiTwotoneDelete className="text-rose-500" />
      </button>
    </li>
  );
};

export default CardItem;
