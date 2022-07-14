import React from 'react'
import { StyledCategoriesContainer } from './CategoriesContainer.styles'
import CardCategories from '../../molecules/CardCategories/CardCategories'
import PropTypes from 'prop-types'

type ContainerProps = {
  categories: any
}

type CardCategoriesProps = {
  id: number
  name: string
  topics: Array<any>
}

const CategoriesContainer = ({ categories }: ContainerProps) => {
  return (
    <StyledCategoriesContainer>
      {categories.map(({ id, name, topics }: CardCategoriesProps) => (
        <CardCategories id={id} name={name} topics={topics} key={id} />
      ))}
    </StyledCategoriesContainer>
  )
}

CategoriesContainer.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoriesContainer
