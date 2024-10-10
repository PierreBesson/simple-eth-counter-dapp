# Simple Eth Counter Dapp

This is a very Basic Dapp intended to demonstrate calls to a Counter smart contract from the Browser.

## Deploy Counter.sol

* Import `contract/Counter.sol` in https://remix.ethereum.org/
* Select the file and compile it with the solidity compiler (S icon on the left toolbar).
* Deploy the contract (Ethereum icon on the left toolbar)
* Select Injected Provider - Metamask (this assumes your Metamask is connected to the proper network where you have funds available).
* Select your account and click **Deploy**
* Copy the contract address (in the **Deployed Contracts** section)

## Start the Dapp locally

* `npm i && npm run dev`
* Open http://localhost:5173/#0xCONTRACT_ADDRESS
* You should be able to connect your Metamask wallet and sign transactions to increase/decrease the counter.# simple-eth-counter-dapp
# simple-eth-counter-dapp
