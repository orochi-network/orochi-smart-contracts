/* eslint-disable no-await-in-loop */
import '@nomicfoundation/hardhat-ethers';
import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Deployer } from '../helpers';
import { GameContractFactory } from '../typechain-types';
import { getWallet } from '../helpers/wallet';

task('deploy:gameContractFactory', 'Deploy game contracts factory').setAction(
  async (_taskArgs: any, hre: HardhatRuntimeEnvironment) => {
    const { chainId } = await hre.ethers.provider.getNetwork();
    const account = await getWallet(hre, chainId);
    const deployer: Deployer = Deployer.getInstance(hre).connect(account);
    await deployer.contractDeploy<GameContractFactory>(
      'GameContract/GameContractFactory',
      [],
      '0xF62DAF9320fa54A51977F166FD9B7e0a2C993F61' //implement
    );
    await deployer.printReport();
  },
);

export default {};
