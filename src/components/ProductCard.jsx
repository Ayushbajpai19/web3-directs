import React from 'react';
import { Box, Image, Heading, Text, HStack, VStack, Button, Badge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export const ProductCard = ({ product }) => {
  return (
    <Box 
      p={6} 
      borderWidth="1px" 
      borderRadius="lg" 
      _hover={{ shadow: 'md' }}
      bg="white"
    >
      <HStack spacing={4} align="start">
        <Image 
          src={product.logo} 
          alt={product.name}
          boxSize="60px"
          objectFit="cover"
          borderRadius="md"
        />
        <VStack align="start" flex={1}>
          <Link to={`/products/${product.id}`}>
            <Heading size="md" mb={1}>{product.name}</Heading>
          </Link>
          <Text color="gray.600" noOfLines={2}>{product.description}</Text>
          <HStack spacing={2}>
            {product.tags.map(tag => (
              <Badge key={tag} colorScheme="orange" variant="subtle">
                {tag}
              </Badge>
            ))}
          </HStack>
        </VStack>
        <Button
          rightIcon={<FiArrowUpRight />}
          variant="outline"
          size="sm"
        >
          Visit
        </Button>
      </HStack>
    </Box>
  );
};
