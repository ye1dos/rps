import React from "react";

const ResetButton = ({ reset }) => {
    return (
        <button
            className="btn btn-dark rounded-pill"
            style={{ borderRadius: "20px", width: "200px" }}
            type="button"
            onClick={reset}
        >
            Reset
        </button>
    )
}
export default ResetButton;