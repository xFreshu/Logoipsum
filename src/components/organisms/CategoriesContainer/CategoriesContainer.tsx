import React from 'react'
import { StyledCategoriesContainer } from './CategoriesContainer.styles'
import CardCategories from '../../molecules/CardCategories/CardCategories'
import PropTypes from 'prop-types'

type ContainerProps = {
  categories: any
}

type CardCategoriesProps = {
  id: string
  name: string
  usersQuestions: Array<any>
  level: string
}

const CategoriesContainer = ({ categories }: ContainerProps) => {
  return (
    <StyledCategoriesContainer>
      {categories.map(({ id, name, level, usersQuestions }: CardCategoriesProps) => (
        <CardCategories id={id} name={name} level={level} usersQuestions={usersQuestions} key={id} />
      ))}
    </StyledCategoriesContainer>
  )
}

CategoriesContainer.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoriesContainer
