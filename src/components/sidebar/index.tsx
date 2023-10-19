import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Flex } from '../../ui-library/flex';
import { Label } from '../../ui-library/typography';
import { Logo } from '../common/logo';
import { menuOptions } from './menuOptions';
import { Menu, MenuContianer, SidebarContianer } from './style';

export const Sidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarContianer flexDirection='column'>
      <Logo />
      <MenuContianer gap='1.5rem' flexDirection='column'>
        {
          menuOptions(location.pathname).map((option) => {
            return (
              <Menu onClick={() => navigate(option.pathname)} selected={!!option.active}>
                <Label>{option.name}</Label>
              </Menu>
            )
          })
        }
      </MenuContianer>
    </SidebarContianer>
  )
}