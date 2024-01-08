import { create } from "zustand";

export const useWeatherStore = create((set) => ({
  weather: undefined,
  setWeather: (data) =>
    set(() => ({
      weather: data,
    })),
  // clear weather
  removeAllBears: () => set({ bears: 0 }),
}));
