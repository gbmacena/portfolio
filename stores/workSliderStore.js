import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useWorkSliderStore = create(
  persist(
    (set) => ({
      activeSlide: 0,
      setActiveSlide: (slide) => set({ activeSlide: slide }),
    }),
    {
      name: "work-slider-storage",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
    },
  ),
);

export default useWorkSliderStore;
