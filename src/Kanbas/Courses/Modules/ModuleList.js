import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as client from "./client";
import {deleteModule, updateModule} from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const [modules, setModules] = useState([]);
    const [module, setModule] = useState({});
    // const modules = db.modules;

    const addModule = async () => {
        const newModule = await client.addModule(courseId, module);
        setModules([newModule, ...modules]);
    };

    const deleteModule = async (id) => {
        try {
            await client.deleteModule(id);
            setModules(modules.filter((module) => module._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const updateModule = async () => {
        try {
            await client.updateModule(module);
            setModules(modules.map((c) => (c._id === module._id ? module : c)));
        } catch (error) {
            console.log(error);
        }
    };;

    const fetchModules = async () => {
        const modules = await client.findModulesForCourse(courseId);
        setModules(modules);
    };

    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={addModule} className= "btn btn-success">Add</button>
                <button onClick={updateModule} className= "btn btn-success">Update</button>
                <input
                    value={module.name}
                    onChange={(e) => setModule({ ...module, name: e.target.value })}
                    className="form-control"
                    placeholder="Module Name"
                />
            </li>
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                        {module.lessons && (
                            <ul className="list-group">

                                {module.lessons.map((lesson, index) => (
                                    <li key={index} className="list-group-item">
                                        <h4>{lesson.name}</h4>
                                        <p>{lesson.description}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button className="btn btn-danger" onClick={deleteModule}>Deleted</button>
                    </li>
                ))}
        </ul>
    );
}
export default ModuleList;