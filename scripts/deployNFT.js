require('@nomiclabs/hardhat-ethers');
async function main() {
	const [deployer] = await ethers.getSigners();

	console.log('Deploying contracts with the account: ', deployer.address);
	console.log('Account balance: ', (await deployer.getBalance()).toString());

	const Token = await ethers.getContractFactory('GeedsNFT');
	const token = await Token.deploy();
	await token.deployed();

	console.log('Minting first NFT');
	await token.safeMint(
		deployer.address,
		'ipfs://bafkreigejbgck7mg3ca3whdjmdm2ha3xy3zw3h7higr6uijcopdmg5fxli'
	);

	console.log('Minting second NFT');
	await token.safeMint(
		deployer.address,
		'ipfs://bafkreigz25trynqdks33ec2vssysgwuxakxrkrdnc3opl4ojsxykqewcwi'
	);

	console.log(await token.balanceOf(deployer.address));

	console.log('Token address: ', token.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
