import  { useEffect, useState } from 'react';
import axios from 'axios';


const useGetProduct =(API)=>{
    const [products, setProducts] = useState([]);

	 useEffect( async () => {

		const response = await axios(API);
		setProducts(response.data);
		//loadData();
	}, [])

	/* const loadData= async ()=>{
		const response = await fetch(API);
		const data = await response.json()
		setProducts(data);
		console.log(data,'****')
	} */
    return products;
}

export default useGetProduct;