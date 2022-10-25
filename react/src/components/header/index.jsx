import { useEthers, useTokenBalance } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';
import React from 'react'
import styled from "styled-components";
import { CONTRACT_ADDRESS } from '../../config';
import WalletBtn from './walletBtn';

const HeaderStyle = styled.header`
  align-items: center;  
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 70px;
  padding: 16px;  
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 42px;
`;

function Header() {
  const { account } = useEthers();
  const tokenBalance = useTokenBalance(CONTRACT_ADDRESS, account);

  return (
    <HeaderStyle>       
       <div>
       {tokenBalance && <p>My token: {parseInt(formatEther(tokenBalance) * 10 ** 18)} BES </p> }
       </div>
        <WalletBtn />
    </HeaderStyle>
  )
}

export default Header