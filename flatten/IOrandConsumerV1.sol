// Root file: contracts/interfaces/IOrandConsumerV1.sol
pragma solidity ^0.8.0;

error InvalidProvider();

interface IOrandConsumerV1 {
  // Consume the verifiable randomness from provider
  function consumeRandomness(uint256 randomness) external returns (bool);
}
