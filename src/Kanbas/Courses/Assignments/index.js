import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { AiOutlineMore, AiFillCheckCircle } from "react-icons/ai";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div className="row">
                <div className="row">
                    <div className="col">
                        <input id = "search" placeholder="Search for Assignment"></input>
                    </div>
                    <div className="col">
                        <div className="float-end ">
                            <button className="btn btn-light wd-button-equal-height wd-element-mar">
                                <AiOutlineMore className="wd-icon" />
                            </button>
                        </div>
                        <div className="float-end "><button className="btn btn-danger wd-button-equal-height">+Assignment</button></div>
                        <div className="float-end "><button className="btn btn-light wd-button-equal-height">+Group</button></div>
                    </div>
                </div>
            </div>

            <div className="list-group">
                <ul>
                    <li className="list-group-item list-group-item-dark"><h3>ASSIGNMENTS</h3></li>
                    {courseAssignments.map((assignment) => (
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item d-flex justify-content-between align-items-center">
                            {assignment.title}
                            <AiFillCheckCircle className="wd-icon" style={{color: 'green'}} />
                        </Link>
                    ))}
                </ul>

            </div>
        </div>
    );
}
export default Assignments;