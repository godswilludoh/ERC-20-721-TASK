// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GeedsToken is ERC20, Ownable {
    uint256 public rate = 1000;
    address public admin;

    constructor() ERC20("GeedsToken", "GTK") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(msg.sender == admin, "only admin");
        _mint(to, amount);
    }

    function buyToken(address receiver) external payable {
        require(msg.value >= 0, "You cannot mint GTK with zero ETH");

        uint256 amount = msg.value * rate;
        _mint(receiver, amount);
    }
}
