describe('Blog app', function() {
  beforeEach(function() {
    // reset db
    // cy.request('POST', 'http://localhost:3003/api/testing/reset')
    
    // // create a test user directly in the backend
    // const user = {
    //     name: 'Umar Faruk',
    //     username: 'faruk_bloglist',
    //     password: '123456789'
    // }
    
    // cy.request('POST', 'http://localhost:3003/api/users/', user)

    // visit frontend
    cy.visit('http://localhost:5173')
  })

  describe('When logged in', function() {
    beforeEach(function() {
        cy.login({ username: 'hassino_bloglist', password: '123456789' })
    })

    it('User can create a blog', function() {
        cy.createBlog({
            title: 'Cypress like test',
            author: 'FSO',
            url: 'http://testurl.com',
        })
    })

    it('User can like a blog', function() {
        cy.contains('Cypress like test').parent().find('button').contains('view').click()
        cy.contains('likes 0')
        
        cy.contains('button', 'like').click()
        cy.contains('likes 1')
    })

    it('User who created a blog can delete it', function() {
        cy.contains('Cypress like test').parent().find('button').contains('view').click()
        cy.contains('remove').click()

        cy.on('window:confirm', () => true) // confirms delete automatically
        cy.get('html').should('not.contain', 'Cyress like test')

    })
  
  describe('and another user exists', function() {
    beforeEach(function() {
        it('only the creator can see the delete button', function() {
        cy.contains('Cypress like test').parent().find('button').contains('view').click()
        cy.contains('remove') // visible for creator

        // logout
        cy.contains('logout').click()

        // login as another user
        cy.login({ username: 'sadiq_bloglist', password: '123456789' })

        cy.contains('Cypress like test').parent().find('button').contains('view').click()
        cy.contains('remove').should('not.exist')
    })
   }) 
})
    
  })
})