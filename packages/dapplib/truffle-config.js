require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth museum unknown gloom argue bridge two'; 
let testAccounts = [
"0x707efc6170df8a24d56c21972ff4b8e3c5b89666af51e7ac7130adbce165bb9b",
"0x6c5bb97b811179bd985b5c8cacbf8ea942ea2f2cc56c57dc7519193dd2048a7b",
"0xa704a0455bde4a303af09f8bb4f83b0325fc9f5a3c7a981eec0e8f04a0382b77",
"0x89601cda0951c993d18b8e6e847109d70230f24d8f851153c8670bdc6639d437",
"0x2270bfdb4e66a181bfad0c9e4c59943af9903a0759214b133077e03d0f092353",
"0x70ff827bd3cd7874461769885d024301daa4f8c7cb3c63d65ea69324feb757d9",
"0x1c536ce5330143ee93d0a0614c232c0a010510122f893f7120b006a27edee4df",
"0x48974cc2f39f0d452c231be7ef810e6ce6301dc87f79fd505652c4fcf0a12196",
"0x166a44a7dee8dc6a46d31a619636b99daff861ec305dacddc970a6230d918b49",
"0x1372e2afaac24c2e316da5aa5ba17c5e853e1a966fe9ab4c957da5633bd3f166"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
