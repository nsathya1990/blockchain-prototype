const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OIHJDIJGDIID', '90KJH#KKJDBK');
bitcoin.createNewTransaction(100, 'SATHYAKNDLND', 'VIVEBJKDH#KKJDBK');

bitcoin.createNewBlock(2389, 'PORTGHBGDFE', 'IUERTWBJFKF');
console.log(bitcoin);
console.log(bitcoin.chain[2]);