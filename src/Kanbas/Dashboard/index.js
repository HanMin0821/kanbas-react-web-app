import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"

function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }
) {
    //
    // const [courses, setCourses] = useState(db.courses);
    // const [course, setCourse] = useState({
    //     name: "New Course",      number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    // });
    //
    // const addNewCourse = () => {
    //     setCourses([...courses,
    //         { ...course,
    //             _id: new Date().getTime() }]);
    // };
    //
    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };
    //
    return (
        <div>
            <h1>Dashboard</h1>
            <hr/>
            <h5>Course</h5>
            <hr/>

            <input value={course.name} className="form-control"
                   onChange={(e) =>
                       setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                   onChange={(e) =>
                       setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) =>
                       setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) =>
                       setCourse({ ...course, endDate: e.target.value }) } />
            <br/>
            <div className={"wd-button-flex"}>
                <button onClick={addNewCourse}  className={"btn btn-success wd-button float-end"} >
                    Add
                </button>
                <button onClick={updateCourse} className={"btn btn-primary wd-button float-end"} >
                    Update
                </button>
            </div>
            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item">
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }} className={"btn btn-warning wd-button"}>
                            Edit
                        </button>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }} className={"btn btn-danger wd-button"}>
                            Delete
                        </button>
                        {course.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard