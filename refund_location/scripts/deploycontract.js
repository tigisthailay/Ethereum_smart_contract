const Refund = artifacts.require("refundbylocation.sol");

module.exports = function(deployer) {
 deployer.deploy(Refund);
};