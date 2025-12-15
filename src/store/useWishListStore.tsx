import { create } from "zustand";

type WishListItem = {
  id: number;
  title: string;
};
type WishListState = {
  wishList: WishListItem[];
  addToWishList: (item: WishListItem) => void;
};

export const useWishListStore = create<WishListState>((set, get) => ({
  wishList: [],

  addToWishList: (item) =>
    set((state) => {
      const exists = state.wishList.some((w) => w.id === item.id);
      if (exists) return state;
      return { wishList: [...state.wishList, item] };
    }),
}));
