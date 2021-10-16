const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    
    console.log('Deploying contracts with account: ', deployer.address);
    console.log('Account Balance: ', accountBalance.toString());

    const Token = await hre.ethers.getContractFactory('QuotePortal');
    const portal = await Token.deploy(
        // fund the contract
        {value: hre.ethers.utils.parseEther('0.001'),}
    );
    await portal.deployed();
    console.log('QuotesPortal address: ', portal.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error){
        console.log(error);
        process.exit(1);
    }
}

runMain();