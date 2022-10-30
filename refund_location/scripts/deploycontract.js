const main = async () => {
  const locationFactory = await hre.ethers.getContractFactory("Employer");
  const locationContract = await locationFactory.deploy();

  await locationContract.deployed();

  console.log("Transactions deployed to: ", locationContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();