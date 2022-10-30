const Refundbylocation = artifacts.require("Refundbylocation");

module.exports = function (deployer,network, accounts) {
  deployer.deploy(Refundbylocation , [accounts[0],accounts[1]]);
};