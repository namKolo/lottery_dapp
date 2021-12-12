## Template to build Dapp

### How to Configure Environment

- The env var is centralized in EnvironmentService

### How to connect to Metamask
- Update the EnvironmentService to add the supported chain ids.
- Use the hook `useAth` which returns `login` and `logout`
- Use 2 above functions to trigger some cool stuffs.

### How to add a new contract configuration

- Add the abi.json of the contract to `core/services/abi`;
- Update ConfigurationService 
```
   get<ContractName>Address(): string
   get<ContractName>ABI(): ContractInterface
```

- Run below command to generate the type for new contract
```
yarn extract-contract-types
```


- Update `ContactService`
```
   import { <NewGeneratedContracTypes> } from "@contract-types";
   ...
   get<ContractName>Contract(signer?: Esigner) : NewGeneratedContracTypes
   ...
```

  - Add new hook to resolve the contract  `hooks/useContract.ts`

```
export const use<ContractName>Contract = () => {
  const provider = useWeb3Provider();
  return useMemo(
    () => ContractService.get<ContractName>Contract(provider?.getSigner()),
    [provider]
  );
};
```


- In the component just use it
```
   import { use<ContractName>Contract } from '@/hooks/useContract'
   const YourComp = () => {
      const contract = use<ContractName>Contract();
      ....
   }
```
