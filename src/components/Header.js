import React from "react";

const Header = ({ connectToMetamask, account }) => {
    return (
        <>
            {account ? <div>connected</div> : <button onClick={connectToMetamask}>Connect to Metamask</button>}
        </>
    )
}
export default Header;