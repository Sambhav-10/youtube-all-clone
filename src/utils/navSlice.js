import { createSlice } from "@reduxjs/toolkit";

 const navSlice = createSlice({
    name:"nav",
    initialState:{
        isManuOpen:true,
    },
    reducers:{
         toggleMenu: (state) =>{
            state.isManuOpen =!state.isManuOpen;
         },
         closeMenu:(state) =>{
            state.isManuOpen = false;
         }
    }

 })
 export  const {toggleMenu,closeMenu} = navSlice.actions;
 export default navSlice.reducer