import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./Slice.js"

const store = configureStore({
  reducer: gameReducer
})


export default store