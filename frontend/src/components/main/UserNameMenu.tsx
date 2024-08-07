import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { TbLogout } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaRegUserCircle } from "react-icons/fa";

function UserNameMenu() {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" px-4 py-2 rounded-md flex items-center justify-center gap-x-4 font-vazir text-base md:text-xl ">
        <div>
          <FaRegUserCircle className="text-base md:text-xl" />
        </div>
        <div className="font-bold text-orange-500 hover:text-orange-300 transition-all duration-75">
          <p>{user?.name}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-vazir">
        <DropdownMenuItem className="flex items-center justify-between ">
          <Link to="/user-profile" className="font-vazir ">
            حساب کاربری
          </Link>
          <ImProfile />
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center justify-between ">
          <p onClick={() => logout()} className="cursor-pointer ">
            خروج{" "}
          </p>
          <TbLogout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNameMenu;
