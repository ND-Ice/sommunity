import React, { type ReactNode } from "react";
import UserSidebar from "./user-sidebar";

type FeedLayoutProps = {
  children: ReactNode;
};

function FeedLayout({ children }: FeedLayoutProps) {
  return (
    <div className="flex h-screen">
      <UserSidebar />
      <div className="h-full w-full">{children}</div>
    </div>
  );
}

export default FeedLayout;
