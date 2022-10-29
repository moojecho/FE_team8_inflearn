import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api"

const initialState = {
};

export const __getLectureList = createAsyncThunk(
    "GET_LECTURE_LIST",
    async (payload, thunkAPI) => {
      const { data } = await instance.get(
        `api/lecture`
      );
      return thunkAPI.fulfillWithValue(data);
    }
  );

export const __searchList = createAsyncThunk(
  "SEARCH_LECTURE",
  async (payload, thunkAPI) =>
{
  const data = await instance.get(`api/search?keyword=${payload.current.value}`);
  return thunkAPI.fulfillWithValue(data.data.data);
}
);

export const LectureSlice = createSlice({
name:"lecture",
initialState,
reducers:{},
extraReducers:{
    [__getLectureList.fulfilled]: (state, action) => {
        state.lecture = action.payload;
      },
      [__searchList.fulfilled]: (state, action) => {
        state.lecture = action.payload;
      },
},
});
export default LectureSlice.reducer;