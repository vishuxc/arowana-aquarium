export default function Cart({ cart, setCart, deleteFromCart }) {
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-3 rounded-xl shadow-sm"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.img}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sky-600 font-bold">₹{item.price}</p>
                </div>
              </div>

              {/* Qty */}
              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-200 px-3 py-1 rounded-lg"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <span className="text-lg font-bold">{item.qty}</span>
                <button
                  className="bg-sky-600 text-white px-3 py-1 rounded-lg"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              {/* ✅ Remove button using deleteFromCart from App.jsx */}
              <button
                onClick={() => deleteFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>

              <div className="text-lg font-bold">
                ₹{item.qty * item.price}
              </div>
            </div>
          ))}

          {/* Total */}
          <h1 className="text-2xl font-bold text-right mt-6">
            Total Price: <span className="text-sky-700">₹{totalPrice}</span>
          </h1>
        </div>
      )}
    </div>
  );
}
