import { create } from "zustand";

const  useAuthStore = create( (set)=>({
  
    token: localStorage.getItem|('accesstoken'),
    setToken:(newToken)=>{

        set({
            token:newToken
        });
        localStorage.setItem('accesstoken',newToken);
    },
    logout:()=>{
        set({
            token:null
        });
        localStorage.removeItem('accesstoken');
    }
}) );

export default useAuthStore;