import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignment: { title: "Assignment1", "course": "RS101" },
};


const assignmentsSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        addAssignemts: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignemts: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignemts: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignemt: (state, action) => {
            state.assignment = action.payload;
        },
    },
});


export const { addAssignemts, deleteAssignemts,
    updateAssignemts, setAssignemt } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;