import "./Message.css";
import React from "react";

export const Message = ({ result }) => {
  return (
    <div className="message-box">
        {result && <h3 className="text-white">{result}</h3>}
    </div>
  );
};
