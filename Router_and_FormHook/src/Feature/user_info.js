import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  user: [
    { id: 1, email: "praveen@gmail.com", password: "12345", active: false },
  ],
  authenticatoin:{
    email:null
  }
};
const userslice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: (state, action) => {
      const New_user = {
        id: nanoid(),
        email: action.payload.email,
        password: action.payload.password,
        active: false,
      };
      state.user.push(New_user);
    },
    updateuser: (state, action) => {
      const upuser = state.user.map((user) =>
        user.email === action.payload ? { ...user, active: true } : user
      );
      state.user = upuser;
    },
    logout:(state,action)=>{
      console.log("click")
      const update=state.user.map((user)=>user.email===action.payload?{...user,active:false}:user)
      state.user=update
    }
  },
});

export const { adduser, updateuser , logout } = userslice.actions;
export const userreducer = userslice.reducer;
