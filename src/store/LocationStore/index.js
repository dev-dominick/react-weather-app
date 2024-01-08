import { create } from "zustand";

export const useLocationStore = create((set) => ({
  location: null,
  setLocation: (data) =>
    set(() => ({
      location: data,
    })),
  // clear location
  removeAllBears: () => set({ bears: 0 }),
}));
