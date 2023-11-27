import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storeDetailsByCategoryGet } from "../../../api-client";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const getStoreDetailsByCategory = createAsyncThunk(
  "getStoreDetailsByCategory/Get",
  async (data, { rejectWithValue }) => {
    try {
      const response = await storeDetailsByCategoryGet(data);
      return response?.data;
    } catch (err) {
      const errObj = {
        type: "GET_STORE_DETAILS_BY_CATEGORY_FAILURE",
        error: err,
        message: "Oops!, something went wrong",
      };
      return rejectWithValue(err?.response?.data || errObj);
    }
  }
);

const getStoreDetailsByCategorySlice = createSlice({
  name: "getStoreDetailsByCategory",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStoreDetailsByCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getStoreDetailsByCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.error = null;
      })
      .addCase(getStoreDetailsByCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = null;
        state.error = payload;
      });
  },
});

export const getStoreDetailsByCategorySelector = (state) => state.getStoreDetailsByCategory;
export const getStoreDetailsByCategoryReducer = getStoreDetailsByCategorySlice.reducer;
