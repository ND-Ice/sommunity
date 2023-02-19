import { type ReactElement } from "react";
import { type NextPageWithLayout } from "./_app";
import FeedLayout from "@layouts/feed-layout";
import PostBox from "@features/feed/post-box";
import PostItem from "@features/feed/post-item";

const Feed: NextPageWithLayout = () => {
  return (
    <div className="h-full p-4">
      <PostBox />
      <div className="mt-4 space-y-4">
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

Feed.getLayout = (page: ReactElement) => <FeedLayout>{page}</FeedLayout>;
export default Feed;
