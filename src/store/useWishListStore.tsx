import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishListItem = {
  id: number;
  title: string;
  poster_path?: string;
};
type WishListState = {
  wishList: WishListItem[];
  addToWishList: (item: WishListItem) => void;
  removeFromWishList: (id: number) => void;
};

export const useWishListStore = create<WishListState>()(
  persist((set) =>
     ({
  wishList: [],

  addToWishList: (item) =>
    set((state) => {
      const exists = state.wishList.some((w) => w.id === item.id);
      if (exists) return state;
      return { wishList: [...state.wishList, item] };
    }),

  removeFromWishList: (id) =>
    set((state) => ({
      wishList: state.wishList.filter((item) => item.id !== id),
    })),
}
),
{ name: "wish-list-storage" }));
