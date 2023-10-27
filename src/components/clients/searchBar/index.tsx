import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from '../../../ui-library/button';
import { Flex } from '../../../ui-library/flex';
import { InputField } from '../../../ui-library/input';
import { Search } from '../../../ui-library/input/search';
import { SearchContainer } from './styles';

export const SearchBar = () => {

  return (
    <SearchContainer justifyContent='space-between'>
      <Flex centered flexGrow gap='0.5rem'>
        <Search onChange={() => null} />
        <Button
          icon={<FontAwesomeIcon icon={faPlusCircle} />}
          type="default"
          name="Add Clients"
          size='large'
        />
        <Button type="default" name="Filters" size='large' />
        <Button type="default" name="Sort by" size='large' />
      </Flex>
    </SearchContainer>
  )
}