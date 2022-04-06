require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind history inflict argue obscure sudden'; 
let testAccounts = [
"0xf2a362b28dae581840d45117b0107a35d6b3bf5094bd1dc79fbc039c369bc6af",
"0x8db87c0f8ed75afdc1f04fb3eaf385d1b72963c6b89baa20827920485456496e",
"0xa97a3d8d19d862a1d3325f09832e7b17592169e7d54e0120ea00679a8b9947be",
"0x411ab9ed39d73a92d741ace89ee127f9ca5248444dc74fd33e676bf095ba6e4e",
"0xb1f985b31aeb9afd52cffc67836785e3e93519286de09e26e23f51d4ad983d1b",
"0x0fa143bb151ac6148479aa561dd89854fd70fda7691b398ad74dfac286d04734",
"0x1259f3bc264fc7dc48c936b5771b49645a638d7cffee38ec4520c59838c55ee5",
"0xb511654ca3fb1b650cea3152b940e3bde448cbceb3e59533daf1af839d6fa4e3",
"0x75c478ccf9a95e569a166d255b2849531e96a21d6f0ea31e7f4653ab41942f0d",
"0xcb00aa5f7d3c774aaf6d036055272a253ea5bd5d4889cfe9e709b7fb4e862b00"
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
            version: '^0.8.0'
        }
    }
};

