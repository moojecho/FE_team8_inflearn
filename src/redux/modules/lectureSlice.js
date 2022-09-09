import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data:[{
      "lectureId": "1",
      "imageFile": "/images/basic.jpg",
      "title": "제목",
      "decription": "내용",
      "lecturer":"김영한",
      "price":"70000",
      "star":"5",
      "reviewCnt": "2개"
  }]
};

export const __getLectureList = createAsyncThunk(
    "GET_LECTURE_LIST",
    async (payload, thunkAPI) => {
      const { data } = await axios.get(
        `http://localhost:3001/data`
      );
      console.log(data)
      return thunkAPI.fulfillWithValue(data);
    }
  );

export const LectureSlice = createSlice({
name:"lecture",
initialState,
reducers:{},
extraReducers:{
    [__getLectureList.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.lecture = action.payload;
      },
},
});
export default LectureSlice.reducer;