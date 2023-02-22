import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type State = { modal: string };
type Action = { openModal: (modal: string) => void; closeModal: () => void };

export const useModalStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        modal: "",
        openModal: (modal: string) => set(() => ({ modal })),
        closeModal: () => set(() => ({ modal: "" })),
      }),
      { name: "modal-store", storage: createJSONStorage(() => localStorage) }
    )
  )
);
