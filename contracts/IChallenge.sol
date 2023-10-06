// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

interface ISetChallenge {
    function setNewChallenge(string memory _newChallenge) external;

    function getChallenge() external view returns (string memory);
}
