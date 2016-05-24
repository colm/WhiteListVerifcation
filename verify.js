//verify SamppleOFfer
var crypto = require('crypto');
var fs= require('fs');
var solc = require('solc');
var web3 = require('web3');
var web3 = new web3;
params = "000000000000000000000000b01dbddfef8dedb28efbaf2b4f68acb19d520ed7000000000000000000000000159fe90ac850c895e4fd144e705923cfa042d97400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004563918244f400000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000";
web3.setProvider(new web3.providers.HttpProvider('http://localhost:1050'));

var input = {
   'SampleOffer.sol' : fs.readFileSync('./DAO/SampleOffer.sol', 'utf8'),
   'Token.sol' : fs.readFileSync('DAO/Token.sol', 'utf8'),
   'TokenCreation.sol' : fs.readFileSync('DAO/TokenCreation.sol', 'utf8'),
   'ManagedAccount.sol' : fs.readFileSync('DAO/ManagedAccount.sol', 'utf8'),
   'DAO.sol' : fs.readFileSync('DAO/DAO.sol', 'utf8')
};

output = solc.compile({sources: input}, 1);
hash = crypto.createHash('sha256').update(output.contracts.SampleOffer.bytecode).digest('hex');
code = output.contracts.SampleOffer.bytecode;

trans = web3.eth.getTransaction("0xc18f28fffdc2f9d6a6fa73eb05e309ac0a321fa3be7deef7abcc24d00c1e4293");

console.log(crypto.createHash('sha256').update(output.contracts.SampleOffer.bytecode + params).digest('hex'));
console.log(crypto.createHash('sha256').update(trans.input).digest('hex'));
