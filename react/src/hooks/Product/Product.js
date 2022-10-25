import {useLogs} from "@usedapp/core"
import { formatEther } from "ethers/lib/utils";
import {useMemo} from "react";
import { contract } from "..";

/** Get logs from events */
export const useProduct = () => {
    const logs = useLogs({
        contract,
        event: "NewProduct",
        args: [null],
    });
    
    console.log("*** logs: ", logs);
    const products = useMemo(() => {
        return logs?.value?.map(Log => {                   
            return {
                dnaProduct: Log.data.dnaProduct,
                seller: Log.data.seller,
                name: Log.data.name,
                totalTokens: formatEther(Log.data.totalTokens),
            };
        }) || []
    }, [logs?.value]);
    
    return {
        products
    }
}