// SPDX-License-Identifier: GPL-3.0


pragma solidity >=0.8.2 <0.9.0;


contract HelloWorld {
	address public owner;
    bytes32 private text;

	constructor() {
		text = "Hello World!";
		owner = msg.sender;
	}

	function helloWorld() public view returns(bytes32) {
		return text;
	}

    /*function retrieve() public view returns (bytes32){
        return text;
    }*/
}
