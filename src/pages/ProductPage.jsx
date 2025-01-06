import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Image,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Divider
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import { useProduct } from '../hooks/useProduct';

export const ProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useProduct(id);

  if (isLoading) return null;

  return (
    <Container maxW="container.xl" py={8}>
      <Box bg="white" borderRadius="lg" p={8}>
        <HStack spacing={8} align="start">
          <Image
            src={product.logo}
            alt={product.name}
            boxSize="120px"
            objectFit="cover"
            borderRadius="xl"
          />
          <VStack align="start" flex={1} spacing={4}>
            <Heading size="xl">{product.name}</Heading>
            <Text fontSize="lg" color="gray.600">
              {product.description}
            </Text>
            <HStack spacing={2}>
              {product.tags.map(tag => (
                <Badge key={tag} colorScheme="orange" fontSize="sm">
                  {tag}
                </Badge>
              ))}
            </HStack>
            <Button
              rightIcon={<FiExternalLink />}
              colorScheme="orange"
              size="lg"
            >
              Visit Website
            </Button>
          </VStack>
        </HStack>
      </Box>
    </Container>
  );
};
