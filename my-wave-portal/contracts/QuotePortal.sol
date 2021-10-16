// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract QuotePortal {
    uint256 totalQuotes;
    uint256 private seed;
    /*
     * We will be using this below to help generate a random number
     */

    event NewQuote(address indexed from, uint256 timestamp, string message);

    struct Quote {
        address waver;
        string message;
        uint256 timestamp;
    }

    Quote[] quotes;
    /*
     * This is an address => uint mapping, meaning I can associate an address with a number!
     * In this case, I'll be string the address with the last time the user waved at us.
     */

    mapping(address => uint256) public lastQuoteWritten;

    constructor() payable {
        console.log("Holla DevAnonymous");
    }

    function writeQuote(string memory _message) public {
        /*
         * We need to make sure the current timestamp is at least 15-minute bigger than the last timestamp
         */
        require(
            lastQuoteWritten[msg.sender] + 15 seconds < block.timestamp,
            "Wait 15 seconds"
        );

        /*
         * Update the current timestamp we have for the user
         */

        lastQuoteWritten[msg.sender] = block.timestamp;

        totalQuotes += 1;
        console.log("%s writes a quote to you", msg.sender);
        /*
        Store the quote data
        */
        quotes.push(Quote(msg.sender, _message, block.timestamp));

        uint256 randomNumber = (block.difficulty + block.timestamp + seed) %
            100;
        console.log("Random # generated: %s", randomNumber);

        /*
         *  Set the generated, random number as the seed for the next quote
         */

        seed = randomNumber;
        /*
         * Give a 50% chance that the user wins the prize.
         */
        if (randomNumber < 50) {
            console.log("%s won!", msg.sender);
            /*
             * The same code we had before to send the prize.
             */
            uint256 prizeAmount = 0.0001 ether;
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
        }

        emit NewQuote(msg.sender, block.timestamp, _message);
    }

    function getAllQuotes() public view returns (Quote[] memory) {
        return quotes;
    }

    function getTotalQuotes() public view returns (uint256) {
        console.log("We have %d total quotes!", totalQuotes);
        return totalQuotes;
    }
}
