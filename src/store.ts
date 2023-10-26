import { create } from "zustand";
import LEVELS from "@/levels";

export type LevelKey = keyof typeof LEVELS;

type Store = {
  started: boolean;
  level: LevelKey;
  hasKey: boolean;
  setLevel: (newLevel: LevelKey) => void;
  startGame: () => void;
  pickupKey: () => void;
};

export const useStore = create<Store>((set) => ({
  started: false,
  level: 1,
  hasKey: false,
  startGame: () => set(() => ({ started: true })),
  setLevel: (newLevel: LevelKey) =>
    set(() => ({ level: newLevel, hasKey: false })),
  pickupKey: () => set(() => ({ hasKey: true })),
}));
