import { create } from "zustand";
import LEVELS from "@/levels";
import CONFIG from "./config";

export type LevelKey = keyof typeof LEVELS;

type Store = {
  started: boolean;
  gameOver: boolean;
  time: number;
  lifes: number;
  diamonds: number;
  level: LevelKey;
  hasKey: boolean;
  bossLife: number;
  collectDiamond: () => void;
  setLevel: (newLevel: LevelKey) => void;
  startGame: () => void;
  increaseTime: () => void;
  pickupKey: () => void;
  hitBoss: () => void;
  finishGame: () => void;
};

export const useStore = create<Store>((set) => ({
  started: false,
  gameOver: true,
  time: 0,
  lifes: 3,
  diamonds: 0,
  level: 1,
  hasKey: false,
  bossLife:
    CONFIG.BOSS_CLAW_HEALTH + CONFIG.BOSS_CLAW_HEALTH + CONFIG.BOSS_BODY_HEALTH,
  startGame: () =>
    set(() => ({
      started: true,
      gameOver: false,
      time: 0,
      lifes: 3,
      diamonds: 0,
      level: 1,
      hasKey: false,
      bossLife:
        CONFIG.BOSS_CLAW_HEALTH +
        CONFIG.BOSS_CLAW_HEALTH +
        CONFIG.BOSS_BODY_HEALTH,
    })),
  increaseTime: () => set((state) => ({ time: state.time + 1 })),
  takeLife: () => set((state) => ({ lifes: state.lifes - 1 })),
  collectDiamond: () => set((state) => ({ diamonds: state.diamonds + 1 })),
  setLevel: (newLevel: LevelKey) =>
    set(() => ({ level: newLevel, hasKey: false })),
  pickupKey: () => set(() => ({ hasKey: true })),
  hitBoss: () => set((state) => ({ bossLife: state.bossLife - 1 })),
  finishGame: () => set(() => ({ started: false, gameOver: true })),
}));
