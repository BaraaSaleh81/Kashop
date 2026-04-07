import { useMutation, useQueryClient } from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance";

export default function uesRemoveFromCart(){
    
         const queryClient = useQueryClient();

          return useMutation({
            mutationFn:(cartItemId) => authAxiosInstance.delete(`/Carts/${cartItemId}`),
             onSuccess:()=>{
            queryClient.invalidateQueries(
               { queryKey : ['carts']}
            )
        }
          })
        

}