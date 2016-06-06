## Repo to verify SampleOffer.sol from slock.it

###First clone the Repo or run `get.sh`
1. Clone Offer `git clone https://github.com/slockit/smart-contract` 
2. Clone DAO `git clone https://github.com/slockit/DAO`
3. `cd DAO`
4. change to deployed version `git checkout v1.0` 
5. `cd ..`

###Then run the verify script
start geth with rpc 
`geth --rpc console 2>> out.txt`
run the node script to verify against the given transaction
`nodejs --stack-size=64000 verify.js`

###Installing Required Modules
`npm install crypto`
`npm install solc`
`npm install web3` 
