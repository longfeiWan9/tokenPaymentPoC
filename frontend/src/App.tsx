import './index.css';
import logo from './logo.jpg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { PayToken } from './components/payToken';
import { Withdraw } from './components/withdraw';
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    
    <div className="container">
      <img src={logo} alt="logo"/>

      <div className='main'>
        <h1>Token Payment Example</h1>
        <div className='connectButton'>
          <ConnectButton />
        </div>
        <PayToken />
        <Withdraw />
      </div>

      <footer className ="footer">
        <p>Made with ❤️ by FIL-Builder</p>
        <a
          href="https://github.com/FIL-Builders/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </footer>
      
    </div>
  );
};

export default App;
