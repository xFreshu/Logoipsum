import { render } from '@testing-library/react'
import AppTemplate from './AppTemplate'

it('Render the component', () => {
  render(
    <AppTemplate>
      <div>test</div>
    </AppTemplate>,
  )
})
