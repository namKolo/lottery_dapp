import { useMemo } from "react";
import ContractService from "../services/ContractService";

import useWeb3Provider from "./useWeb3Provider";

export const useLotteryContract = () => {
  const provider = useWeb3Provider();
  return useMemo(
    () => ContractService.getLotteryContract(provider?.getSigner()),
    [provider]
  );
};

export const useGreeterContract = () => {
  const provider = useWeb3Provider();
  return useMemo(
    () => ContractService.getGreeterContract(provider?.getSigner()),
    [provider]
  );
};
