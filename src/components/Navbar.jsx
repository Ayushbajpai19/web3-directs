import React from 'react';
import { Box, Flex, Input, Button, Image, HStack, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box py={4} px={8} borderBottom="1px" borderColor="gray.200">
      <Flex justify="space-between" align="center">
        <Link to="/">
          <Image h="32px" src="/logo.svg" alt="Web3 Hunt" />
        </Link>
        
        <InputGroup maxW="600px">
          <Input 
            placeholder="Search for products" 
            size="md" 
            borderRadius="full"
            bg="gray.50"
          />
          <InputRightElement>
            <SearchIcon color="gray.500" />
          </InputRightElement>
        </InputGroup>

        <HStack spacing={4}>
          <Button colorScheme="gray" variant="ghost">Sign In</Button>
          <Button colorScheme="orange">Submit Product</Button>
        </HStack>
      </Flex>
    </Box>
  );
};
