/* eslint-disable no-await-in-loop */
import '@nomicfoundation/hardhat-ethers';
import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Deployer } from '../helpers';
import { DiceGame, OrocleV1, OrandECVRFV2, OrandProviderV2 } from '../typechain-types';
import { env } from '../env';
import { getAddress, keccak256 } from 'ethers';

const affineToNumberish = (affine: string): [string, string] => {
  const aff = affine.trim().replace(/^0x/gi, '').padStart(128, '0');
  return [`0x${aff.substring(0, 64)}`, `0x${aff.substring(64, 128)}`];
};

const publicKeyToNumberish = (pubkey: string): [string, string] => {
  const aff = pubkey.trim().replace(/^0x/gi, '').padStart(130, '0').substring(2, 130);
  return affineToNumberish(aff);
};

function numberToBytes(input: number | bigint, bits: number) {
  return input.toString(16).padStart((bits / 8) * 2, '0');
}

function stringToBytes(input: string, length: number) {
  return Buffer.from(input)
    .toString('hex')
    .padEnd(length * 2, '0');
}

const TESTNET_OPERATOR = ['0x22d5418e846bDf01EeD373f879Ee43283b061402', '0x8b8626544A03986fAB5134888c031CB61CC76680'];

task('deploy:orochi', 'Deploy Orochi Network contracts').setAction(
  async (_taskArgs: any, hre: HardhatRuntimeEnvironment) => {
    let pk = env.OROCHI_PUBLIC_KEY.replace(/^0x/gi, '').trim();
    let correspondingAddress = getAddress(`0x${keccak256(`0x${pk.substring(2, 130)}`).substring(26, 66)}`);
    // Setup deployer
    const accounts = await hre.ethers.getSigners();
    const deployer: Deployer = Deployer.getInstance(hre).connect(accounts[0]);
    // Deploy ECVRF
    const orandECVRF = await deployer.contractDeploy<OrandECVRFV2>('OrandV2/OrandECVRFV2', []);
    // Deploy Orocle
    const OrocleV1 = await deployer.contractDeploy<OrocleV1>('OrocleV1/OrocleV1', [], TESTNET_OPERATOR);

    /*
      constructor(
        uint256[2] memory publicKey,
        address operator,
        address ecvrfAddress,
        address oracleAddress,
        uint256 maxBatchingLimit
      )
    */
    // Deploy Provider
    const orandProviderV2 = await deployer.contractDeploy<OrandProviderV2>(
      'OrandV2/OrandProviderV2',
      [],
      // We going to skip 0x04 -> Pubkey format from libsecp256k1
      publicKeyToNumberish(pk),
      correspondingAddress,
      orandECVRF,
      OrocleV1,
      200,
    );
    //await deployer.contractDeploy<DiceGame>('examples/DiceGame', [], orandProviderV2);

    console.log(
      `Corresponding address: ${correspondingAddress} , is valid publicKey?:`,
      correspondingAddress === (await orandProviderV2.getOperator()),
    );

    await OrocleV1.transferOwnership('0xCa484B766085992584af778F61579bB29EcE0BC4');
    await orandProviderV2.transferOwnership('0xCa484B766085992584af778F61579bB29EcE0BC4');

    await deployer.printReport();
  },
);

export default {};
