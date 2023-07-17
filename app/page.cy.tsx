import Home from './page'

describe('<Home />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Home />)

    cy.get('main').should('exist')

  })
})

export {}
