import {configureStore} from "@reduxjs/toolkit";
import admin from "./features/admin";
import {addInfo} from "./features/admin";

const store = configureStore({
  reducer: {
    admin
  }
})

export {
  addInfo
}
export default store