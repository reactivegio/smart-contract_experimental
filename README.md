### Prerequisite
- nodeJs
- npm or yarn 
- metamask extension chrome installed

#### If you want to work on localhost:
- Truffle installed globally 
```npm install -g truffle```
- Ganache installed globally
```npm install ganache --global```
- Lauch init to create truffle directory
```truffle init```
- Create the scaffold of the contract
```truffle create contract <YourContractName>```
- Create the scaffold test
```truffle create test <YourTestName>```
- In your solidity file don't forget to get license and supported version
```// SPDX-License-Identifier: MIT``` 
```pragma solidity >=0.4.22 <0.9.0;```
- Compile contract on truffle
```truffle compile````
- Launch ganache to create test accounts
```ganache````
- in the migration folder we can create a deploy instruction and then create a local contract with:
```truffle migrate```
- Copy the abi in the build directory related to you contract and paste in the FE abi variable.
- Compile .env with contract address get by truffle and a PRODUCT_OWNER address from ganache
REACT_APP_CONTRACT_ADDRESS="0x....."
REACT_APP_PRODUCT_ADDRESS="0x...."
- Configure metamask to work on localhost network, for localhost on truffle chainid is 1337

----
#####  If you want to work on a testnet:
- Create a testnet
- Create some account with mnemonic seed
- Configure metamask to work on test 

#####  Start react on your machine from client directory
```yarn install```
then
```yarn start```

###End