import React from "react";

const PlayButton = ({ play }) => {
    return (
        <button
            className="btn btn-light rounded-pill"
            style={{ borderRadius: "20px", width: "200px" }}
            type="button"
            onClick={play}
        >
            Play
        </button>
    )
}
export default PlayButton;