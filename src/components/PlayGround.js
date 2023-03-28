import "./Playground.css";

const Playground = ({ children }) => {
    return <div className="d-flex flex-column play-area">{children}</div>;
};
export default Playground;