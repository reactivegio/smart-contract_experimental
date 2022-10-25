import React from 'react'
import Drawer from 'react-modern-drawer';
import styled from "styled-components";
import 'react-modern-drawer/dist/index.css';
import "./style.css";

const DrawerProduct = ({productSelected, isOpen, toggleDrawer}) => {

  const DrawerContainer = styled.div`  
    padding: 24px;
    color: #333;
    display: flex;
    align-items: flex-start;
  `;

  return (
    <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='drawerProduct'
        size="650px"
    >
        <DrawerContainer>
            {productSelected &&
            <>
                <h2>
                    {productSelected.name}
                </h2>
            </>
            }
        </DrawerContainer>
    </Drawer>
    
  )
}

export default DrawerProduct;