import { create } from "zustand";

type State = { modal: string };
type Action = { openModal: (modal: string) => void; closeModal: () => void };

export const useModalStore = create<State & Action>((set) => ({
  modal: "",
  openModal: (modal: string) => set(() => ({ modal })),
  closeModal: () => set(() => ({ modal: "" })),
}));
