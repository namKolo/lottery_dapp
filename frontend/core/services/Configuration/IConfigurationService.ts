import { ContractInterface } from "ethers";

export interface IConfigurationService {
  getLotteryABI(): ContractInterface;
  getLotteryAddress(): string;

  getGreeterABI(): ContractInterface;
  getGreeterAddress(): string;
}
