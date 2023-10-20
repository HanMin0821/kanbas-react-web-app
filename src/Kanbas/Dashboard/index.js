import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css"
function Dashboard() {
    const courses = db.courses;
    return (
        <div className= "wd-dashboard-table">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-table">
                {courses.map((course, index) => (
                    <div className="col">
                        <div class="card h-10">
                            <img src="../../images/image3.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{course.name}</h5>
                                <Link
                                    key={course._id}
                                    to={`/Kanbas/Courses/${course._id}`}
                                    className="btn btn-primary"
                                >
                                    {course.name}
                                </Link>
                                <p class="card-text">
                                    Start Date : {course.startDate}
                                    <br/>
                                    End Date : {course.endDate}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Dashboard;