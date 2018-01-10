var GoldPhoenixToken = artifacts.require("./GoldPhoenixToken.sol");

module.exports = function(deployer) {
  deployer.deploy(GoldPhoenixToken);
};
