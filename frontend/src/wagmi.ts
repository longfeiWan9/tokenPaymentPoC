import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  mainnet,
  polygon,
  sepolia,
  filecoin,
  filecoinCalibration,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    arbitrum,
    filecoin,
    filecoinCalibration,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
});
