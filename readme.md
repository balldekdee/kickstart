# Kickstart

A crowdfunding web application prototype designed and tested using Remix, Mocha, React, and Next.js. Requires users to have Metamask installed.

Users wishing to initiate a crowdfunding campaign interact with the CampaignFactory smart contract via the front-end to deploy a new campaign. By deploying a new campaign they become the manager of the campaign and only they can make requests to withdraw money and then finalize withdrawals. For requests to be finalized, enough contributors of the campaign (more than half) must approve the request in order for it to be finalized and withdrawn.

Dapp front-end deployed at https://kickstart123.herokuapp.com on the Rinkeby test network.

CampaignFactory smart contract registered and verified at https://rinkeby.etherscan.io/address/0x03388aCc31197Be10E745d11B54337C26D18485F.
