// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Counter {
    uint public count;

    function increase() public {
        count++;
    }
    function decrease() public {
        count--;
    }
}