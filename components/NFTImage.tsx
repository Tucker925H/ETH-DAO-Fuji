import { useEffect, useState } from 'react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import {
  useAddress,
  useContract,
  useMetadata,
  useOwnedNFTs,
} from '@thirdweb-dev/react';
import {
  ERCTokenAddress,
  ownerWalletAddress,
  editionDropAddress,
} from '../src/scripts/module';
import { ethers } from 'ethers';
import Image from 'next/image';

export default function NftImage() {
  const address = useAddress();
  const { contract } = useContract(editionDropAddress);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  if (data) {
    console.log('data', data[0]?.metadata?.image);
    const ImageUrl = data[0]?.metadata?.image;
    return (
      <Image
        src={ImageUrl ? ImageUrl : ''}
        alt="NFT Image"
        width={200}
        height={200}
      />
    );
  } else {
    return <></>;
  }
}
