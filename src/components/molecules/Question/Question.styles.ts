import styled from 'styled-components'

export const StyledQuestion = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  :nth-last-child(1) {
    border-bottom: 1px solid #ccc;
  }
  :hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`

export const QuestionInformation = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  div {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span {
      margin-left: 1rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
`

export const Votes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.5rem;
  span {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
`
