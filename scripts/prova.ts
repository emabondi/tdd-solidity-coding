const { ethers } = require('hardhat');

async function main() {
  const contractAddress = '0xYOUR_CONTRACT_ADDRESS';
  const Contract = await ethers.getContractFactory('HelloWorld');
  const contract = await Contract.attach(contractAddress);

  const helloBytes32 = await contract.getString();
  const helloString = ethers.utils.toUtf8String(helloBytes32);

  console.log(helloString); // Output: "Hello, World!"
}

main();