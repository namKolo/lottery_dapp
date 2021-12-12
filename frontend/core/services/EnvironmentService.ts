import { ethers } from "ethers";

export interface IEnvironmentService {
  getSupportedChainIds(): number[];
  getSimpleRpcProvider(): ethers.providers.StaticJsonRpcProvider;
}

class EnvironmentService implements IEnvironmentService {
  constructor() {}

  getSupportedChainIds() {
    return [1337];
  }

  getRpcUrl() {
    return process.env.REACT_APP_NODE;
  }

  getSimpleRpcProvider() {
    return new ethers.providers.StaticJsonRpcProvider(this.getRpcUrl());
  }
}

export default new EnvironmentService();
