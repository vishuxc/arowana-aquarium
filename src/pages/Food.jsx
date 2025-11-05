import { foods } from "../data/foods";

export default function Food({ addToCart }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-sky-700 mb-8 text-center">
        Fish Foods
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {foods.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={item.img}
              className="w-full h-60 object-contain bg-white p-2"
              alt={item.name}
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.type}</p>
              <p className="text-xl font-bold text-sky-700 mt-2">₹{item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-sky-600 hover:bg-sky-700 text-white py-2 w-full rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
