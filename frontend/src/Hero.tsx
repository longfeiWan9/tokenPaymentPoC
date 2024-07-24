import "./Hero.css";
import logo from "./logo.jpg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { PayToken } from "./components/payToken";
import { Withdraw } from "./components/withdraw";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container1">
      <div className="hero">
        <div className="title">OnChain Payment</div>
        <ConnectButton />
        <PayToken />
        <Withdraw />
      </div>
    </div>
  );
};

export default Hero;
