"use client";
import toast from "react-hot-toast";

const Button = ({ id, coffee }) => {
  const addToCart = async () => {
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

  return (
    <button
      onClick={addToCart}
      className="bg-teal-400 hover:bg-teal-500 transition-all duration-300 text-slate-50 p-2 rounded text-sm"
    >
      Add to Card ☕
    </button>
  );
};

export default Button;
