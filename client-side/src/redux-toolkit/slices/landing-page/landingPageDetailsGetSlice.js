import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { landingPageDetailsGet } from "../../../api-client";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

// First, create the thunk
export const getLandingPageDetails = createAsyncThunk(
  "getLandingPageDetails/Get",
  async (data, { rejectWithValue }) => {
    try {
      const response = await landingPageDetailsGet(data);
      return response?.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      const errObj = {
        type: "GET_LANDING_PAGE_DETAILS_FAILURE",
        error: err,
        message: "Oops!, something went wrong",
      };
      return rejectWithValue(err?.response?.data || errObj);
    }
  }
);

// Then, handle actions in your reducers:
const getLandingPageDetailsSlice = createSlice({
  name: "getLandingPageDetails",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLandingPageDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLandingPageDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.error = null;
      })
      .addCase(getLandingPageDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = null;
        state.error = payload;
      });
  },
});

export const getLandingPageDetailsSelector = (state) =>
  state.getLandingPageDetails;
export const getLandingPageDetailsReducer = getLandingPageDetailsSlice.reducer;
