import React from "react";

const Header = ({ connectToMetamask, account }) => {
    return (
        <header className="d-flex justify-content-end p-4">
            {account ?
                <div className="py-2 text-white fs-5">connected</div> :
                <button
                    className="btn btn-light rounded-pill"
                    onClick={connectToMetamask}
                >
                    Connect to Metamask
                </button>}
        </header>
    )
}
export default Header;