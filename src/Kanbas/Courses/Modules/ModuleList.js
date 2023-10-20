import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const modulesType = ["Resources", "Required Textbook", "Week 0-INTRO", "Week 1 - HTML"]
  return (
      <div>
        {
          modulesType.map((type, index) => (
              <ul key={`${index}`} className="list-group">
                <li className="list-group-item list-group-item-dark wd-modulelist">
                  {type}
                </li>
              </ul>
          ))
        }
      </div>
  );
}
export default ModuleList;