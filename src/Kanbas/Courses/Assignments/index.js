import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
// import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import { addAssignemts, deleteAssignemts,
    updateAssignemts, setAssignemt } from "./assignmentsReducer";
import {updateModule} from "../Modules/modulesReducer";

function AssignmentList() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <div className={"wd-row"}>
                    <div className={"wd-col"}>
                        <input placeholder={"Search an assignment"}/>
                        <input
                            value={assignment.title}
                            onChange={(e) =>
                                dispatch(setAssignemt({ ...assignment, title: e.target.value }))
                            }/>
                    </div>
                    <div className={"wd-col"}>
                        <button
                            onClick={() => dispatch(addAssignemts({ ...assignment, _id: courseId }))}  className={"btn btn-success wd-button"}>Add</button>
                        <button
                            onClick={() => dispatch(updateAssignemts(assignment))} className={"btn btn-warning wd-button"}>
                            Update </button>
                    </div>
                </div>


            </li>


            {assignments
                .map((assignment, index) => (
                    <li key={index} className="list-group-item">
                        <button
                            onClick={() => dispatch(setAssignemt(assignment))} className={"btn btn-success float-end"}>
                            Edit
                        </button>

                        <button
                            onClick={() => dispatch(deleteAssignemts(assignment._id))} className={"btn btn-danger float-end"}>
                            Delete
                        </button>

                        <h3>{assignment.title}</h3>
                    </li>))}
        </ul>
    );
}
export default AssignmentList;