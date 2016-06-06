//verify SampleOFfer
var crypto = require('crypto');
var fs= require('fs');
var solc = require('solc');
var web3 = require('web3');
var web3 = new web3;


params = "000000000000000000000000a86adee19aab415cb31363f2390ab6e5e8acd682000000000000000000000000bb9bc244d798123fde783fcc1c72d3bb8c1894137c700cc79418d7578a9fe35e43b0b79830c645b122489113ab93658f3df571880000000000000000000000000000000000000000000001b1ae4d6e2ef500000000000000000000000000000000000000000000000000005677125153ec0c0000000000000000000000000000000000000000000000000000f2dc7d47f1560000";
transaction = "0x8a2f0f277b79c46e8b718a49ed60bbc169c72799b5db35efebb0f8eea2e7a58f"

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var input = {
   'DAOSecurity.sol' : fs.readFileSync('smart-contract/DAOSecurity.sol', 'utf8'),
   'DAO/Token.sol' : fs.readFileSync('DAO/Token.sol', 'utf8'),
   'DAO/TokenCreation.sol' : fs.readFileSync('DAO/TokenCreation.sol', 'utf8'),
   'DAO/ManagedAccount.sol' : fs.readFileSync('DAO/ManagedAccount.sol', 'utf8'),
   'DAO/DAO.sol' : fs.readFileSync('DAO/DAO.sol', 'utf8')
};

output = solc.compile({sources: input}, 1);

hash = crypto.createHash('sha256').update(output.contracts.DAOSecurity.bytecode).digest('hex');
code = output.contracts.DAOSecurity.bytecode;
trans = web3.eth.getTransaction(transaction);

console.log(crypto.createHash('sha256').update("0x"+output.contracts.DAOSecurity.bytecode + params).digest('hex'));
console.log(crypto.createHash('sha256').update(trans.input).digest('hex'));
