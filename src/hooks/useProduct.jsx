import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export default function useProduct() {
    const getProducts = async()=>{
        const response = await axiosInstance.get(`/Products`);
        console.log(response); 
        return response.data;
    }

    const query = useQuery({
        queryKey: ['Products','en'],
        queryFn:getProducts,
        staleTime: 1000 * 60 * 5 
    })

  return query;
}

