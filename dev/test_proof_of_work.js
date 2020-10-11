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

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 60618));