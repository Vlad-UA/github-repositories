import { createContext, useState } from "react";

export interface IRepository {
  id: string;
  name: string;
  rating: number;
}

type TFavoriteList = Map<string, IRepository>;
type TAddFavorite = (id: string, name: string) => void;
type TRemoveFavorite = (id: string) => void;
export type TSetRating = (id: string, rating: number) => void;

interface IRepositoryContext {
  favoriteList: TFavoriteList;
  addFavorite: TAddFavorite;
  removeFavorite: TRemoveFavorite;
  setRating: TSetRating;
}

const favoriteList: TFavoriteList = new Map();

export const useRepositoriesContext = () => {
  const [, setContextUpdated] = useState(false);

  const addFavorite: TAddFavorite = (id, name) => {
    if (!favoriteList.has(id)) {
      favoriteList.set(id, { id, name, rating: 5 });
      setContextUpdated((prev) => !prev);
    }
  };

  const removeFavorite: TRemoveFavorite = (id) => {
    if (favoriteList.has(id)) {
      favoriteList.delete(id);
      setContextUpdated((prev) => !prev);
    }
  };

  const setRating: TSetRating = (id, rating) => {
    if (favoriteList.has(id)) {
      const repo = favoriteList.get(id) as IRepository;
      repo.rating = rating;
      setContextUpdated((prev) => !prev);
    }
  };

  return {
    favoriteList: favoriteList,
    addFavorite,
    removeFavorite,
    setRating,
  };
};

export const RepositoriesContext = createContext<IRepositoryContext>(
  {} as IRepositoryContext,
);
