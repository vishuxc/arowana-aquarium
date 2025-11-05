import { fishTanks } from "../data/fishtanks";

export default function FishTanks({ addToCart }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <h1 className="text-4xl font-bold text-sky-700 mb-8 text-center">
        SOBO Aquarium Tanks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {fishTanks.map((tank) => (
          <div
            key={tank.id}
            className="bg-white border rounded-xl shadow-lg overflow-hidden"
          >
            {/* ✅ image resized correctly */}
            <img
              src={tank.img}
              className="w-full h-60 object-contain bg-white p-2"
              alt={tank.name}
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800">{tank.name}</h2>
              <p className="text-sm text-gray-600">Length: {tank.length}</p>

              <p className="text-xl font-bold text-sky-700 mt-2">₹{tank.price}</p>

              <button
                onClick={() => addToCart(tank)}
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
