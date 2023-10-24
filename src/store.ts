import { create } from "zustand";
import LEVELS from "./levels";

export type LevelKey = keyof typeof LEVELS;

type Store = {
  level: LevelKey;
  setLevel: (newLevel: LevelKey) => void;
};

export const useStore = create<Store>((set) => ({
  level: 2,
  setLevel: (newLevel: LevelKey) => set(() => ({ level: newLevel })),
}));
