
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint public count;
    address public owner;

    constructor(uint256 answer) payable {
      require(msg.value >= 0.1 ether);
      require(10 - answer == 3);
      owner = msg.sender;
    }

    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public {
        // This function will fail if count = 0
        count -= 1;
    }
}