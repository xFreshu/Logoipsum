import React from 'react'
import { StyledCardCategories } from './CardCategories.styles'
import PropTypes from 'prop-types'

type CardCategoriesProps = {
  id: string
  name: string
  usersQuestions: Array<any>
  level: string
}

const CardCategories = ({ id, name, level, usersQuestions }: CardCategoriesProps) => {
  return (
    <StyledCardCategories key={id} to={`/topics/${id}`}>
      <span>{name.substring(0, 3)}</span>
      <span>{name}</span>
      <span>Liczba pytań: {usersQuestions.length}</span>
    </StyledCardCategories>
  )
}

CardCategories.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  usersQuestions: PropTypes.array.isRequired,
  level: PropTypes.string.isRequired,
}

export default CardCategories
