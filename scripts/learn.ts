import { ethers } from "hardhat";
const { ethers } = require('hardhat');

async function main () {
	const HelloworldContractFactory = await ethers.getContractFactory("Helloworld");
	const HelloworldContract = await HelloworldContractFactory.deploy();
	/*const tx = await HelloworldContract.store(ethers.encodeBytes32String("Hello world!"));
	await tx.wait();*/
	const retriveText = await HelloworldContract.helloWorld();
	console.log(`The text retrived from the contract is: `);
	console.log(retriveText);
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
})