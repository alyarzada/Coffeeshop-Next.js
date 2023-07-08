import { toast } from "react-hot-toast";

interface argType {
  action: string;
  id: number;
  item: CoffeeType;
}

const getAllCardItems = async (): Promise<CoffeeType[]> => {
  const resp = await fetch("http://localhost:3004/cartItems", {
    cache: "no-store",
  });

  return resp.json();
};

const addToCart = async (
  coffee: CoffeeType
): Promise<CoffeeType | undefined> => {
  try {
    const resp = await fetch("http://localhost:3004/cartItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coffee),
    });
    const json = await resp.json();
    toast.success("Coffee added into your cart 🥰");

    return json;
  } catch (err) {
    toast.error("Coffee is already in your cart 🙄");
  }
};

const deleteCardItem = async (id: number): Promise<any> => {
  try {
    const resp = await fetch(`http://localhost:3004/cartItems/${id}`, {
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

const cardItemAmountHandler = async (arg: argType): Promise<any> => {
  try {
    const resp = await fetch(`http://localhost:3004/cartItems/${arg.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...arg.item,
        amount:
          arg.action === "inc" ? arg.item.amount + 1 : arg.item.amount - 1,
      }),
    });
    const json = await resp.json();

    return json;
  } catch (err) {
    toast.error("something went wrong 😕");
  }
};

export { getAllCardItems, deleteCardItem, cardItemAmountHandler, addToCart };
