import React, { type ReactNode } from "react";

import ActiveUsers from "@features/community/active-users";
import UserSidebar from "./user-sidebar";
import Navbar from "./navbar";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Navbar />
      <div className="grid h-full grid-cols-[auto_1fr_auto] items-start">
        <UserSidebar />
        <div className="min-h-full bg-gray-50">{children}</div>
        <ActiveUsers />
      </div>
    </div>
  );
}

export default MainLayout;
