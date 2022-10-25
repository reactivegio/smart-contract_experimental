import { useCall } from "@usedapp/core";
import { contract } from "..";

export const useGetProductList = () => {         
  const { error, value } = useCall(contract && {
        contract: contract,
        method: "getProductList",
        args: []
      }) ?? {}    
  return { error, value } 
}