import { useCall } from "@usedapp/core";
import { contract } from "..";

export const useIsSellers = (address) => {         
  const { error, value } = useCall(contract && address && {
        contract: contract,
        method: "isSeller",
        args: [address]
      }) ?? {}    
  return { error, value } 
}