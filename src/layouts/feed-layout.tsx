import React, { type ReactNode } from "react";
import UserSidebar from "./user-sidebar";
import Navbar from "./navbar";

type FeedLayoutProps = {
  children: ReactNode;
};

function FeedLayout({ children }: FeedLayoutProps) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] overflow-auto">
      <Navbar />
      <div className="grid h-full grid-cols-[auto_1fr] items-start">
        <UserSidebar />
        <div className="bg-gray-50">{children}</div>
      </div>
    </div>
  );
}

export default FeedLayout;
