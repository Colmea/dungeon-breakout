import { create } from "zustand";
import LEVELS from "@/levels";

export type LevelKey = keyof typeof LEVELS;

type Store = {
  started: boolean;
  level: LevelKey;
  setLevel: (newLevel: LevelKey) => void;
  startGame: () => void;
};

export const useStore = create<Store>((set) => ({
  started: false,
  level: 1,
  setLevel: (newLevel: LevelKey) => set(() => ({ level: newLevel })),
  startGame: () => set(() => ({ started: true })),
}));
