import React from 'react';
import { Flex } from '../../../ui-library/flex';
import { H1, H2, Label } from '../../../ui-library/typography';
import { HeaderContainer, IconContainer, ProfileIcon } from './styles';
import { MessageOutlined, VideoCameraOutlined, AlertOutlined } from '@ant-design/icons';

export const Header = () => {

  return (
    <HeaderContainer justifyContent='space-between'>
      <Flex gap='0.5rem'>
        <H1>Clients</H1>
        <H2>{`>`}</H2>
        <H1>All</H1>
      </Flex>
      <Flex alignItemsCenter gap='0.5rem'>
        <IconContainer centered>
          <MessageOutlined color='#292D32' />
        </IconContainer>
        <IconContainer centered>
          <VideoCameraOutlined color='#292D32' />
        </IconContainer>
        <IconContainer centered>
          <AlertOutlined color='#292D32' />
        </IconContainer>
        <Label fontWeight={600}>John Doe</Label>
        <ProfileIcon centered />
      </Flex>
    </HeaderContainer>
  )
}