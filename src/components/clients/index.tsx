import React from 'react';
import { Flex } from '../../ui-library/flex';
import { PageContent } from '../../ui-library/page';
import { Header } from './header';
import { ClientsList } from './list';
import { SearchBar } from './searchBar';

export const Clients = () => {
  return (
    <PageContent flexDirection='column'>
      <Header />
      <SearchBar />
      <ClientsList />
    </PageContent>
  )
}