/* eslint-disable no-await-in-loop */
import '@nomicfoundation/hardhat-ethers';
import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { getWallet } from '../helpers/wallet';

task('get:account', 'Get list of accounts').setAction(async (_taskArgs: any, hre: HardhatRuntimeEnvironment) => {
  const chains = [
    1n,
    56n,
    888888888n,
    39n,
    97n,
    2484n,
    195n,
    810181n,
    421614n,
    9372n,
    48899n,
    43851n,
    713715n,
    28122024n,
    810181n,
  ];
  for (let i = 0; i < chains.length; i += 1) {
    getWallet(hre, chains[i]);
  }
});

export default {};
