import React from 'react';
import { Flex } from '../../../ui-library/flex';
import { H1, H2, Label } from '../../../ui-library/typography';
import { HeaderContainer, IconContainer, ProfileIcon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComments, faUser } from '@fortawesome/free-regular-svg-icons';
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon color='#292D32' icon={faComments} />
        </IconContainer>
        <IconContainer centered>
          <FontAwesomeIcon color='#292D32' icon={faVideoCamera} />
        </IconContainer>
        <IconContainer centered>
          <FontAwesomeIcon color='#292D32' icon={faBell} />
        </IconContainer>
        <Label fontWeight={600}>John Doe</Label>
        <ProfileIcon centered>
          <FontAwesomeIcon fontSize={20} icon={faUser} />
        </ProfileIcon>
      </Flex>
    </HeaderContainer>
  )
}