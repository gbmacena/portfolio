import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWorkSliderStore = create(
  persist(
    (set) => ({
      activeSlide: 0,
      setActiveSlide: (slide) => set({ activeSlide: slide }),
    }),
    {
      name: "work-slider-storage",
    },
  ),
);

export default useWorkSliderStore;
