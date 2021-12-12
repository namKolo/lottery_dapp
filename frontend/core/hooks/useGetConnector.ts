import { AbstractConnector } from "@web3-react/abstract-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

import { useMemo } from "react";

import EnvironmentService from "../services/EnvironmentService";

const useGetConnector = (): AbstractConnector => {
  const chainIds = EnvironmentService.getSupportedChainIds();
  const connector = useMemo(
    () => new InjectedConnector({ supportedChainIds: chainIds }),
    [chainIds]
  );

  return connector;
};

export default useGetConnector;
