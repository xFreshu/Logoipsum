import styled from 'styled-components'

interface StyledCard {
  auth?: boolean
}

export const Card = styled.div<StyledCard>`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ auth }) => (auth ? '#2df8bb' : '#000000')};
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`
