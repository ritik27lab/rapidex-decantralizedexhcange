import React from "react";
import Logo from "../rapidex.svg";
import Eth from '../eth.svg'

function Header() {
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <div className="headerItem">Swap</div>
        <div className="headerItem">Token</div>
      </div>

      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth"/>
          Ethereum
        </div>
        <div className="connectButton"
        //  onClick={connect}
        >
          Connect
        </div>
      </div>
    </header>
  );
}

export default Header;
