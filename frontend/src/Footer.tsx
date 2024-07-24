import "./Footer.css";
import logo from "./logo.jpg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { PayToken } from "./components/payToken";
import { Withdraw } from "./components/withdraw";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="p">Made with ❤️ by FIL-Builder</div>
      <a
        href="https://github.com/FIL-Builders/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="githubIcon" />
      </a>
    </div>
  );
};

export default Footer;
