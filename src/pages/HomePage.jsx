import React from 'react';
import { VStack, Container, Heading, Text } from '@chakra-ui/react';
import { FilterBar } from '../components/FilterBar';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export const HomePage = () => {
  const { data: products, isLoading } = useProducts();

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="lg">Top Web3 Products</Heading>
        <FilterBar />
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </VStack>
    </Container>
  );
};
