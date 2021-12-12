import { useEffect } from "react";
import type { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";

import useAuth from "@/core/hooks/useAuth";
import { useLotteryContract } from "@/core/hooks/useContract";
import useWeb3Provider from "@/core/hooks/useWeb3Provider";

const ContractPage = () => {
  const lotteryContract = useLotteryContract();
  const provider = useWeb3Provider();
  useEffect(() => {
    async function log() {}
    log();
  }, []);

  return <div>This is lottery</div>;
};

const Home: NextPage = () => {
  const { account, library } = useWeb3React();
  const { login, logout } = useAuth();

  useEffect(() => {
    async function log() {}
    console.log("account", account);
    log();
  }, [library, account]);
  if (!account) {
    return <div onClick={() => login()}>Login</div>;
  }
  return (
    <div>
      <div>{account}</div>
      <ContractPage />
      <div onClick={() => logout()}>Log out</div>
    </div>
  );
};

export default Home;
