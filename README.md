# ERC-20 AND ERC-721 Hardhat Project

This project implements a standard ERC20 token with a fixed total supply of 1,000,000 tokens. A payable function "buyToken" was added which accepts an ethereum address, "receiver" as a parameter, and then increments the token balance of the receiver with bought tokens. The GeedsToken.sol contract contains the solidity contract and deploy script for the ERC-20 token.
The second part of the project is a created ERC721 token. The token metadata was stored onchain and the image in each metadata was hosted on IPFS.

ERC-20
CONTRACT_ADDRESS = "0x7763a54eD15027be7C5160fba94B6C55Ab67FBd6"
ETHERSCAN ADDRESS = "https://ropsten.etherscan.io/address/0x7763a54eD15027be7C5160fba94B6C55Ab67FBd6#code"

ERC-721
Token Address = "0x0E00acA89498745BD633a80cd02Be39433D4d9B1"

Metadata: {
"name": "GeedsNFT",
"description": "GeedsNFT first collection, super cool!",
"image":"ipfs://bafybeic63iwghoj3tdimrwzown7sv6w5sh7laikkdriskc5uqejtmxmr4a",
"properties":[{
"trait_type": "cool dev looks",
"value": "100"
}]

{
"name": "GeedsNFT",
"description": "GeedsNFT first collection, super cool!",
"image":"ipfs://bafkreibdwo4lwhtqbkyj6jxx66u2skrtay7csk3tkljic7lbf4qefxn2ki",
"properties":[{
"trait_type": "finesse dev looks",
"value": "200"
}]
}

}

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
