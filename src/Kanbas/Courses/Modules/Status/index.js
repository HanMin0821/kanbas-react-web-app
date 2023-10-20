import React from "react";

function Status() {
    const status = [
        "Import Existing Content",
        "Import from Commons",
        "Choose Home Page",
        "View Course Stream",
        "New Announcement",
        "New Analytics",
        "View Course Notifications"
    ];

    return (
        <div>
            {status.map((type, index) => (
                <button type="button" className="btn btn-outline-secondary wd-status" key={index}>{type}</button>
            ))}
        </div>
    );
}

export default Status;