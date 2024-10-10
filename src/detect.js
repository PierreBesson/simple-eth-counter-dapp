// Code from https://docs.metamask.io/wallet/tutorials/javascript-dapp-simple/
/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/

import detectEthereumProvider from "@metamask/detect-provider"

async function setup() {
    const provider = await detectEthereumProvider()

    if (provider && provider === window.ethereum) {
        console.log("MetaMask is available!")
        startApp(provider)
    } else {
        console.log("Please install MetaMask!")
    }
}

function startApp(provider) {
    if (provider !== window.ethereum) {
        console.error("Do you have multiple wallets installed?")
    }
}

window.addEventListener("load", setup)

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

window.ethereum.on("chainChanged", handleChainChanged)

function handleChainChanged() {
    window.location.reload()
}

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

const ethereumButton = document.querySelector(".enableEthereumButton")
const showAccount = document.querySelector(".showAccount")

ethereumButton.addEventListener("click", () => {
    getAccount()
})

async function getAccount() {
    const accounts = await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .catch((err) => {
            if (err.code === 4001) {
                console.log("Please connect to MetaMask.")
            } else {
                console.error(err)
            }
        })
    const account = accounts[0]
    showAccount.innerHTML = account
}