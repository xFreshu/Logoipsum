import React from 'react'
import { StyledCardCategories } from './CardCategories.styles'
import PropTypes from 'prop-types'

type CardCategoriesProps = {
  id: number
  name: string
  questions: string | undefined
}

const CardCategories = ({ id, name, questions }: CardCategoriesProps) => {
  return (
    <StyledCardCategories key={id} to={name}>
      <span>{name.substring(0, 3)}</span>
      <span>{name}</span>
      <span>Liczba pytań: {questions}</span>
    </StyledCardCategories>
  )
}

CardCategories.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  questions: PropTypes.string.isRequired,
}

export default CardCategories
