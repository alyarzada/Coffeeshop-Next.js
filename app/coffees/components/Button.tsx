"use client";

import { addToCart } from "@/services/cardItemsReqs";
import { useRouter } from "next/navigation";

interface Props {
  coffee: CoffeeType;
}

const Button: React.FC<Props> = ({ coffee }) => {
  const router = useRouter();

  const addToCartHandler = async (): Promise<void> => {
    await addToCart(coffee);
    // router.replace("/card");
    // setTimeout(() => router.refresh(), 1000);
  };

  return (
    <button
      onClick={addToCartHandler}
      className="bg-teal-400 hover:bg-teal-500 transition-all duration-300 text-slate-50 p-2 rounded text-sm"
    >
      Add to Card ☕
    </button>
  );
};

export default Button;
