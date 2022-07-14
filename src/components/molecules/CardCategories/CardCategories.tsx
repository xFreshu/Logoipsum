import React from 'react'
import { StyledCardCategories } from './CardCategories.styles'
import PropTypes from 'prop-types'

type CardCategoriesProps = {
  id: number
  name: string
  topics: Array<any>
}

const CardCategories = ({ id, name, topics }: CardCategoriesProps) => {
  return (
    <StyledCardCategories key={id} to={`/topics/${id}`}>
      <span>{name.substring(0, 3)}</span>
      <span>{name}</span>
      <span>Liczba pytań: {topics.length}</span>
    </StyledCardCategories>
  )
}

CardCategories.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  topics: PropTypes.string.isRequired,
}

export default CardCategories
