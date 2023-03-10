import { Fragment } from "react";
import Image from "next/image";
import { formatDistanceToNowStrict } from "date-fns";
import { Menu, Transition } from "@headlessui/react";
import {
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  FlagIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

import type { Post, Reaction } from "./feed.type";

type PostHeaderProps = {
  userId: string;
  createdAt: Date | string;
  audience: "PUBLIC" | "PRIVATE" | "FRIENDS";
  onPostReportClick: () => void;
};
type PostBodyProps = {
  images?: string[];
  description: string;
};

type PostFooterProps = {
  reactions?: Reaction[];
};

type PostItemProps = {
  post: Post;
  onReportPostClick?: (postId: string) => void;
};

const PostHeader = ({
  createdAt,
  audience,
  onPostReportClick,
}: PostHeaderProps) => (
  <div className="flex justify-between gap-2">
    <div className="flex items-center gap-4">
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          fill
          alt="User Avatar"
        />
      </div>
      <div className="text-gray-500">
        <h1 className="text-base font-semibold">Sepural Gallery</h1>
        <div className="space-x-2 text-xs font-medium">
          {createdAt && (
            <span>{formatDistanceToNowStrict(new Date(createdAt))}</span>
          )}
          <span>{audience}</span>
        </div>
      </div>
    </div>
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <EllipsisHorizontalIcon
          className="h-8 w-8 text-gray-600 transition-all duration-100 ease-linear hover:text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <button
              onClick={onPostReportClick}
              className="flex w-full items-center gap-2 rounded-lg p-2 px-4 font-medium transition-all duration-100 ease-linear hover:bg-blue-100 hover:text-blue-900"
            >
              <FlagIcon className="h-4 w-4" />
              <span> Report Post</span>
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

const PostBody = ({ images, description }: PostBodyProps) => (
  <div className="space-y-4">
    <p className="text-sm text-gray-500">{description}</p>
    <div className="grid gap-2">
      {images?.map((image, idx) => (
        <div
          className="relative h-[100px] overflow-hidden rounded-lg"
          key={idx}
        >
          <Image src={image} className="object-cover" fill alt="Post Image" />
        </div>
      ))}
    </div>
  </div>
);

const PostFooter = ({ reactions }: PostFooterProps) => {
  const moreReactors = (reactions?.length && reactions.length - 3) ?? 0;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex -space-x-3">
          {reactions?.slice(0, 3)?.map((reaction) => (
            <div
              key={reaction.id}
              className="relative h-8 w-8 overflow-hidden rounded-full object-cover"
            >
              <Image
                className="rounded-full"
                src={reaction.userImage}
                fill
                alt="User who reacted"
              />
            </div>
          ))}
          {moreReactors > 0 && (
            <div className="z-10 grid h-8 w-8 place-items-center rounded-full bg-gray-600 text-xs font-bold text-white">
              +{moreReactors}
            </div>
          )}
        </div>
        <div className="space-x-4 text-sm font-bold text-gray-500">
          <span className="cursor-pointer hover:underline">4 Comments</span>
          <span className="cursor-pointer hover:underline">5 Share</span>
        </div>
      </div>
      <div className="flex justify-between border-y py-2">
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 px-4 text-gray-500 hover:bg-gray-200">
          <HandThumbUpIcon className="h-5 w-5" />
          <span>Like</span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 px-4 text-gray-500 hover:bg-gray-200">
          <ChatBubbleLeftIcon className="h-5 w-5" />
          <span>Comment</span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 px-4 text-gray-500 hover:bg-gray-200">
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

function PostItem({ post, onReportPostClick }: PostItemProps) {
  return (
    <div className="space-y-4 rounded-lg bg-white p-4 shadow-sm">
      <PostHeader
        audience={post.audience}
        createdAt={post.createdAt}
        userId={post.userId}
        onPostReportClick={() =>
          onReportPostClick && onReportPostClick(post.id)
        }
      />
      <PostBody
        images={post.details.photos}
        description="If you think adventure is dangerous, try routine, its lethal Paulo Coelho! Good morning all friends"
      />
      <PostFooter reactions={post.details.reactions} />
    </div>
  );
}

export default PostItem;
