module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas:6000000
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby network id
      gas:6000000,
      from:"0x666aaac09ba3a5526ecbcb3007f57ee791be17eb"
    },
    mainnet:{
      host: "localhost",
      port: 8545,
      network_id: "1", // Rinkeby network id
      gas:6000000,
      from:"0x51e34b6b88f8d5934ee354b0aca0fda33a2b75f9"
    }
  }
};