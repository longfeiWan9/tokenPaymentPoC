# OnChain Token Payment Example

This project demonstrates a basic example of paying with ERC20 token onchain. This project includes a tokenPayment contract and frontend to interact with the tokenPayment Contract. 
- tokenPayment
    - Need to compile smart contract which will use wFIL as payment in default
    - setup `.env` to store your wallet key and contract address
- frontend
    - once you deployed smart contract, you can add it in the frontend code and test it out e2e.
    - install all the dependencies, then you can start react app using `npm start`

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
