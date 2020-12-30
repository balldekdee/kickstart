import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x54a26040C192704993398E0bC91ACB9F0de5D185"
);

export default instance;
