const getAllCoffees = async (): Promise<CoffeeType[]> => {
  const res = await fetch("http://localhost:3004/coffees");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getSingleCoffee = async (id: number): Promise<CoffeeType> => {
  const response = await fetch(`http://localhost:3004/coffees/${id}`);
  return response.json();
};

export { getAllCoffees, getSingleCoffee };
