import Image from "next/image";
import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import type { ActiveUser } from "./community.type";
import activeUsers from "@data/active-users.json";

interface ActiveUserButtonProps extends ActiveUser {
  onClick?: () => void;
}

type UserStoryButtonProps = {
  name: string;
  imageUrl: string;
};

function UserStoryButton({ name, imageUrl }: UserStoryButtonProps) {
  return (
    <button className="w-max text-center">
      <div className="relative h-12 w-12 rounded-full border-[3px] border-blue-400">
        <Image
          src={imageUrl}
          alt="User Story"
          className="rounded-full object-cover"
          fill
        />
      </div>
      <span className="mt-2 block text-sm font-medium text-gray-700">
        {name}
      </span>
    </button>
  );
}

function ActiveUserButton({
  name,
  isActive,
  imageUrl,
  onClick,
}: ActiveUserButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between gap-2 rounded-lg p-2 pr-4 text-gray-500 transition-all duration-100 ease-linear hover:bg-gray-100"
    >
      <div className="flex flex-1 items-center gap-4 overflow-hidden">
        <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            fill
            src={imageUrl}
            className="object-cover"
            alt="User Profile Picture"
          />
        </div>
        <span className="truncate text-left font-medium">{name}</span>
      </div>
      {isActive && <div className="block h-2 w-2 rounded-full bg-green-400" />}
    </button>
  );
}

function ActiveUsers() {
  return (
    <aside className="sticky top-[70px] w-[300px] p-4">
      <header className="mb-6">
        <div className="relative flex items-center gap-2 text-gray-500">
          <MagnifyingGlassIcon className="absolute left-2 h-4 w-4" />
          <input
            placeholder="Search for friends"
            className="h-full w-full rounded-lg border border-gray-400 bg-none p-2 px-4 pl-8 outline-none"
          />
        </div>
      </header>
      <div className="my-6 grid select-none grid-cols-4 gap-4 overflow-x-auto">
        <UserStoryButton
          name="Joshua"
          imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <UserStoryButton
          name="Joshua"
          imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <UserStoryButton
          name="Joshua"
          imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <UserStoryButton
          name="Joshua"
          imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div>
        <header className="mb-4 flex items-center justify-between gap-2 text-gray-800">
          <h2 className="text-base font-bold">Friends</h2>
          <button className="grid h-8 w-8 place-items-center rounded-full hover:bg-gray-100">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </button>
        </header>
        <div className="space-y-2">
          {activeUsers?.map((activeUser: ActiveUser) => (
            <ActiveUserButton
              key={activeUser?.id}
              name={activeUser?.name}
              imageUrl={activeUser?.imageUrl}
              isActive={activeUser?.isActive}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ActiveUsers;
