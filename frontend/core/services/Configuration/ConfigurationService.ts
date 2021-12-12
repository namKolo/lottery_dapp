import { ContractInterface } from "@ethersproject/contracts";

import { IConfigurationService } from "./IConfigurationService";

import lotteryABI from "./abi/lottery.json";

class ConfigurationService implements IConfigurationService {
  getLotteryABI(): ContractInterface {
    return lotteryABI;
  }

  getLotteryAddress(): string {
    return "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  }
}

export default new ConfigurationService();
