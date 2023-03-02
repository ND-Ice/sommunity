import Image from "next/image";

type UserButtonProps = {
  name: string;
  imageUrl: string;
  email: string;
} & React.HTMLAttributes<HTMLButtonElement>;

function UserButton({ name, email, imageUrl, ...props }: UserButtonProps) {
  return (
    <button
      className="flex items-center gap-2 rounded-lg p-2 px-4 transition-all duration-100 ease-linear hover:bg-gray-50"
      {...props}
    >
      <div className="relative h-7 w-7 overflow-hidden rounded-full">
        <Image src={imageUrl} fill alt="User Profile Picture" />
      </div>
      <div className="flex-1 overflow-hidden text-left">
        <h1 className="text-sm font-medium text-gray-800">{name}</h1>
        <p className="truncate text-xs text-gray-500">{email}</p>
      </div>
    </button>
  );
}

export default UserButton;
