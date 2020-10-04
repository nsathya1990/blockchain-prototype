const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, '0INA90SDNF90N', '90ANSD9F0N9009N');
bitcoin.createNewBlock(111, '0INJHDNLF90N', 'ANSD9F0N90KHG');
bitcoin.createNewBlock(2899, 'UINKSSSDNF90N', 'IJBBKJHD9F0N9009N');

console.log(bitcoin);