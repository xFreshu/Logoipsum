import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    span {
      font-size: 1.3rem;
      margin: 20px 0;
      font-weight: 700;
      background-color: ${({ theme }) => theme.primary};
      :before {
        position: absolute;
        top: calc(50% + 1.5rem);
        left: -20px;
        transform: translateY(-50%);
        content: '';
        display: inline-block;
        width: 20vw;
        max-width: 200px;
        height: 2px;
        background-color: ${({ theme }) => theme.secondary};
      }
      :after {
        position: absolute;
        top: calc(50% + 1.5rem);
        right: -20px;
        transform: translateY(-50%);
        content: '';
        display: inline-block;
        width: 20vw;
        max-width: 200px;
        height: 2px;
        background-color: ${({ theme }) => theme.secondary};
      }
    }
  }
`
export const StyledLabel = styled.label`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  margin-top: 4rem;
`

export const StyledInput = styled.input`
  background-color: transparent;
  border: solid 2px ${({ theme }) => theme.secondary};
  height: 5rem;
  font-size: 2rem;
  outline: none;
  border-radius: 10px;
  padding: 0 5px;
  transition: 0.3s;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.88, 0.61);
  :focus {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`

export const StyledButton = styled.button`
  width: 120px;
  height: 45px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 1.4rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.88, 0.61);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    border: solid 2px ${({ theme }) => theme.secondary};
    cursor: pointer;
  }
  :first-child {
    margin-top: 3rem;
  }
`
