import React from 'react';
import { Box, Image, Heading, Text, Tag, Link, HStack } from '@chakra-ui/react';

export const CompanyCard = ({ company }) => {
  return (
    <Box 
      p={5} 
      shadow="md" 
      borderWidth="1px" 
      borderRadius="lg"
      _hover={{ shadow: "lg" }}
      transition="all 0.2s"
    >
      <Image 
        src={company.logo} 
        alt={company.name} 
        boxSize="50px" 
        objectFit="contain" 
        mb={4}
      />
      <Heading size="md" mb={2}>{company.name}</Heading>
      <Text mb={4}>{company.description}</Text>
      <HStack spacing={2} mb={4}>
        {company.tags.map(tag => (
          <Tag key={tag} colorScheme="blue" size="sm">
            {tag}
          </Tag>
        ))}
      </HStack>
      <Link 
        href={company.website} 
        isExternal 
        color="blue.500"
        fontWeight="bold"
      >
        Visit Website →
      </Link>
    </Box>
  );
};
