import React from 'react'
import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';

export default function useProducts(id) {
    const getProducts = async()=>{
        const response = await axiosInstance.get(`/Products/${id}`);
        console.log(response); 
        return response.data;
    }

    const query = useQuery({
        queryKey: ['Products','en',id],
        queryFn:getProducts,
        staleTime: 1000 * 60 * 5 
    })

  return query;
}
