const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1609440956083,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1609441109140,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1609441461555,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "d03f70304b9911ebb17c2b18d995fc7c",
                    "transactionId": "2bd10ee04b9a11ebb17c2b18d995fc7c"
                },
                {
                    "amount": 10,
                    "sender": "WERTRHSDJHAJKJDGJHHVLJ",
                    "recipient": "NDJGFKJOJDJBKJDBKJDBKJKMN",
                    "transactionId": "afb084c04b9a11ebb17c2b18d995fc7c"
                },
                {
                    "amount": 5,
                    "sender": "HJYTWERTRHSDJHAJKJDGJHHVLJ",
                    "recipient": "DHGENDJGFKJOJDJBKJDBKJDBKJKMN",
                    "transactionId": "c23df8204b9a11ebb17c2b18d995fc7c"
                },
                {
                    "amount": 30,
                    "sender": "HJYTWERTRHSDJHAJKJDGJHHVLJ",
                    "recipient": "DHGENDJGFKJOJDJBKJDBKJDBKJKMN",
                    "transactionId": "dbe385604b9a11ebb17c2b18d995fc7c"
                }
            ],
            "nonce": 15532,
            "hash": "0000b9e2c68ec1187ca8268274da3fafa88fce7c2e774e94844fa869d555eacc",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1609441595374,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "d03f70304b9911ebb17c2b18d995fc7c",
                    "transactionId": "fd88cd604b9a11ebb17c2b18d995fc7c"
                },
                {
                    "amount": 40,
                    "sender": "HJYTWERTRHSDJHAJKJDGJHHVLJ",
                    "recipient": "DHGENDJGFKJOJDJBKJDBKJDBKJKMN",
                    "transactionId": "2b6670c04b9b11ebb17c2b18d995fc7c"
                },
                {
                    "amount": 50,
                    "sender": "HJYTWERTRHSDJHAJKJDGJHHVLJ",
                    "recipient": "DHGENDJGFKJOJDJBKJDBKJDBKJKMN",
                    "transactionId": "2eb06ba04b9b11ebb17c2b18d995fc7c"
                },
                {
                    "amount": 60,
                    "sender": "HJYTWERTRHSDJHAJKJDGJHHVLJ",
                    "recipient": "DHGENDJGFKJOJDJBKJDBKJDBKJKMN",
                    "transactionId": "4056b3504b9b11ebb17c2b18d995fc7c"
                },
                {
                    "amount": 70,
                    "sender": "HJYTWERTRHSDJHAJKJDGJHHVLJ",
                    "recipient": "DHGENDJGFKJOJDJBKJDBKJDBKJKMN",
                    "transactionId": "46a1e0404b9b11ebb17c2b18d995fc7c"
                }
            ],
            "nonce": 60305,
            "hash": "00001dcbfe621191b14d48956525e0bdae930d30ae35397cca8610de8054be7f",
            "previousBlockHash": "0000b9e2c68ec1187ca8268274da3fafa88fce7c2e774e94844fa869d555eacc"
        },
        {
            "index": 5,
            "timestamp": 1609441638198,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "d03f70304b9911ebb17c2b18d995fc7c",
                    "transactionId": "4d4bcf004b9b11ebb17c2b18d995fc7c"
                }
            ],
            "nonce": 1821,
            "hash": "000098fe51aca3afbf6a02a506cd9b3dcbf4bc80c4699b90d8fa141e99ce17d7",
            "previousBlockHash": "00001dcbfe621191b14d48956525e0bdae930d30ae35397cca8610de8054be7f"
        },
        {
            "index": 6,
            "timestamp": 1609441642588,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "d03f70304b9911ebb17c2b18d995fc7c",
                    "transactionId": "66d2b0b04b9b11ebb17c2b18d995fc7c"
                }
            ],
            "nonce": 20199,
            "hash": "000047cc03175d07641abd64b1ca874af9618d30c486573a74c6b9943d480fbb",
            "previousBlockHash": "000098fe51aca3afbf6a02a506cd9b3dcbf4bc80c4699b90d8fa141e99ce17d7"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "d03f70304b9911ebb17c2b18d995fc7c",
            "transactionId": "697017e04b9b11ebb17c2b18d995fc7c"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));