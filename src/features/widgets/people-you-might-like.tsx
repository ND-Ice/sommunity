import Image from "next/image";

type PeopleYouMightLikeProps = {
  onSeeAllClick?: () => void;
  imageUrl: string;
};

function PeopleYouMightLike({ imageUrl }: PeopleYouMightLikeProps) {
  return (
    <div className=" rounded-lg bg-white p-4">
      <header className="flex items-center justify-between gap-2">
        <h1 className="font-semibold text-gray-800">You might Like</h1>
        <button className="text-sm font-semibold text-blue-400 transition-all duration-100 ease-linear hover:underline">
          See All
        </button>
      </header>
      <div className="my-6">
        <div className="flex items-center gap-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={imageUrl} alt="User you might like" fill />
          </div>
          <div>
            <h2 className="font-semibold leading-tight">Joshua Dela Cruz</h2>
            <span className="text-xs text-gray-400">
              Founder and CEO of sommunity
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="w-full rounded-lg border border-gray-400 p-2 font-semibold text-gray-500 transition-all duration-100 ease-linear hover:bg-gray-400 hover:text-white">
          Ignore
        </button>
        <button className="w-full rounded-lg bg-blue-500 p-2 text-white transition-all duration-100 ease-linear hover:bg-blue-500/80">
          Follow
        </button>
      </div>
    </div>
  );
}

export default PeopleYouMightLike;
