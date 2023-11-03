import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
// import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //       name: "New Module",
  //       description: "New Description",
  //       course: courseId,
  //   });
  //   const addModule = (module) => {
  //       setModules([
  //           { ...module, _id: new Date().getTime().toString() },
  //           ...modules,
  //       ]);
  //   };
  //   const deleteModule = (moduleId) => {
  //       setModules(modules.filter(
  //           (module) => module._id !== moduleId));
  //   };
  //   const updateModule = () => {
  //       setModules(
  //           modules.map((m) => {
  //               if (m._id === module._id) {
  //                   return module;
  //               } else {
  //                   return m;
  //               }
  //           })
  //       );
  //   }
  //
  //

    return (
      <ul className="list-group">
          <li className="list-group-item">
              <div className={"wd-row"}>
                  <div className={"wd-col"}>
                      <input
                          value={module.name}
                          onChange={(e) =>
                              dispatch(setModule({ ...module, name: e.target.value }))
                          }/>
                      <textarea
                          value={module.description}
                          onChange={(e) =>
                              dispatch(setModule({ ...module, description: e.target.value }))
                          }/>
                  </div>
                  <div className={"wd-col"}>
                      <button
                          onClick={() => dispatch(addModule({ ...module, course: courseId }))}  className={"btn btn-success wd-button"}>Add</button>
                      <button
                          onClick={() => dispatch(updateModule(module))} className={"btn btn-warning wd-button"}>
                          Update </button>
                  </div>
              </div>


          </li>


        {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <li key={index} className="list-group-item">
                    <button
                        onClick={() => dispatch(setModule(module))} className={"btn btn-success float-end"}>
                        Edit
                    </button>

                    <button
                        onClick={() => dispatch(deleteModule(module._id))} className={"btn btn-danger float-end"}>
                        Delete
                    </button>

                    <h3>{module.name}</h3>
                  <p>{module.description}</p>
                  <p>{module._id}</p>
                </li>))}
      </ul>
  );
}
export default ModuleList;