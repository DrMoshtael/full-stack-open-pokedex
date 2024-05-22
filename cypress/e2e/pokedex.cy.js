describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('charmander page can be opened', function() {
    cy.visit('http://localhost:5001/pokemon/ivysaur')
    cy.get('[to="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})