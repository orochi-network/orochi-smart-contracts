// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../orand-v2/interfaces/IOrandConsumerV2.sol';

error WrongGuessingValue(uint128 guessing);

// Application should be an implement of IOrandConsumerV1 interface
contract DiceGame is IOrandConsumerV2, Ownable {
  // Set new provider
  event SetProvider(address indexed oldProvider, address indexed newProvider);

  // Fulfill awaiting result
  event Fulfilled(uint256 indexed gameId, uint256 guessed, uint256 indexed result);

  // New guess from player
  event NewGuess(address indexed player, uint256 indexed gameId, uint128 indexed guessed);

  // Game structure
  struct Game {
    uint128 guessed;
    uint128 result;
  }

  // Provider address
  address private orandProvider;

  // Game result storage
  mapping(uint256 => Game) private gameResult;

  // Total game
  uint256 private totalGame;

  // Fulfiled randomness
  uint256 private fulfilled;

  // We batching the radomness in one epoch
  uint256 private maximumBatching;

  // Only allow Orand to submit result
  modifier onlyOrandProvider() {
    if (msg.sender != orandProvider) {
      revert InvalidProvider();
    }
    _;
  }

  // Constructor
  constructor(address provider) {
    _setProvider(provider);
  }

  //=======================[  Internal  ]====================

  // Set provider
  function _setProvider(address provider) internal {
    emit SetProvider(orandProvider, provider);
    orandProvider = provider;
  }

  // Set provider
  function _getProvider() internal view returns (address) {
    return orandProvider;
  }

  //=======================[  Owner  ]====================

  // Set provider
  function setProvider(address provider) external onlyOwner returns (bool) {
    _setProvider(provider);
    return true;
  }

  //=======================[  OrandProviderV1  ]====================

  // Consume the result of Orand V1 with batching feature
  function consumeRandomness(uint256 randomness) external override onlyOrandProvider returns (bool) {
    // We keep batching < maximumBatching
    if (fulfilled < totalGame) {
      Game memory currentGame = gameResult[fulfilled];
      currentGame.result = uint128((randomness % 6) + 1);
      gameResult[fulfilled] = currentGame;
      emit Fulfilled(fulfilled, currentGame.guessed, currentGame.result);
      fulfilled += 1;
      return true;
    }
    return false;
  }

  //=======================[  External  ]====================

  // Player can guessing any number in range of 1-6
  function guessingDiceNumber(uint128 guessing) external returns (bool) {
    // Player only able to guessing between 1-6 since it's dice number
    if (guessing < 1 || guessing > 6) {
      revert WrongGuessingValue(guessing);
    }
    gameResult[totalGame] = Game({ guessed: guessing, result: 0 });
    emit NewGuess(msg.sender, totalGame, guessing);
    totalGame += 1;
    return true;
  }

  //=======================[  External View  ]====================

  // Get result from smart contract
  function getResult(uint256 gameId) external view returns (Game memory result) {
    return gameResult[gameId];
  }

  function getStateOfGame() external view returns (uint256 fulfill, uint256 total) {
    return (fulfilled, totalGame);
  }
}
