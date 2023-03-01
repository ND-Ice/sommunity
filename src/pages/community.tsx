import { type ReactElement } from "react";
import { type NextPageWithLayout } from "./_app";

import MainLayout from "@layouts/main-layout";

const Community: NextPageWithLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] p-6">
      <header className="grid grid-cols-3 gap-4 rounded-lg bg-white p-4 text-gray-700">
        <button className="h-full rounded-lg border-2 p-2 px-4 font-semibold transition-all duration-100 ease-linear hover:bg-blue-400 hover:text-white">
          52,333 Followers
        </button>
        <button className="h-full rounded-lg border-2 p-2 px-4 font-semibold transition-all duration-100 ease-linear hover:bg-blue-400 hover:text-white">
          2,433 Following
        </button>
        <button className="h-full rounded-lg border-2 p-2 px-4 font-semibold transition-all duration-100 ease-linear hover:bg-blue-400 hover:text-white">
          People You might like
        </button>
      </header>
    </div>
  );
};

Community.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Community;
