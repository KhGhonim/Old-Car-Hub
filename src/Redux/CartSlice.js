import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopCartInTheArray: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const ItemWithQ = { ...action.payload, quantity: 1 };
      const ExistingItemIndex = state.shopCartInTheArray.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (ExistingItemIndex !== -1) {
        state.shopCartInTheArray[ExistingItemIndex].quantity += 1;
      } else {
        state.shopCartInTheArray.push(ItemWithQ);
      }
    },
    IncreaseTheNumber: (state, action) => {
      const ExistingItem = state.shopCartInTheArray.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ExistingItem !== -1) {
        state.shopCartInTheArray[ExistingItem].quantity += 1;
      } else {
        state.shopCartInTheArray.push(action.payload);
      }
    },
    LowerTheNumber: (state, action) => {
      const ExistingItem = state.shopCartInTheArray.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ExistingItem >= 0) {
        state.shopCartInTheArray[ExistingItem].quantity -= 1;
      }
      if (state.shopCartInTheArray[ExistingItem].quantity === 0) {
        state.shopCartInTheArray = state.shopCartInTheArray.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    DeleteItem: (state, action) => {
      const ExistingItem = state.shopCartInTheArray.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (ExistingItem !== -1) {
        state.shopCartInTheArray.splice(ExistingItem, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, LowerTheNumber, IncreaseTheNumber, DeleteItem } =
  shopSlice.actions;

export default shopSlice.reducer;
