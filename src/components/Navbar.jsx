import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold text-sky-600">
        Arowana Aquarium
      </Link>

      {/* Menu */}
      <ul className="flex gap-6 text-lg font-medium items-center">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/fish-tanks">FishTank</Link></li>
        
        

        {/* Cart with count */}
        <li>
          <Link to="/cart" className="relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-sky-600 text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
