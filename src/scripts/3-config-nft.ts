import { readFileSync } from 'fs';

import sdk from './1-initialize-sdk.js';
import { editionDropAddress } from './module.js';

// 先ほどメモして残していた editionDrop のコントラクトアドレスをこちらに記載してください
const editionDrop = sdk.getContract(editionDropAddress, 'edition-drop');

(async () => {
  try {
    await (
      await editionDrop
    ).createBatch([
      {
        name: "Fuji DAO's Symbol",
        description:
          "You can Fuji DAO's own Web page",
        image: readFileSync('src/scripts/assets/FujiDAO.jpg'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
