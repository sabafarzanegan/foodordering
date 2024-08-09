import { Link } from "react-router-dom";
import MobileNav from "../ui/MobileNav";
import { useAuth0 } from "@auth0/auth0-react";
import UserNameMenu from "./UserNameMenu";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="py-2 md:py-6 border-b-4 border-b-orange-500">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-base md:text-3xl text-orange-500 tracking-tight">
          TAPSI FOOD
        </Link>
        <span className="flex items-center space-x-2">
          {isAuthenticated ? <UserNameMenu /> : <MobileNav />}
        </span>
      </div>
    </div>
  );
}

export default Header;
