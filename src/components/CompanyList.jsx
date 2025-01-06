import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { CompanyCard } from './CompanyCard';
import { companies } from '../data/companies';

export const CompanyList = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={8} p={8}>
      {companies.map(company => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </SimpleGrid>
  );
};
