import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sipYearData:{},
    experimental:false,
}
export const valueSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        setAllYearsDataForSip:(state,action)=>{
            state.sipYearData = action.payload;
        },   
        updateMainFalg:(state,action)=>{
            state.experimental = action.payload;
        },   
    },
});
export const { setAllYearsDataForSip,updateMainFalg } = valueSlice.actions;
export default valueSlice.reducer;