describe('Page opening', () => {
  it('Should open the page', () => {
    cy.visit('https://www.hajper.com/');
	cy.get('button#btn btn--ghost').click();
    })
})

describe('Header buttons availability', () => {
  it('Should display the Spelpaus, Spelgranser and Sjalvtest header buttons', () => {
    cy.get('[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconPause-sc-pgu2pb-2 jiRjhg cWzpRE"]').should('be.visible');
	cy.get('[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconLimits-sc-pgu2pb-3 jiRjhg jWDjGD"]').should('be.visible');
	cy.get('[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconTest-sc-pgu2pb-4 jiRjhg locoAS"]').should('be.visible');
	})
})

describe('Footer "Spel inspektionen" image availability', () => {
   it("Should display the Spel inspektionen image ", () => {
   cy.get('[class="licenses-logos__spelinspektionen u-dib"]').should('be.visible')
	})
})

describe('Not logged in user love game notification', () => {
   it("Should display the 'Dina favoriter är kopplade till ditt saldo, klicka på Hämta saldo eller Sätt in för att lägga till dina favoriter' notification after clicking on the love-icon", () => {
   cy.get('[data-at="product-casino"]').click();
   cy.get('[alt="Reactoonz"]').click();
   cy.get('[class="icon__Svg-sc-195gh6j-0 dHhpbr item__love-icon icon--sprite"]').click();
   cy.contains('Dina favoriter är kopplade till ditt saldo, klicka på Hämta saldo eller Sätt in för att lägga till dina favoriter');
     })
})  