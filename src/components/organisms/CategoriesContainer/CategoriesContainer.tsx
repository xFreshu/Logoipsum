import React from 'react'
import { StyledCategoriesContainer } from './CategoriesContainer.styled'
import CardCategories from '../../molecules/CardCategories/CardCategories'
import PropTypes from 'prop-types'

type ContainerProps = {
  categories: any
}

type CardCategoriesProps = {
  id: number
  name: string
  questions: string | undefined
}

const CategoriesContainer = ({ categories }: ContainerProps) => {
  return (
    <StyledCategoriesContainer>
      {categories.map(({ id, name, questions }: CardCategoriesProps) => (
        <CardCategories id={id} name={name} questions={questions} key={id} />
      ))}
    </StyledCategoriesContainer>
  )
}

CategoriesContainer.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoriesContainer
