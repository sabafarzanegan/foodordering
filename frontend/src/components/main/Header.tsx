import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-6 border-b-2 border-b-orange-500">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-3xl text-orange-500 tracking-tight">
          TAPSI FOOD
        </Link>
      </div>
    </div>
  );
}

export default Header;
