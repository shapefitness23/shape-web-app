import styled from 'styled-components';
import theme from "../../assets/css/theme";


const colorStyle = ({ color }: { color?: string }) => `
color: ${color || theme.colorText};
`;


export const Label = styled.span<{ color?: string }>`
  display: inline-block;
  font-weight: 500;
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