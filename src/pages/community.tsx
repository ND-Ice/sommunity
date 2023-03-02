import { useState, type ReactElement } from "react";
import { type NextPageWithLayout } from "./_app";

import friends from "@data/friends.json";
import MainLayout from "@layouts/main-layout";
import UserFilter from "@features/community/user-filter";
import UserListItem from "@features/community/user-list-tem";

const filterOptions = [
  { label: "Followers", value: "followers" },
  { label: "Following", value: "following" },
  { label: "You might know", value: "you-might-know" },
];

const Community: NextPageWithLayout = () => {
  const [filter, setFilter] = useState("followers");
  return (
    <div className="grid grid-rows-[auto_1fr] p-6">
      <header className="rounded-lg bg-white p-4">
        <UserFilter
          filterOptions={filterOptions}
          currentValue={filter}
          selectFilter={setFilter}
        />
      </header>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {friends?.map((friend) => (
          <UserListItem
            key={friend.id}
            name={friend.name}
            userId={friend.userId}
            isFriend={friend.isFriend}
          />
        ))}
      </div>
    </div>
  );
};

Community.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Community;
