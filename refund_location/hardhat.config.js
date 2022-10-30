require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/mTqKDgkJW6to-0hQpZ9irfemd9WvJTvv',
      accounts: ['0x423cdf9e217ccadae24c0fde562ac8a897a177b8'],
      allowUnlimitedContractSize: true
    },
  },
};