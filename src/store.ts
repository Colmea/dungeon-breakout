import { create } from "zustand";
import LEVELS from "@/levels";
import CONFIG from "./config";

export type LevelKey = keyof typeof LEVELS;

type Store = {
  started: boolean;
  diamonds: number;
  level: LevelKey;
  hasKey: boolean;
  bossLife: number;
  collectDiamond: () => void;
  setLevel: (newLevel: LevelKey) => void;
  startGame: () => void;
  pickupKey: () => void;
  hitBoss: () => void;
};

export const useStore = create<Store>((set) => ({
  started: false,
  diamonds: 0,
  level: 1,
  hasKey: false,
  bossLife:
    CONFIG.BOSS_CLAW_HEALTH + CONFIG.BOSS_CLAW_HEALTH + CONFIG.BOSS_BODY_HEALTH,
  startGame: () => set(() => ({ started: true })),
  collectDiamond: () => set((state) => ({ diamonds: state.diamonds + 1 })),
  setLevel: (newLevel: LevelKey) =>
    set(() => ({ level: newLevel, hasKey: false })),
  pickupKey: () => set(() => ({ hasKey: true })),
  hitBoss: () => set((state) => ({ bossLife: state.bossLife - 1 })),
}));
