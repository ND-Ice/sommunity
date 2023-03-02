import users from "@data/users.json";
import Image from "next/image";

type UserListItem = {
  name: string;
  userId: string | number;
  isFriend: boolean;
};

function UserListItem({ userId, name, isFriend }: UserListItem) {
  const user = users.find((user) => user.id === userId);

  return (
    <div className="rounded-lg bg-white p-4">
      <div className="my-4 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          {user?.imageUrl && (
            <Image
              fill
              src={user?.imageUrl}
              className="object-cover"
              alt="User Profile Picture"
            />
          )}
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-gray-700">{name}</h1>
          <span className="text-sm text-gray-500">{user?.title}</span>
        </div>
      </div>
      <div className="mt-6 flex gap-4 font-semibold">
        <button className="w-full rounded-lg border p-2 px-4 transition-all duration-100 ease-linear hover:bg-gray-400 hover:text-white">
          Ignore
        </button>
        <button className="w-full rounded-lg border bg-blue-400 p-2 px-4 text-white transition-all duration-100 ease-linear hover:bg-blue-400/90">
          {isFriend ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default UserListItem;
