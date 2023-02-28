import { UsersIcon } from "@heroicons/react/24/solid";
import UserButton from "components/common/user-button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-[1000] h-[70px] border-b bg-white p-2 px-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>
            <UsersIcon className="h-5 w-5" />
          </span>
          <h1 className="text-lg font-extrabold">Sommunity</h1>
        </div>
        <UserButton
          imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          name="Joshua Dela Cruz"
          email="delacruzjoshua691@gmail.com"
        />
      </div>
    </nav>
  );
}

export default Navbar;
