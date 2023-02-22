import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

type State = { selectedPostId: string };
type Action = { selectPost: (postId: string) => void };

export const usePostStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        selectedPostId: "",
        selectPost: (postId: string) => set(() => ({ selectedPostId: postId })),
      }),
      { name: "post-storage", storage: createJSONStorage(() => localStorage) }
    )
  )
);
