import { type ReactElement } from "react";
import { type NextPageWithLayout } from "./_app";

import type { Post } from "@features/feed/feed.type";

import { posts } from "@data/post";
import { useModalStore } from "store/use-modal-store";
import { FeedModals } from "@features/feed/feed.modals";

import { usePostStore } from "store/use-post-store";
import FeedLayout from "@layouts/feed-layout";
import PostBox from "@features/feed/post-box";
import PostItem from "@features/feed/post-item";
import CreatePostModal from "@features/feed/create-post-modal";
import ReportPostModal from "@features/feed/report-post-modal";

const Feed: NextPageWithLayout = () => {
  const postLists = posts as Post[];
  const { openModal, modal, closeModal } = useModalStore();
  const { selectPost } = usePostStore();

  const addPostClickHandler = () => openModal(FeedModals.CreatePost);
  const reportPostClickHandler = (postId: string) => {
    openModal(FeedModals.ReportPost);
    selectPost(postId);
  };

  return (
    <>
      <div className="h-full p-4">
        <PostBox onAddPostClick={addPostClickHandler} />
        <div className="mt-4 space-y-4">
          {postLists?.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              onReportPostClick={reportPostClickHandler}
            />
          ))}
        </div>
      </div>
      <CreatePostModal
        isOpen={modal === FeedModals.CreatePost}
        onClose={closeModal}
      />
      <ReportPostModal
        isOpen={modal === FeedModals.ReportPost}
        onClose={closeModal}
      />
    </>
  );
};

Feed.getLayout = (page: ReactElement) => <FeedLayout>{page}</FeedLayout>;
export default Feed;
