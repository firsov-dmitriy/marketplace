import { Button } from "@/ui";
import { CiHeart, CiSearch, CiShoppingBasket } from "react-icons/ci";
import { UserAction } from "@/features/ui/UserAction";

export const HeaderActions = () => {
  return (
    <div className="justify-self-end pr-4 flex gap-4">
      <Button variant="unstyled" className="hover:cursor-pointer">
        <CiSearch className="h-6 w-6" />
      </Button>
      <UserAction />
      <Button variant="unstyled" className="hover:cursor-pointer">
        <CiHeart className="h-6 w-6" />
      </Button>
      <Button variant="unstyled" className="hover:cursor-pointer">
        <CiShoppingBasket className="h-6 w-6" />
      </Button>
    </div>
  );
};
