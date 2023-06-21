import Button from "../components/Button";

export const getSingleCoffee = async (id) => {
  const response = await fetch(`http://localhost:3004/coffees/${id}`);
  return response.json();
};

export const getAllCoffees = async () => {
  const response = await fetch(`http://localhost:3004/coffees`);
  return response.json();
};

export async function generateStaticParams() {
  const coffees = await getAllCoffees();
  return coffees.map((coffee) => ({ id: String(coffee.id) }));
}

const Coffee = async ({ params }) => {
  const coffee = await getSingleCoffee(params.id);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[40%]">
        <img
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
                {coffee.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-[#A1693D] text-sm">
                    {ingredient}
                    <span>
                      {index == coffee.ingredients.length - 1 ? "" : " +"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button id={params.id} coffee={coffee} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
