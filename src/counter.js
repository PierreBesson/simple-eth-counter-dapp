import counter_metadata from "./counter_metadata.json" with { type: "json" };
import { Web3 } from "web3";

const url_hash = window.location.hash.substring(1)
if (url_hash.length !== 42) {
    alert('please pass contract address in URL after #')
}

const contract_address = '0xdc64a140aa3e981100a9beca4e685f962f0cf6c9'
const contract_abi = counter_metadata.output.abi
const web3 = new Web3(window.ethereum)
const contract = new web3.eth.Contract(
    contract_abi,
    contract_address,
);
contract.methods.count().call().then((count) => {
    const counterValue = document.querySelector(".counterValue")
    counterValue.innerHTML = count
});


const increaseButton = document.querySelector(".increaseButton")
const decreaseButton = document.querySelector(".decreaseButton")

increaseButton.addEventListener("click", () => {
    increaseCounter()
})
decreaseButton.addEventListener("click", () => {
    decreaseCounter()
})

function increaseCounter() {
    console.log('start')
    // Request account access from MetaMask
    window.ethereum.request({method: 'eth_requestAccounts'})
        .then((accounts) => {
            // Get the user's primary Ethereum account
            const userAddress = accounts[0];
            console.log('User address:', userAddress);

            const receipt = contract.methods.increase()
                .send({
                    from: userAddress, // sender's address (from MetaMask)
                    gas: 3000000  // you may need to adjust gas limit based on your method
                })
                .on('transactionHash', function (hash) {
                    console.log('Transaction hash:', hash);
                })
                .on('receipt', function (receipt) {
                    console.log('Transaction was mined:', receipt);
                    alert("Counter Increase Successful")
                    window.location.reload()
                })
                .on('error', function (error, receipt) {
                    console.log('Error:', error);
                    alert("Counter Increase Failed")
                });
        });
}

function decreaseCounter() {
    console.log('start')
    // Request account access from MetaMask
    window.ethereum.request({method: 'eth_requestAccounts'})
        .then((accounts) => {
            // Get the user's primary Ethereum account
            const userAddress = accounts[0];
            console.log('User address:', userAddress);

            const receipt = contract.methods.decrease()
                .send({
                    from: userAddress, // sender's address (from MetaMask)
                    gas: 3000000  // you may need to adjust gas limit based on your method
                })
                .on('transactionHash', function (hash) {
                    console.log('Transaction hash:', hash);
                })
                .on('receipt', function (receipt) {
                    console.log('Transaction was mined:', receipt);
                    alert("Counter Decrease Successful")
                    window.location.reload()
                })
                .on('error', function (error, receipt) {
                    console.log('Error:', error);
                    alert("Counter Decrease Failed")
                });
        });
}


