import React from 'react';
import { HStack, Button, Tag } from '@chakra-ui/react';

export const FilterBar = () => {
  const categories = ['All', 'DeFi', 'NFT', 'Gaming', 'Infrastructure', 'DAO'];
  
  return (
    <HStack spacing={4} py={4} overflowX="auto">
      {categories.map(category => (
        <Tag 
          key={category}
          size="lg"
          variant="subtle"
          colorScheme="orange"
          cursor="pointer"
          _hover={{ bg: 'orange.100' }}
        >
          {category}
        </Tag>
      ))}
    </HStack>
  );
};
