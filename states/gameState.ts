import React from "react";
import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil";
type GameItem = {
  id: string;
  name: string;
};
// type GameState = {
//   games: GameItem[];
// };
const gameState = atom<GameItem>({
  key: "GameState",
  default: {
    id: "",
    name: "",
  },
});

type GameActions = {
  useAddGameItem: (game: GameItem) => (label: string) => void;
};
export const gameActions: GameActions = {
  // useSetRecoilStateを用いる場合
  useAddGameItem: (game: GameItem) => {
    const setState = useSetRecoilState(gameState);

    return React.useCallback(
      (label: string) =>
        setState((prev) => {
          return {
            ...prev,
            game: game,
          };
        }),
      []
    );
  },
};

type GameSelectors = {
  useGames: () => GameItem;
};

// すべてのGameを読み出す
const gameSelector = selector<GameItem>({
  key: "Game_SelectedGame",
  get: ({ get }) => get(gameState),
});

export const gameSelectors: GameSelectors = {
    useGames: () => useRecoilValue(gameSelector),
  }