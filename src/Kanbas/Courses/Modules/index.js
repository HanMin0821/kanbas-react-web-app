import ModuleList from "./ModuleList";
import  {AiOutlineMore} from  "react-icons/ai";
import "./index.css"
function Modules() {
    return (
        <div >
            <div className="row">

                <div>
                    <div className="float-end ">
                        <button className="btn btn-light wd-button-equal-height wd-element-mar">
                            <AiOutlineMore className="wd-icon" />
                        </button>
                    </div>
                    <div className="float-end "><button className="btn btn-danger wd-button-equal-height button-color-white wd-element-mar">+Module</button></div>
                    <div className="float-end "><button className="btn btn-light wd-button-equal-height">Publish All</button></div>
                    <div className="float-end "><button className="btn btn-light wd-button-equal-height">View Progress</button></div>
                    <div className="float-end "><button className="btn btn-light wd-button-equal-height">Collapse All</button></div>
                </div>
                <br/>
                <br/>
                <ModuleList/>
            </div>
        </div>
)
    ;
}

export default Modules;