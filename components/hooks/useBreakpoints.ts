//https://gist.github.com/gragland/ed8cac563f5df71d78f4a1fefa8c5633

import { useMediaQuery } from "./useMediaQuery";

export function useBreakpoints() {
  return {
    isXs: useMediaQuery("(max-width: 640px)"),
    isSm: useMediaQuery("(min-width: 641px)"),
    isMd: useMediaQuery("(min-width: 769px)"),
    isLg: useMediaQuery("(min-width: 1025px)"),
    isXl: useMediaQuery("(min-width: 1281px)"),
  };
}
