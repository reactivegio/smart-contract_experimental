import { useEthers } from '@usedapp/core';
import React from 'react'
import styled from "styled-components";
import { useCreateProduct} from '../../hooks/useCreateProduct/useCreateProduct';

const CreateProduct = () => {
  const {loading, success, error, send} = useCreateProduct();
  const { account } = useEthers();

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

  const handleSubmit = async () => {               
      await send(account, "Product #" + Math.floor(Math.random() * 100), 1000)                
  } 

  return (
    <>
    {error && "ERROR"}
    {!loading &&
    <Button onClick={() => handleSubmit()}>
      Create Product
    </Button>
    }
    </>      
  )
}

export default CreateProduct