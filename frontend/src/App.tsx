import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { PayToken } from './components/payToken';
import { Withdraw } from './components/withdraw';

const App = () => {
  return (
    <div className="container" style={{padding: 12}}>
      <h1>Fil-B Token Payment PoC</h1>
      <ConnectButton />
      <PayToken />
      <Withdraw />
    </div>
  );
};

export default App;
