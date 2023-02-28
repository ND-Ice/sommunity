import React, { type ReactNode } from "react";
import UserSidebar from "./user-sidebar";
import Navbar from "./navbar";
import ActiveUsers from "@features/community/active-users";

type FeedLayoutProps = {
  children: ReactNode;
};

function FeedLayout({ children }: FeedLayoutProps) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Navbar />
      <div className="grid h-full grid-cols-[auto_1fr_auto] items-start">
        <UserSidebar />
        <div className="bg-gray-50">{children}</div>
        <ActiveUsers />
      </div>
    </div>
  );
}

export default FeedLayout;
