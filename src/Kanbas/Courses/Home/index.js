import ModuleList from "../Modules/ModuleList";
import Modules from "../Modules";
import Status from "../Modules/Status";
function Home() {
    return (
        <div className="row">
            <div className="col-9">
                <Modules />
            </div>
            <div className="col-3">
                <Status/>
            </div>
        </div>
    );
}
export default Home;