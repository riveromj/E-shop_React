

import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

import useGetProduct from '../hooks/useGetProduct';

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProduct(API)
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>(
					<ProductItem key={product.id} product={product}/>
				))}			
			</div>
		</section>
	);
}

export default ProductList;