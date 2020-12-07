const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, '0IERTFCJDKE', 'ERTRFJFJDJKD');
bitcoin.createNewBlock(2389, '0IERTFCWDKE', 'ERTRFJFJDJKJ');
bitcoin.createNewBlock(2389, '0IERTFCSDKE', 'ERTRFJFJDJKL');
console.log(bitcoin);
