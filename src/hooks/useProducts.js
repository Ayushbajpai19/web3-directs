import { useQuery } from 'react-query';
import axios from 'axios';

export const useProducts = () => {
  return useQuery('products', async () => {
    // In a real app, this would fetch from Product Hunt's API
    // For now, returning mock data
    return [
      {
        id: 1,
        name: "Uniswap",
        description: "Leading decentralized crypto trading protocol",
        logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
        tags: ["DeFi", "Exchange"],
        website: "https://uniswap.org"
      },
      // Add more mock products...
    ];
  });
};
