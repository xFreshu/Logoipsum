import React from 'react'
import ErrorMessage from './ErrorMessage'
import { render, screen } from '@testing-library/react'

describe('Error message in AuthForm', () => {
  it('Render the component', () => {
    render(<ErrorMessage errorMsg='Lorem ipsum' />)
    screen.getByText('Lorem ipsum')
  })
  it('Not render the component', () => {
    render(<ErrorMessage errorMsg='' />)
    screen.getByText('Błąd')
  })
})
