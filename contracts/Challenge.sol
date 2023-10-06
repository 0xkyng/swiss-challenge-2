// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Challenge {
    string private challenge;

    constructor(string memory _challenge) {
        challenge = _challenge;
    }

    function setNewChallenge(string memory _newChallenge) external {
        require(keccak256(abi.encodePacked(challenge)) !=
            keccak256(abi.encodePacked(_newChallenge)), "Challenge already exists");
        challenge = _newChallenge;
    }

    function getChallenge() external view returns (string memory) {
        return challenge;
    }
}
