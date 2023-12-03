import {useState} from "react";

function Search() {
    const [searchTerm, setSearchTerm] = useState()
    return (
        <div>
            <h1>Search</h1>
            <button className="btn btn-primary float-end"> Search</button>
            <input
                type="text"
                className="form-control w-75"
                placeholder="Seach..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />
        </div>
    );
}

export default Search;