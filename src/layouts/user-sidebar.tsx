import {
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  CogIcon,
  GlobeAltIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import SidebarLink from "./sidebar-link";

function UserSidebar() {
  return (
    <aside className="w-[250px] space-y-2 p-4">
      <SidebarLink label="Feed" path="/feed" icon={<HomeIcon />} />
      <SidebarLink
        label="My Community"
        path="/community"
        icon={<UsersIcon />}
      />
      <SidebarLink
        label="Messages"
        path="/messages"
        icon={<ChatBubbleBottomCenterTextIcon />}
      />
      <SidebarLink
        label="Notifications"
        path="/notifications"
        icon={<BellIcon />}
      />
      <SidebarLink label="Explore" path="/explore" icon={<GlobeAltIcon />} />
      <SidebarLink label="Profile" path="/profile" icon={<UserIcon />} />
      <SidebarLink label="Settings" path="/settings" icon={<CogIcon />} />
    </aside>
  );
}

export default UserSidebar;
