import styled from 'styled-components'

interface StyledHeaderProps {
  whiteHeader?: boolean
}

export const HeaderStyled = styled.h1<StyledHeaderProps>`
  text-align: center;
  margin: 2rem 0;
  color: ${({ whiteHeader, theme }) => (whiteHeader ? theme.primary : theme.secondary)};
`
