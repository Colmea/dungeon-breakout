/* eslint-disable @typescript-eslint/no-explicit-any */
import { HookOptions, ReturnedValue } from "./types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function useSound<T = any>(
  src: string | string[],
  {
    id,
    volume,
    playbackRate,
    soundEnabled,
    interrupt,
    onload,
    ...delegated
  }?: HookOptions<T>
): ReturnedValue;
export { useSound };
