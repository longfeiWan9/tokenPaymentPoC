import "@rainbow-me/rainbowkit/styles.css";

import { PayToken } from "./components/payToken";
import { useAccount } from "wagmi";
import { Withdraw } from "./components/withdraw";

const WithdrawPage = () => {
  const { isConnected } = useAccount();
  return (
    <div>
      <Withdraw />
      {/* <PayToken /> */}
    </div>
  );
};

export default WithdrawPage;
