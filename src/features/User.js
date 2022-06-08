import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeUser";

export const userslice = createSlice({
    name: "users",
    initialState: {value: UsersData},
    reducers: {
        addUser: (state , action) => {
            state.value.push(action.payload)
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },

        updateEmail: (state, action) => {
           state.value.map((user) => {
               if(user.id === action.payload.id){
                   user.email= action.payload.email;
               }
           })
        }

    },
});

export const {addUser , deleteUser, updateEmail} = userslice.actions;
export default userslice.reducer;