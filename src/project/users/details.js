import React, {useEffect,useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import * as client from "./clients";

function UserDetails(){
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const {id} = useParams();
    const fetchUser = async () => {
        const user = await client.findUserById(id);
        setUser(user);
    };
    const updateUser = async () => {
        const status = await client.updateUser(id, user);
    };

    const deleteUser = async (id) => {
        const status = await client.deleteUser(id);
        navigate("/project/users");
    };

    useEffect(() => {
        fetchUser();

    }, []);
    return (
        <div>
            <h2>User Details</h2>
            {user &&
                (

                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>
                        First Name:
                        <input
                            type="text"
                            className="form-control"
                            value={user.firstName}
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        />
                    </p>
                    <p>Last Name: {user.lastName}</p>
                    <button onClick={updateUser} className="btn btn-primary">
                        Update
                    </button>
                    <button
                        onClick={() => deleteUser(user._id)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>

                </div>
                )}
        </div>
    )
}
export default UserDetails