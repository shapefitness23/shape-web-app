import React from 'react';
import { Flex } from '../../../ui-library/flex';
import { InputField } from '../../../ui-library/input';
import { Search } from '../../../ui-library/input/search';
import { SearchContainer } from './styles';

export const SearchBar = () => {

  return (
    <SearchContainer justifyContent='space-between'>
      <Flex flexGrow>
        <Search onChange={() => null} />
      </Flex>
    </SearchContainer>
  )
}