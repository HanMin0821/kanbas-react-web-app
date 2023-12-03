import Home from "./home";
import Login from "./login";
// import Signup from "./signup";
// import Profile from "./profile";
import Search from "./search";
import Details from "./details";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import UserList from "./users/list";
import Signup from "./users/signup";
import Profile from "./profile";
import UserDetails from "./users/details";
import Signin from "./users/signin";
import Table from "./users/table";


// import UserDetails from "./users/details";
// import SignIn from "./users/signin";
import Account from "./users/account";
// import store from "./store";
// import { Provider } from "react-redux";
// import Navigation from "./nav";
// import CurrentUser from "./users/currentUser";

function Project() {
    const [key, setKey] = useState("home");

    return (
        // <Provider store={store}>
        //     <CurrentUser>
                <div className="container-fluid">
                    <h1>Project</h1>
                    <div className="row">
                        <div className="col-2">
                            <div className="list-group">
                                <Link to = "/project/" className="list-group-item">
                                    Home
                                </Link>
                                <Link to = "/project/signin" className="list-group-item">
                                    Signin
                                </Link>
                                <Link to = "/project/signup" className="list-group-item">
                                    Signup
                                </Link>
                                <Link to = "/project/account" className="list-group-item">
                                    Account
                                </Link>
                                <Link to = "/project/profile" className="list-group-item">
                                    Profile
                                </Link>
                                <Link to = "/project/search" className="list-group-item">
                                    Search
                                </Link>
                                <Link to = "/project/users" className="list-group-item">
                                    Users
                                </Link>
                                <Link to = "/project/details" className="list-group-item">
                                    Details
                                </Link>
                            </div>

                        </div>
                        <div className="col-10">
                            <Routes>
                                <Route path = "/" element={<Home/>}/>
                                <Route path = "/signin" element={<Signin/>}/>
                                <Route path = "/signup" element={<Signup/>}/>
                                <Route path = "/account" element={<Account/>}/>
                                <Route path="/account/:id" element={<Account />} />
                                <Route path = "/search" element={<Search/>}/>
                                <Route path = "/details" element={<Details/>}/>
                                {/*<Route path = "/users" element={<UserList/>}/>*/}
                                <Route path = "/users" element={<Table/>}/>
                                <Route path = "/users/:id" element={<UserDetails/>}/>
                            </Routes>
                        </div>
                    </div>


                </div>

    );
}

export default Project;