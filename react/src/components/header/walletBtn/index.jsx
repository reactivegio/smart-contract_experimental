import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Localhost, shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import MetamaskIcon from "../../../assets/img/metamask.png";

const Button = styled.button`
  border-radius: 50px;
  box-shadow: inset 0 0 0 1px #f2f2f2; 
  padding: 0.5em 1.5em;
  color: #f2f2f2;
  border: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #FFF;
  color: #333;
  font-weight: bold;
`;

function WalletBtn() {  
  const { ens } = useLookupAddress();
  const { account, activateBrowserWallet, chainId, deactivate, error, switchNetwork } = useEthers();

  const [rendered, setRendered] = useState("");


  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  const SwitchNetworkBtn = () => {
    /**
     * You can switch network to sure that the network is the correct
     */
    if(account){            
      if(chainId && chainId === Localhost.chainId){
          return null;
      }
      else{
        return <Button onClick={() => switchNetwork(Localhost.chainId)}>
          Switch network
        </Button>
      }
    }
    return null;
  }

  return (
    <div style={{display: "flex"}}>
    <Button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
    >
      <img style={{width: "50px", verticalAlign: "middle"}} src={MetamaskIcon} alt="metamask icon" />
      <span>
      {rendered === "" && "Connect"}
      {rendered !== "" && "Disconnect"}
      </span>            
    </Button>    
    </div>
  );
}

export default WalletBtn