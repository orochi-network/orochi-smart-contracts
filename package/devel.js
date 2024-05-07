const fs = require('fs');
const path = require('path');

function readJson(filename) {
  return JSON.parse(fs.readFileSync(filename).toString());
}

function writeJson(filename, obj) {
  return fs.writeFileSync(filename, JSON.stringify(obj, null, '  '));
}

const mPackage = readJson('./package.json');

function incVersion(v) {
  let [major, minor, patch] = v.split('.').map((e) => parseInt(e, 10));
  patch++;
  if (patch > 100) {
    patch = 0;
    minor++;
  }
  if (minor > 100) {
    minor = 0;
    major++;
  }
  return [major, minor, patch].join('.');
}

function cp(src, dst) {
  if (fs.existsSync(dst)) {
    fs.unlinkSync(dst);
  }
  fs.copyFileSync(src, dst);
}

const tsFileList = [];
const typesList = [];

function cpAbi(src, dst) {
  if (fs.existsSync(dst)) {
    fs.unlinkSync(dst);
  }
  const { abi } = readJson(src);
  tsFileList.push(dst);
  fs.writeFileSync(dst, `export const ${path.basename(dst, '.ts')} = ${JSON.stringify(abi, null, '  ')};`);
}

function cpTypes(src, dst) {
  if (fs.existsSync(dst)) {
    fs.unlinkSync(dst);
  }
  const content = fs.readFileSync(src).toString();
  typesList.push(dst);
  fs.writeFileSync(
    dst,
    content
      .replace('from "../../common";', 'from "./common";')
      .replace('from "../../../common";', 'from "./common";')
      .replace('from "../../../../common";', 'from "./common";'),
  );
}

cp('../typechain-types/common.ts', './src/common.ts');
cp('../contracts/orand-v2/interfaces/IOrandConsumerV2.sol', './IOrandConsumerV2.sol');
cp('../contracts/orocle-v1/interfaces/IOrocleAggregatorV1.sol', './IOrocleAggregatorV1.sol');

cpAbi('../artifacts/contracts/orosign/OrosignMasterV1.sol/OrosignMasterV1.json', './src/AbiOrosignMasterV1.ts');
cpAbi('../artifacts/contracts/orosign/OrosignV1.sol/OrosignV1.json', './src/AbiOrosignV1.ts');
cpAbi('../artifacts/contracts/multicast/MultiCast.sol/Multicast.json', './src/AbiMulticast.ts');
cpAbi('../artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json', './src/AbiERC20.ts');
cpAbi('../artifacts/@openzeppelin/contracts/token/ERC721/ERC721.sol/ERC721.json', './src/AbiERC721.ts');

cpTypes('../typechain-types/contracts/orosign/OrosignMasterV1.ts', './src/OrosignMasterV1.ts');
cpTypes('../typechain-types/contracts/orosign/OrosignV1.ts', './src/OrosignV1.ts');
cpTypes('../typechain-types/contracts/multicast/MultiCast.sol/Multicast.ts', './src/Multicast.ts');
cpTypes('../typechain-types/@openzeppelin/contracts/token/ERC20/ERC20.ts', './src/ERC20.ts');
cpTypes('../typechain-types/@openzeppelin/contracts/token/ERC721/ERC721.ts', './src/ERC721.ts');

fs.writeFileSync(
  './src/index.ts',
  [
    typesList
      .map((e) => `export { ${path.basename(e, '.ts')} } from '${e.replace('.ts', '').replace('./src/', './')}';`)
      .join('\n'),
    tsFileList.map((e) => `export * from '${e.replace('.ts', '').replace('./src/', './')}';`).join('\n'),
  ].join('\n'),
);

//mPackage.version = incVersion(mPackage.version);

writeJson('package.json', mPackage);
