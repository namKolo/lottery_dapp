import { Contract, ethers } from "ethers";

import ConfigService from "./Configuration/ConfigurationService";
import { IConfigurationService } from "./Configuration/IConfigurationService";

import EnvironmentService, { IEnvironmentService } from "./EnvironmentService";
import { Lottery } from "@contract-types";

type ESigner = ethers.Signer | ethers.providers.Provider;

export interface IContractService {
  getLotteryContract(): Lottery;
}

class ContractService implements IContractService {
  constructor(
    private readonly environmentService: IEnvironmentService,
    private readonly configService: IConfigurationService
  ) {}

  private _getContract<T extends Contract>(
    abi: any,
    address: string,
    signer?: ESigner
  ): T {
    const signerOrProvider =
      signer ?? this.environmentService.getSimpleRpcProvider();
    return new ethers.Contract(address, abi, signerOrProvider) as T;
  }

  getLotteryContract(signer?: ESigner): Lottery {
    return this._getContract<Lottery>(
      this.configService.getLotteryABI(),
      this.configService.getLotteryAddress(),
      signer
    );
  }
}

export default new ContractService(EnvironmentService, ConfigService);
