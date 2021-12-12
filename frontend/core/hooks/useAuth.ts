import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";

import useGetConnector from "./useGetConnector";

const useAuthentication = () => {
  const { activate, deactivate } = useWeb3React();
  const connector = useGetConnector();

  const login = useCallback(() => {
    activate(connector, (error) => {});
  }, [activate, connector]);

  const logout = useCallback(() => {
    deactivate();
  }, [deactivate]);

  return { login, logout };
};

export default useAuthentication;
