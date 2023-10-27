import styled from 'styled-components';
import theme from "../../assets/css/theme";


const colorStyle = ({ color }: { color?: string }) => `
color: ${color || theme.colorText};
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
`
export const H2 = styled.h2`
  font-size: 20px !important;
  font-weight: 600;
`


export const Label = styled.span<{ color?: string; fontWeight?: 400 | 500 | 600 }>`
  display: inline-block;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  font-size: 16px;
  ${colorStyle};
`;

export const Subtext = styled.div<{
  error?: boolean;
  secondary?: boolean;
  color?: string;
  strong?: boolean;
  fontWeight?: 400 | 500 | 600;
}>`
  font-weight: ${({ strong, fontWeight }) => fontWeight || (strong ? 500 : 400)};
  font-size: 0.875rem;
  line-height: 1.375rem;
`;


const linkStyle = `
  font-weight: normal;
  color: ${theme.colorLink};
  cursor: pointer;
  &:hover, :active, :focus {
    text-decoration: underline;
  }
`;

export const Link1 = styled.a`
  ${linkStyle}
  font-size: ${theme.fontSize}px;
  line-height: 1.375rem;
`;

export const Link2 = styled.a`
  ${linkStyle}
  font-size: ${theme.fontSizeSM}px;
  line-height: 1.125rem;
`;