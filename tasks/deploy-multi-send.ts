/* eslint-disable no-await-in-loop */
import '@nomicfoundation/hardhat-ethers';
import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Deployer } from '../helpers';
import { MultiSend } from '../typechain-types';
import { getWallet } from '../helpers/wallet';

task('deploy:MultiSend', 'Deploy multiple send contract').setAction(
  async (_taskArgs: any, hre: HardhatRuntimeEnvironment) => {
    const { chainId } = await hre.ethers.provider.getNetwork();
    const account = await getWallet(hre, chainId);
    const deployer: Deployer = Deployer.getInstance(hre).connect(account);
    await deployer.contractDeploy<MultiSend>(
      'MultiSend/MultiSend',
      [],
    );
    await deployer.printReport();
  },
);

export default {};
