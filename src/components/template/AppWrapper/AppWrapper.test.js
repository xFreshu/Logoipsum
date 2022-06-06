import { render } from '@testing-library/react'
import AppWrapper from './AppWrapper'

it('Render the component', () => {
  render(
    <AppWrapper>
      <div>Test</div>
    </AppWrapper>,
  )
})
