import { loadState } from "../../lib/storage";
import { createSlice } from "@reduxjs/toolkit";
const initialState = loadState("like") || {
  like: [],
  product: [],
};

const likeReduser = createSlice({
  name: "likeReduser",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const product = state?.like?.find(
        (item) => item?.document_id === action.payload?.document_id
      );
      if (product) {
        return state;
      }
      return { ...state, like: [...state?.like, action.payload] };
    },
    deleteLike: (state, action) => {
      const newLikes = state?.like?.filter(
        (item) => item?.document_id !== action.payload?.document_id
      );
      return { ...state, like: newLikes };
    },

    addProduct: (state, action) => {
      const product = state?.product?.find(
        (item) => item?.document_id === action.payload?.document_id
      );
      if (product) {
        return state;
      }
      return {
        ...state,
        product: [
          ...state?.product,
          {
            ...action.payload,
            userCount: 1,
            price: action.payload?.rating,
            userPrice: action.payload?.rating,
          },
        ],
      };
    },
    deleteProduct: (state, action) => {
      const newProducts = state?.product?.filter(
        (item) => item?.document_id !== action.payload?.document_id
      );
      return { ...state, product: newProducts };
    },
    toggleAnmount: (state, action) => {
      if (action.payload.type === "add") {
        const newProduct = state.product.map((item) => {
          if (item?.document_id == action.payload?.document_id) {
            return {
              ...item,
              userCount: item?.userCount + 1,
              userPrice: (item?.userCount + 1) * item?.price,
            };
          }
          return item;
        });
        return { ...state, product: newProduct };
      }
      if (action.payload.type === "delete" && 1 !== action.payload?.userCount) {
        console.log(action.payload?.userCount, action.payload.type);
        const newProduct = state.product.map((item) => {
          if (
            item.document_id == action.payload?.document_id &&
            action.payload?.userCount > 1
          ) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, product: newProduct };
      }
    },
    totalPriceData: (state, action) => {
      console.log("------------------kkiki");
      const count = state.product?.reduce((a, b) => {
        return a + b?.userPrice;
      }, 0);
      console.log(count);
      return { ...state, price: count };
    },
    removeAll: (state) => {
      return {
        ...state,
        product: [],
      };
    },
  },
});

export default likeReduser.reducer;

export const {
  addLike,
  deleteLike,
  addProduct,
  deleteProduct,
  removeAll,
  toggleAnmount,
  totalPriceData,
} = likeReduser.actions;
