import { useContractFunction } from "@usedapp/core";
import { contract } from "..";

export const useCreateProduct= () => {
    const {state, send} = useContractFunction(contract, "createProduct", {transactionName: "CREATE PRODUCT"});
    const loading = state.status === "PendingSignature" || state.status === "Mining";
    const success = state.status === "Success";
    const error = state.status === "Fail" || state.status === "Exception";
    return {
        loading, success, error, send
    }
}