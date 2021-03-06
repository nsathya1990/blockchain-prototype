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
