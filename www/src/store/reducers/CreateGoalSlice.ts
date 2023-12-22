import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GoalType from "../../components/types/GoalType";




interface StateType {
    Goals: GoalType[]
}


const initialState: StateType = {
    Goals: []
}


const CreateGoalSlice = createSlice({
    name: 'createGoal',
    initialState,
    reducers: {
        addGoal(state, action: PayloadAction<GoalType>) {
            state.Goals.push(action.payload);
        },
        removeGoal(state, action: PayloadAction<number>) {
            state.Goals.forEach((goal, i) => {
                if (goal.id === action.payload) {
                    state.Goals.splice(i, 1);
                }
            })
        }
    }
})




export default CreateGoalSlice.reducer;
export const {addGoal, removeGoal} = CreateGoalSlice.actions;