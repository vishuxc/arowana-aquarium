export default function FishCard({ fish, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition p-4">

      {/* Image */}
      <img
        src={fish.img}
        alt={fish.name}
        className="h-48 w-full object-cover rounded-xl"
      />

      {/* Text */}
      <h2 className="text-xl font-bold mt-3">{fish.name}</h2>
      <p className="text-sky-600 font-semibold text-lg">₹{fish.price}</p>

      {/* ✅ Add to Cart button only */}
      <button
        onClick={() => addToCart(fish)}
        className="mt-4 w-full bg-sky-600 text-white py-2 rounded-xl hover:bg-sky-700 transition"
      >
        Add To Cart
      </button>
    </div>
  );
}
