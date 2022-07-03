import React from 'react'
import PropTypes from 'prop-types'
import { AppCard } from '../Home/Home.styles'
import { useParams } from 'react-router-dom'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import styled from 'styled-components'
import Question from '../../components/molecules/Question/Question'

const DUMMY_QUESTIONS = [
  {
    id: 1,
    title: 'Czy wyrażenie "x^2 + y^2 = z^2" jest prawdziwe?',
    description: 'lorem ipsum dolor sit amet',
    category: 'Bryły przestrzenne',
    upvote: '30',
    downvote: '2',
    user: {
      login: 'user1',
      avatar: 'https://avatars3.githubusercontent.com/u/17098120?s=460&v=4',
    },
    answers: [
      {
        id: 1,
        content: 'lorem ipsum dolor sit amet',
        upvote: '33',
        downvote: '11',
        user: {
          login: 'user2',
          avatar: 'https://avatars3.githubusercontent.com/u/17098120?s=460&v=4',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Czy trójkąt jest kwadratem?',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    category: 'Bryły przestrzenne',
    upvote: '10',
    downvote: '223',
    user: {
      login: 'user2',
      avatar: 'https://avatars3.githubusercontent.com/u/17098120?s=460&v=4',
    },
    answers: [
      {
        id: 2,
        content: 'lorem ipsum dolor sit amet',
        upvote: '1',
        downvote: '2',
        user: {
          login: 'user4',
          avatar: 'https://avatars3.githubusercontent.com/u/17098120?s=460&v=4',
        },
      },
    ],
  },
]

const Header = styled.h1`
  text-align: center;
  margin: 2rem 0;
`

const Topics = ({ DUMMY_CATEGORIES }: any) => {
  const { id } = useParams()
  const getTopic = DUMMY_CATEGORIES.find((item: { id: number }) => item.id === Number(id))
  return (
    <>
      <AppTemplate>
        <AppCard>
          <Header>{getTopic.name}</Header>
          {DUMMY_QUESTIONS.map(({ title, description, id, upvote, downvote, user, answers }) => (
            <Question
              key={id}
              title={title}
              description={description}
              id={id}
              upvote={upvote}
              downvote={downvote}
              user={user}
              answers={answers}
            />
          ))}
        </AppCard>
      </AppTemplate>
    </>
  )
}

Topics.propTypes = {
  DUMMY_CATEGORIES: PropTypes.array.isRequired,
}

export default Topics
