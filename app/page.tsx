"use client";
import React, { useState } from "react";
import { Flyover } from "@rsksmart/flyover-sdk";
import { BlockchainConnection } from "@rsksmart/bridges-core-sdk";
import { RSK_TESTNET_NODES } from "./utils/constants";

export default function Home() {
  const [rskConnection, setRskConnection] = useState<BlockchainConnection | null>(null);

  const handleButtonClick = async () => {
    // Check if window.ethereum is available
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        // Establish blockchain connection
        const rpcUrl = RSK_TESTNET_NODES[0];
        const rsk = await BlockchainConnection.createUsingStandard(window.ethereum);
        console.log("Blockchain connection established:", rsk);
        setRskConnection(rsk);

        const walletAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS;

        // Initialize Flyover SDK
        const flyover = new Flyover({
          network: "Testnet",
          rskConnection: rskConnection as any,
          captchaTokenResolver: async () =>
            Promise.resolve(''),
        });

        console.log("Flyover connected to Rootstock Testnet successfully");

        // Fetch and use liquidity providers
        const providers = await flyover.getLiquidityProviders();
        console.log("Liquidity Providers:", providers);

        // if (!providers || providers.length === 0) {
        //   console.error("No liquidity providers available.");
        //   return;
        // }

        // // Use the first available liquidity provider
        // const selectedProvider = providers[0];
        // flyover.useLiquidityProvider(selectedProvider);
        // console.log("Using liquidity provider:", selectedProvider);

        // // Define the PeginQuoteRequest
        // const quoteRequest = {
        //   callContractArguments: "",
        //   callEoaOrContractAddress: walletAddress,
        //   rskRefundAddress: walletAddress,
        //   valueToTransfer: BigInt("5000000000000000"),
        // };

        // // Request quotes
        // const quotes = await flyover.getQuotes(quoteRequest as any);

        // if (quotes.length === 0) {
        //   console.error("No quotes available.");
        //   return;
        // }

        // // Accept the first quote
        // const acceptedQuote = await flyover.acceptQuote(quotes[0]);
        // console.log("Accepted Quote:", acceptedQuote);
      } catch (error) {
        console.error("Error during execution:", error);
      }
    } else {
      console.error(
        "window.ethereum is not available. Please install MetaMask or another Ethereum provider."
      );
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Request Mint RBTC
        </button>
      </main>
    </div>
  );
}
