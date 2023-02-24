import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Mode = "create" | "edit";

interface GlobalLoadingState {
  loading: number;
  startLoading: () => void;
  stopLoading: () => void;
}

export const useGlobalLoadingStore = create<GlobalLoadingState>()(
  devtools(
    (set) => ({
      loading: 0,
      startLoading: () => {
        set((state) => {
          return { loading: state.loading + 1 };
        });
      },
      stopLoading: () => {
        set((state) => {
          return { loading: state.loading - 1 };
        });
      },
    }),
    {
      name: "global-loading-state",
    },
  ),
);
