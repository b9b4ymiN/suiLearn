import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui.js/faucet";
import { MIST_PER_SUI } from "@mysten/sui.js/utils";

const goTest = async () => {
  // replace <YOUR_SUI_ADDRESS> with your actual address, which is in the form 0x123...
  const MY_ADDRESS =
    "0xe36bb158ba8bdfa803862d132a786e599e0bd285ae3f7a1d44c7f8b5859bb767";

  // create a new SuiClient object pointing to the network you want to use
  const suiClient = new SuiClient({ url: getFullnodeUrl("mainnet") });

  // store the JSON representation for the SUI the address owns before using faucet
  const suiBefore = await suiClient.getBalance({
    owner: MY_ADDRESS,
  });
  /*
await requestSuiFromFaucetV0({
  // use getFaucetHost to make sure you're using correct faucet address
  // you can also just use the address (see Sui TypeScript SDK Quick Start for values)
  host: getFaucetHost("devnet"),
  recipient: MY_ADDRESS,
});
*/

  // Output result to console.
  console.log(
    `Balance before : ${parseInt(suiBefore.totalBalance) / 1000000000} SUI. `
  );
};

goTest();
