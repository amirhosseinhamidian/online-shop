import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    return data;
};

export const useProducts = () => {
    return useQuery('products', fetchProducts);
};