import './App.css';
import styled from "styled-components";
import Header from './components/header';
import SustainabilityImg from "./assets/img/sustainability.png"
import { useEthers } from '@usedapp/core';
import CreateProduct from './components/createProduct';
import { useEffect, useState } from 'react';
import { useGetProductList } from './hooks/useGetProductList/useGetProductList';
import { PRODUCT_ADDRESS } from './config';
import ProductBox from './components/productBox';
import DrawerProduct from './components/drawerProduct';
import { ToastContainer } from 'react-toastify';

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const H2Title = styled.h2`
  color: #333;
  font-size: 3.1em;
`;

const H3Subtitle = styled.h3`
  text-align: left;
  line-height: 1.45;
  font-size: 2em;
  color: #333;
  `;

function App() {  
  const [productList, setProductList] = useState([]);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [productSelected, setProductSelected] = useState(null);
  const { account } = useEthers();    
 //  const {products} = useProduct();
  const updatedList = useGetProductList();

  useEffect(() => {    
    if(!updatedList.value?.[0]) return;    
    setProductList(updatedList.value[0]);
  }, [updatedList.value]);
  
  console.log(typeof productList)
  return  (
    <div className="App">
      <Header />
      <Container>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <H2Title>
              A Smart contract experiment
            </H2Title>
            <H3Subtitle>
              Invest in your future
            </H3Subtitle>
            { account === PRODUCT_ADDRESS && 
              <CreateProduct />
            }
          </div>
          <div>
            <img style={{width: "250px"}} src={SustainabilityImg} alt="sustainability" />
          </div>
        </div>
               
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {
            productList && productList.map(el => {              
              return <ProductBox el={el} setProductList={setProductList} setProductSelected={setProductSelected} setIsOpenDrawer={setIsOpenDrawer} />              
            })
          }
        </div>
        <DrawerProduct productSelected={productSelected} isOpen={isOpenDrawer} toggleDrawer={() => setIsOpenDrawer(!isOpenDrawer)} />
      </Container> 
      <ToastContainer />
    </div>
  );
}

export default App;
