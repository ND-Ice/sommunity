import { type ReactElement } from "react";
import { type NextPageWithLayout } from "./_app";
import FeedLayout from "@layouts/feed-layout";

const Community: NextPageWithLayout = () => {
  return <div>Community</div>;
};

Community.getLayout = (page: ReactElement) => <FeedLayout>{page}</FeedLayout>;
export default Community;
