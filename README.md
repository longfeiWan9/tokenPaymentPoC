# OnChain Token Payment Example

This project demonstrates a basic example of paying with ERC20 token using smart contract on Filecoin. This project includes a tokenPayment contract and frontend to interact with the tokenPayment Contract. 


### tokenPayment

The first version of tokenPayment contract will accept wFIL ERC20 token as payment. Going forward, we are going to add more examples of accepting multiple erc20 tokens as payment or even token payment crossed from other chains.

In order to test the PoC, you will need to:
1. clone this project and install all dependencies.
1. add a `.env` file in the project which we will store wallet key and contract address for hardhat to use.
    - add the following lines in `.env `
        ```
        PRIVATE_KEY=
        WFIL_CONTRACT_ADDRESSS=
        PAYMENT_CONTRACT_ADDRESS=
        ```
1. compile & deployed the tokenPayment contract and update `.env` file with token payment contract address.

### frontEnd
There are two main features on the app.
1. Pay for service using wFIl.

   <img width="496" alt="image" src="https://github.com/longfeiWan9/tokenPaymentPoC/assets/34025001/47cac80a-9e66-42af-bf0e-ecbff555bbca">
   
1. For the admin(contract owner) to withdraw payments received in smart contract.

    <img width="381" alt="image" src="https://github.com/longfeiWan9/tokenPaymentPoC/assets/34025001/1405a48c-14ad-4a07-90a7-b765835e58a7">


UI codes are all in `frontend` folder, we need to install all the dependiecies in `frontend` folder before we start the react app.

1. Update the deployed `PAYMENT_CONTRACT_ADDRESS` in `frontend/src/components/payToken.tsx` and `frontend/src/components/withdraw.tsx`.
1. If you changed the contract code, you also need to cope the generated `PaymentContract.json` over into `frontend/src/contracts/` folder.
1. You can start react app using `npm start`
1. Open http://localhost:3000 to view it in the browser. 

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

## What is next?
This is the v0 of token payment PoC. We will add more features including:
- Improve the UI/UX
- Accept multiple Filecoin-native ERC20 tokens as payment on Filecoin
- Link the payment to the service and track the payment history in smart contract
- Accept cross-chain token payment for storage service provided in other L1
- ......
