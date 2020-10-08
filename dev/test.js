const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = '01KDHJKBCJKSFFKJSH';
const currentBlockData = [{
    amount: 10,
    sender: 'NSKNDJKBJKBFK',
    recipient: 'SKNJFBJKFBKJFB'
}, {
    amount: 30,
    sender: 'DKJDBJKDJKBJKBFK',
    recipient: 'SBDLIDIBJKFBKJFB'
}, {
    amount: 200,
    sender: 'HEIEUEKBJKBFK',
    recipient: 'SBSJKJKFBKJFB'
}];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

/* bitcoin.createNewBlock(2389, '0INA90SDNF90N', '90ANSD9F0N9009N');

bitcoin.createNewTransaction(100, 'SATH89AHJGHJVFJFV', 'VICKNMUJKJDDIUDWQAXK');

bitcoin.createNewBlock(123123, '09JKBSJKFJKBF', 'BDKJBFWFFV');

bitcoin.createNewTransaction(50, 'SATH89AHJGHJVFJFV', 'VICKNMUJKJDDIUDWQAXK');
bitcoin.createNewTransaction(300, 'SATH89AHJGHJVFJFV', 'VICKNMUJKJDDIUDWQAXK');
bitcoin.createNewTransaction(2000, 'SATH89AHJGHJVFJFV', 'VICKNMUJKJDDIUDWQAXK');

bitcoin.createNewBlock(98709087, 'AJHJKDGHJHD', 'IOYSKLSGHV');

console.log(bitcoin.chain[2]); */