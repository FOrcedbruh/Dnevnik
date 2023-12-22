import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CreateGoalSlice from "./reducers/CreateGoalSlice";




const rootReducer = combineReducers({
    CreateGoalSlice: CreateGoalSlice,
})



const store = configureStore({
    reducer: rootReducer,
    devTools: true
});



export type AppDispatch = typeof store.dispatch;
export type RootType = ReturnType<typeof store.getState>
export default store;