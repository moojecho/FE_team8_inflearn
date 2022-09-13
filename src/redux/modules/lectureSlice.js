import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/api"


const initialState = {
    data:[]
};

export const __getLectureList = createAsyncThunk(
    "GET_LECTURE_LIST",
    async (payload, thunkAPI) => {
      const { data } = await axios.get(
        `http://3.36.73.181:8080/api/lecture`
      );
      return thunkAPI.fulfillWithValue(data);
    }
  );

export const __searchList = createAsyncThunk(
  "SEARCH_LECTURE",
  async (payload, thunkAPI) =>
{
  console.log(payload)
  const data = await instance.get(`api/search?keyword=${payload}`);
  return thunkAPI.fulfillWithValue(data);
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