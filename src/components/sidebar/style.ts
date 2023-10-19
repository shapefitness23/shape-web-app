import { styled } from "styled-components";
import theme from "../../assets/css/theme";
import { Flex } from "../../ui-library/flex";

export const SidebarContianer = styled(Flex)`
  width: 280px;
  background: ${theme.background};
  padding: 2px 12px;
  height: 100vh;
`

export const MenuContianer = styled(Flex)`
  padding: 16px;
`
export const Menu = styled(Flex) <{ selected: boolean }>`
  background: ${({ selected }) => selected ? theme.backgroundSecondary : 'none'};
  padding: 12px;
  border-radius: ${theme.borderRadius}px;
  cursor: pointer;
`