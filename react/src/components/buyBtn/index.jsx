import { useEthers } from '@usedapp/core';
import { utils } from 'ethers';
import React from 'react'
import styled from "styled-components";
import { useTransferToken } from '../../hooks/useTransferToken/useTransferToken';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyBtn = ({seller, productDna, setProductList}) => {
const {loading, success, error, send} = useTransferToken();

const { account } = useEthers();

const ButtonCompensate = styled.button`
border-radius: 50px;
padding: 0.5em 1.5em;
background-color: #FFD97D;
color: #333;
border: 0;
font-size: 16px;
display: flex;
align-items: center;
cursor: pointer;
font-weight: bold;
margin: 0 auto;
`;

const handleSubmit = async () => {           
  toast.info("Please wait", {
    theme: "colored",
    autoClose: 20000
  });  

    await send(productDna, seller, account, 20);    

    toast.success("Thank you!", {
      theme: "colored"
    });
} 

  return (
    <ButtonCompensate onClick={e => {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    }
    }>
      Buy 20 BES
    </ButtonCompensate>
  )
}

export default BuyBtn