import { useMutation, useQueryClient } from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance";


export default function uesUpdateCartItem(){
  const queryClient = useQueryClient();

    return useMutation({
        mutationFn : async({ProductId,count })=>{
            await authAxiosInstance .patch(`/Carts/{ProductId}`,{count})
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['carts']})

        }
    })
}