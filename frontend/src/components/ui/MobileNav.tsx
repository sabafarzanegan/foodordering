import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";
import { Button } from "./button";
import { useAuth0 } from "@auth0/auth0-react";

function MobileNav() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <FaBars className="text-orange-500 text-2xl" />
      </SheetTrigger>
      <SheetContent className="font-vazir space-y-3">
        <SheetTitle className="text-lg">
          خوش آمدید.لطفا ابتدا وارد شوید
        </SheetTitle>
        <SheetDescription className="flex font-bold text-white ">
          <Button
            onClick={async () => await loginWithRedirect()}
            className="flex-1 bg-orange-500 hover:bg-orange-300">
            ورود
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
