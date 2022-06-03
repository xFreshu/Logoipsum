import styled from 'styled-components'

export const ErrorFormMessage = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.error};
  font-weight: 700;
  border: solid 2px ${({ theme }) => theme.error};
  padding: 10px 0 10px 10px;
  margin-top: 10px;
  border-radius: 15px;
  background-color: rgba(255, 89, 94, 0.25);
`
