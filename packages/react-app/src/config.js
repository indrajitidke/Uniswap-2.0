import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x6d732DEcB72e5B24a291aFad7fa21faB7Ffa2b1C"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/y8TJLu3Fvp5asRZR_HR__q-g0v_LWNAI",
  },
};

