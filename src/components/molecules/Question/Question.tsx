import React, { useEffect, useState } from 'react'
import { StyledQuestion, QuestionInformation, Votes } from './Question.styles'
import axios from 'axios'
import PropTypes from 'prop-types'

// type QuestionProps = {
//   title: string
//   description: string
//   id: string
//   upvote?: number
//   downvote?: number
//   user: string
//   answers: any
// answers: Array<{
//   id: number
//   content: string
//   upvote: number
//   downvote: number
//   user: {
//     login: string
//     avatar: string
//   }
// }>
// }

const Question = ({ title, description, upvote, downvote, answers, creator }: any) => {
  const [getUser, setUser] = useState({ login: '', image: '' })
  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${creator}`).then((res) => {
      setUser(res.data.user)
    })
  }, [])

  return (
    <StyledQuestion>
      <QuestionInformation>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <div>
          <img src={getUser.image} alt={getUser.login} />
          <span>{getUser.login}</span>
        </div>
      </QuestionInformation>
      <Votes>
        <span>👍 {upvote || 0}</span>
        <span>👎 {downvote || 0}</span>
        <span>Odpowiedzi: {answers.length}</span>
      </Votes>
    </StyledQuestion>
  )
}

// Question.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   upvote: PropTypes.number.isRequired,
//   downvote: PropTypes.number.isRequired,
//   user: PropTypes.shape({
//     login: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//   }).isRequired,
//   answers: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       content: PropTypes.string.isRequired,
//       upvote: PropTypes.number.isRequired,
//       downvote: PropTypes.number.isRequired,
//       user: PropTypes.shape({
//         login: PropTypes.string.isRequired,
//         avatar: PropTypes.string.isRequired,
//       }).isRequired,
//     }),
//   ).isRequired,
// }

export default Question
