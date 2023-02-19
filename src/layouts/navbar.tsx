import { UsersIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <nav className="sticky top-0 z-[1000] h-[50px] bg-white p-4">
      <div className="flex items-center gap-2">
        <span>
          <UsersIcon className="h-5 w-5" />
        </span>
        <h1 className="text-lg font-extrabold">Sommunity</h1>
      </div>
    </nav>
  );
}

export default Navbar;
