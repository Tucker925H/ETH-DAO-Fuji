import { Web3Button } from '@thirdweb-dev/react';

export default function Web3ButtonComponent() {
  return (
    <Web3Button
      contractAddress="0x260bF2182D08Ba2C8C6aEF10b27115e0D2620bB2"
      action={(contract) => {
        contract.call('claim', [
          '0xDCDcd57770C42484BCAb61Eb1D16d2Db871A26eF',
          '0',
          1,
          0,
          0,
          0,
          '',
        ]);
      }}
    >
      claim
    </Web3Button>
  );
}
