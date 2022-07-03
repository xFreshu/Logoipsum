import React from 'react'
import { StyledQuestion, QuestionInformation, Votes } from './Question.styles'
import PropTypes from 'prop-types'

type QuestionProps = {
  title: string
  description: string
  id: number
  upvote: string
  downvote: string
  user: {
    login: string
    avatar: string
  }
  answers: Array<{
    id: number
    content: string
    upvote: string
    downvote: string
    user: {
      login: string
      avatar: string
    }
  }>
}

const Question = ({ title, description, id, upvote, downvote, user, answers }: QuestionProps) => {
  return (
    <StyledQuestion key={id}>
      <QuestionInformation>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <div>
          <img src={user.avatar} alt={user.login} />
          <span>{user.login}</span>
        </div>
      </QuestionInformation>
      <Votes>
        <span>👍 {upvote}</span>
        <span>👎 {downvote}</span>
        <span>comments: {answers.length}</span>
      </Votes>
    </StyledQuestion>
  )
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  upvote: PropTypes.number.isRequired,
  downvote: PropTypes.number.isRequired,
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      upvote: PropTypes.number.isRequired,
      downvote: PropTypes.number.isRequired,
      user: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
}

export default Question
