import { type ReactElement } from "react";
import { type NextPageWithLayout } from "./_app";

import type { Post } from "@features/feed/feed.type";

import posts from "@data/post.json";
import { useModalStore } from "store/use-modal-store";
import { FeedModals } from "@features/feed/feed.modals";

import { usePostStore } from "store/use-post-store";
import FeedLayout from "@layouts/feed-layout";
import PostBox from "@features/feed/post-box";
import PostItem from "@features/feed/post-item";
import CreatePostModal from "@features/feed/create-post-modal";
import ReportPostModal from "@features/feed/report-post-modal";
import ReportSuccessModal from "@features/feed/report-success-modal";
import PeopleYouMightLike from "@features/widgets/people-you-might-like";
import UpcomingBirthdays from "@features/widgets/upcoming-birthdays";

const Feed: NextPageWithLayout = () => {
  const postLists = posts as Post[];
  const { openModal, modal, closeModal } = useModalStore();
  const { selectPost } = usePostStore();

  const addPostClickHandler = () => openModal(FeedModals.CreatePost);
  const reportPostClickHandler = (postId: string) => {
    openModal(FeedModals.ReportPost);
    selectPost(postId);
  };
  const reportPostHandler = () => openModal(FeedModals.ReportSuccess);

  return (
    <>
      <div className="grid h-full grid-cols-[1fr_auto] gap-6 p-6">
        <div>
          <PostBox onAddPostClick={addPostClickHandler} />
          <div className="mt-6 space-y-6">
            {postLists?.map((post) => (
              <PostItem
                key={post.id}
                post={post}
                onReportPostClick={reportPostClickHandler}
              />
            ))}
          </div>
        </div>
        <div className="w-[350px] space-y-6">
          <PeopleYouMightLike imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          <UpcomingBirthdays />
        </div>
      </div>
      <CreatePostModal
        isOpen={modal === FeedModals.CreatePost}
        onClose={closeModal}
      />
      <ReportPostModal
        onReportPostClick={reportPostHandler}
        isOpen={modal === FeedModals.ReportPost}
        onClose={closeModal}
      />
      <ReportSuccessModal
        isOpen={modal === FeedModals.ReportSuccess}
        onClose={closeModal}
      />
    </>
  );
};

Feed.getLayout = (page: ReactElement) => <FeedLayout>{page}</FeedLayout>;
export default Feed;
