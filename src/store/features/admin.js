import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    id: -1,
    name: "",
    username: "",
    email: "",
    shop_name: "",
    avatar: "",
  },
  reducers: {
    addInfo(state, {payload}) {
      state.id = payload.local_info.id
      state.name = payload.local_info.name
      state.username = payload.local_info.username
      state.email = payload.local_info.email
      state.shop_name = payload.local_info.shop_name
      state.avatar = payload.local_info.avatar
    }
  },
})

export const {addInfo} = adminSlice.actions
export default adminSlice.reducer