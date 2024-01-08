import { create } from "zustand";

export const useAppStore = create((set) => ({
  sideBarOpen: false,
  setLocation: (data) =>
    set(() => ({
      location: data,
    })),
  // clear location
  removeAllBears: () => set({ bears: 0 }),
}));
