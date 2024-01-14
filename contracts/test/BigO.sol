// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.19;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

// An ambition is hiding in the bush
contract BigO is ERC20 {
  constructor() ERC20('TestBigO', 'TestO') {
    _mint(tx.origin, 1000000000000 * (10 ** decimals()));
  }
}
