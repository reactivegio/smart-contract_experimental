import React from "react"
import Blockchain from "../../assets/img/blockchain.jpeg"
import InfoIcon from "../../assets/img/info.png"
import styled from "styled-components"
import BuyBtn from "../buyBtn"

const ProductBox = ({ el, setProductList, setProductSelected, setIsOpenDrawer }) => {
	const ProductCard = styled.div`
		background: #202227;
		border-radius: 20px;
		width: 284px;
		height: 300px;
		margin: 16px 16px 16px 0;
		color: #fff;
		position: relative;
		> div:nth-of-type(1) {
			padding: 24px;
			font-size: 1.9em;
			line-height: 1.25;
		}
	`

	const BannerToken = styled.div`
		position: absolute;
		top: 17%;
		font-size: 16px;
		background-color: #81c540;
		padding: 12px;
		font-weight: bold;
		left: -10px;
		color: #333;
	`

	const InfoButton = styled.div`
		position: absolute;
		right: 0;
		font-size: 16px;
		padding: 12px;
		font-weight: bold;
		color: #333;
		top: 0;
		cursor: pointer;
		> img {
			width: 30px;
		}
	`

	return (
		<ProductCard onClick={() => {
            setProductSelected(el);
            setIsOpenDrawer(true);
            }
        }>
			<img
				style={{
					height: "150px",
					borderRadius: "20px 20px 0px 0px",
					backgroundSize: "cover",
					width: "100%"
				}}
				src={Blockchain}
				alt="blockchain"
			/>
			<div>{el.name}</div>
			<BannerToken>BES. {parseInt(el.totalTokens)}</BannerToken>
			<InfoButton>
				<img src={InfoIcon} alt="" />
			</InfoButton>
			<BuyBtn
				setProductList={setProductList}
				productDna={el.dna}
				seller={el.seller}
			/>
		</ProductCard>
	)
}

export default ProductBox
