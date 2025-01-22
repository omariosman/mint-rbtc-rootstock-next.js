# rBTC Mint/Redeem Example

This is a TypeScript project that uses the [Rootstock](https://dev.rootstock.io/developers/integrate/flyover/sdk/) Bitcoin/Ethereum bridge to mint and redeem rBTC tokens.

This repository demonstrates an example workflow to mint and redeem rBTC tokens.

## How to Use the Repo?

### 1. Clone/Fork the Repository
```bash
git clone git@github.com:omariosman/mint-rbtc-rootstock.git
```
### 2. Install Dependencies
```
npm install
```

### Minting rBTC 
1. Add a `.env` file with the following value:
```
NEXT_PUBLIC_MNEMONIC_PHRASE=<rootstock-recovery-phrase>
NEXT_PUBLIC_PRIVATE_KEY=<your-rootstock-private-key>
NEXT_PUBLIC_WALLET_ADDRESS=<your-rootstock-public-address>
```

1. Run the `src/index.ts` script using this command
```
npm run rbtc
```


### Redeeming rBTC (Get your BTC back)
