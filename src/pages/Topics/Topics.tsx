import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const Topics = ({ DUMMY_CATEGORIES }: any) => {
  const { id } = useParams()
  const getTopic = DUMMY_CATEGORIES.find((item: { id: number }) => item.id === Number(id))
  return (
    <>
      <h1>{getTopic.name}</h1>
    </>
  )
}

Topics.propTypes = {
  DUMMY_CATEGORIES: PropTypes.array.isRequired,
}

export default Topics
