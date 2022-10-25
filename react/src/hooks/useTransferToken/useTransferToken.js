import { useContractFunction } from "@usedapp/core";
import { contract } from "..";

export const useTransferToken= () => {
    const {state, send} = useContractFunction(contract, "transferTokenFrom", {transactionName: "TRANSFER PRODUCT TOKEN"});
    const loading = state.status === "PendingSignature" || state.status === "Mining";
    const success = state.status === "Success";
    const error = state.status === "Fail" || state.status === "Exception";
    return {
        loading, success, error, send
    }
}