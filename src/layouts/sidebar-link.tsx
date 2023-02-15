import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

type SidebarLinkProps = { label: string; path: string; icon?: ReactNode };

function SidebarLink({ label, path, icon }: SidebarLinkProps) {
  const { pathname } = useRouter();
  const isActive = pathname === path;

  return (
    <div
      className={classNames(
        "hover:bg-gray-50g group flex items-center gap-x-4 rounded-lg p-2 px-4 font-medium text-gray-700 transition-all duration-100 ease-in-out hover:bg-gray-400 hover:text-white",
        { "bg-gray-400 text-white": isActive }
      )}
    >
      {icon && (
        <span
          className={classNames(
            "h-5 w-5 transition-all duration-100 ease-in-out group-hover:text-white",
            { "text-white": isActive }
          )}
        >
          {icon}
        </span>
      )}
      <Link href={path}>{label}</Link>
    </div>
  );
}

export default SidebarLink;
