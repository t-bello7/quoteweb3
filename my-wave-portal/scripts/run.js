const main = async () => {
    const quoteContractFactory = await hre.ethers.getContractFactory('QuotePortal');
    const quoteContract = await quoteContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1'),
    });
    await quoteContract.deployed();

    console.log("Contract deployed to:", quoteContract.address);
    // console.log("Contract deployed by:", owner.address);


    // get Contract Balance
    let contractBalance = await hre.ethers.provider.getBalance(
        quoteContract.address
    );

    console.log('Initial Contract Balance:',hre.ethers.utils.formatEther(contractBalance));
    // Get total number of quotes
    let quoteCount;
   
    /**
     * Let's write a quote
     */

    let quoteTxn = await quoteContract.writeQuote('A message by I think me')
    await quoteTxn.wait();


    const [_, randomPerson] = await hre.ethers.getSigners();
    quoteTxn = await quoteContract.connect(randomPerson).writeQuote('Another mesage by random person');
    await quoteTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(
        quoteContract.address
    )
    console.log('Final Contract Balance:',hre.ethers.utils.formatEther(contractBalance));

    let allWaves = await quoteContract.getAllQuotes();

    // console.log(allWaves)
    quoteCount = await quoteContract.getTotalQuotes();
    // console.log(quoteCount.toNumber());
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();