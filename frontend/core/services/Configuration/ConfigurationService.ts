import { ContractInterface } from "@ethersproject/contracts";

import { IConfigurationService } from "./IConfigurationService";

import lotteryABI from "./abi/lottery.json";
import greeterABI from "./abi/greeter.json";

class ConfigurationService implements IConfigurationService {
  getLotteryABI(): ContractInterface {
    return lotteryABI;
  }

  getGreeterABI(): ContractInterface {
    return greeterABI;
  }

  getLotteryAddress(): string {
    return "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  }

  getGreeterAddress(): string {
    return "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
  }
}

export default new ConfigurationService();
