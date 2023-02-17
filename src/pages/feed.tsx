import { type ReactElement } from "react";
import { type NextPageWithLayout } from "./_app";
import FeedLayout from "@layouts/feed-layout";
import PostBox from "@features/feed/post-box";

const Feed: NextPageWithLayout = () => {
  return (
    <div className="h-full bg-gray-50 p-4">
      <PostBox />
    </div>
  );
};

Feed.getLayout = (page: ReactElement) => <FeedLayout>{page}</FeedLayout>;
export default Feed;
