/* eslint-disable no-await-in-loop */
import '@nomicfoundation/hardhat-ethers';
import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { getWallet } from '../helpers/wallet';
import { GameContractFactory } from '../typechain-types';

const CONTRACT_ADDRESS = '0x670745115C4a40215685CD2B3B6563437d792793';

task('transferOwnership:gameContractFactory', 'Transfer ownership to owner contract Factory').setAction(async (_, hre: HardhatRuntimeEnvironment) => {
  const OwnerAddress = '0x73100880b1B6F0De121CAc27C418BF77183e3768';
  const { chainId } = await hre.ethers.provider.getNetwork();
  const account = await getWallet(hre, chainId);
  const contract = (await hre.ethers.getContractAt('GameContractFactory', CONTRACT_ADDRESS, account)) as GameContractFactory;
  const tx = await contract.transferOwnership(OwnerAddress);
  console.log('Successfully transfer ownership to ',OwnerAddress ,' : ', tx.hash);
});

export default {};