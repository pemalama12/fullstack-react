import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

function Logout() {
  const navigate = useNavigate();

  function handleClick() {
    Cookies.remove("token");
    navigate("/");
  }
  return (
    <div className="flex justify-end">
      <Button
        onClick={handleClick}
        variant="secondary"
        size="icon"
        className="size-8"
      >
        <LogOut className="h-16 w-16" />
      </Button>
    </div>
  );
}

export default Logout;
