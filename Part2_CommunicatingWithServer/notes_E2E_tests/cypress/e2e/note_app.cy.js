// Part 5e: End to End Testing: Cypress
// Writing to a form
// describe('Note app', function() {
//   beforeEach(function() {
//     cy.visit('http://localhost:5173')
//   })

//   it('front page can be opened', function() {
//     cy.contains('Notes')
//     cy.contains('Note app, Department of Computer Science, University of Helsinki 2025')
//   })
  
//   it('user can login', function() {
//     cy.contains('button', 'login').click()
//     cy.get('label:first').type('hassino')
//     cy.get('label:last').type('123456789')
//     cy.get('#login-button').click()

//     cy.contains('Hassan Muhd logged in')
//   })
// })



// Testing a new note form
// describe('Note app', function() {
//   beforeEach(function() {
//     cy.visit('http://localhost:5173')
//   })

//   it('front page can be opened', function() {
//     cy.contains('Notes')
//     cy.contains('Note app, Department of Computer Science, University of Helsinki 2025')
//   })
  
//   it('user can login', function() {
//     cy.contains('button', 'login').click()
//     cy.contains('label', 'username').type('hassino')
//     cy.contains('label', 'password').type('123456789')
//     cy.get('#login-button').click()

//     cy.contains('Hassan Muhd logged in')
//   })

//   describe('when logged in', function() {
//     beforeEach(function() {
//       cy.contains('button', 'login').click()
//       cy.contains('label', 'username').type('hassino')
//       cy.contains('label', 'password').type('123456789')
//       cy.get('#login-button').click()
//     })

//     it('a new note can e created', function() {
//       cy.contains('new note').click()
//       cy.get('#new-note-field').type('a note created by cypress', {force: true})
//       cy.get('#save-note').click({force: true})
//     })
//   })
// })





// Controlling the state of the database (i.e creating a different database for testing with cypress)
// describe('Note app', function() {
//   beforeEach(function() {
//     cy.request('POST', 'http://localhost:3001/api/testing/reset')
//     const user = {
//       name: 'Hassan Muhd',
//       username: 'hassino',
//       password: '123456789'
//     }
//     cy.request('POST', 'http://localhost:3001/api/users/', user)
//     cy.visit('http://localhost:5173')
//   })

//   describe('when logged in', function() {
//     beforeEach(function() {
//       cy.contains('button', 'login').click()
//       cy.contains('label', 'username').type('hassino')
//       cy.contains('label', 'password').type('123456789')
//       cy.get('#login-button').click()
//     })

//     describe('and a note exist', function() {
//       beforeEach(function() {
//         cy.contains('new note').click()
//         cy.get('input').type('another note cypress')
//         cy.contains('save').click()
//       })

//       it('it can be made not important', function() {
//         cy.contains('another note cypress')
//           .contains('button', 'make not important')
//           .click()
        
//         cy.contains('another note cypress')
//           .contains('button', 'make important')
//       })
//     })
//   })
// })





// Failed login test
// describe('Note app', function() {
//   beforeEach(function() {
//     cy.request('POST', 'http://localhost:3001/api/testing/reset')
//     const user = {
//       name: 'Hassan Muhd',
//       username: 'hassino',
//       password: '123456789'
//     }
//     cy.request('POST', 'http://localhost:3001/api/users/', user)
//     cy.visit('http://localhost:5173')
//   })

//   it.only('login fails with wrong password', function() {
//       cy.contains('button', 'login').click()
//       cy.contains('label', 'username').type('hassino')
//       cy.contains('label', 'password').type('wrong')
//       cy.get('#login-button').click()

//       cy.get('.error')
//         .should('contain', 'wrong credentials')
//         .and('have.css', 'color', 'rgb(255, 0, 0)')
//         .and('have.css', 'border-style', 'solid')
      
//       cy.get('html').should('not.contain', 'Hassan Muhd Logged in')
//     })

//   describe('when logged in', function() {
//     beforeEach(function() {
//       cy.contains('button', 'login').click()
//       cy.contains('label', 'username').type('hassino')
//       cy.contains('label', 'password').type('123456789')
//       cy.get('#login-button').click()
//     })


//     describe('and a note exist', function() {
//       beforeEach(function() {
//         cy.contains('new note').click()
//         cy.get('input').type('another note cypress')
//         cy.contains('save').click()
//       })

//       it('it can be made not important', function() {
//         cy.contains('another note cypress')
//           .contains('button', 'make not important')
//           .click()
        
//         cy.contains('another note cypress')
//           .contains('button', 'make important')
//       })
//     })
//   })
// })






// Bypassing the UI
// describe('Note app', function() {
//   beforeEach(function() {
//     cy.visit('http://localhost:5173')
//   })

//   it('user can login', function() {
//     cy.contains('button', 'login').click()
//     cy.contains('label', 'username').type('hassino')
//     cy.contains('label', 'password').type('123456789')
//     cy.get('#login-button').click()

//     cy.contains('Hassan Muhd logged in')
//   })

//   it('login fails with wrong password', function() {
//       cy.contains('button', 'login').click()
//       cy.contains('label', 'username').type('hassino')
//       cy.contains('label', 'password').type('wrong')
//       cy.get('#login-button').click()

//       cy.get('.error')
//         .should('contain', 'wrong credentials')
//         .and('have.css', 'color', 'rgb(255, 0, 0)')
//         .and('have.css', 'border-style', 'solid')
      
//       cy.get('html').should('not.contain', 'Hassan Muhd Logged in')
//     })

//   describe('when logged in', function() {
//     beforeEach(function() {
//       cy.login({ username: 'hassino', password: '123456789'})
//     })

//     it('a new note can be created', function() {
//       cy.contains('new note').click()
//       cy.get('#new-note-field').type('a note created by cypress', {force: true})
//       cy.get('#save-note').click({force: true})

//       cy.contains('a note created by cypress')
//     })

//     describe('and a note exists', function() {
//       beforeEach(function() {
//         cy.createNote({
//           content: 'another note cypress',
//           important: false
//         })
//       })

//       it('it can be made not important', function() {
//         cy.contains('another note cypress')
//           .contains('button', 'make important')
//           .click()
        
//         cy.contains('another note cypress')
//           .contains('button', 'make not important')
//       })
//     })
//   })
// })







// Changing the importance of a note
describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })

  it('user can login', function() {
    cy.contains('button', 'login').click()
    cy.contains('label', 'username').type('hassino')
    cy.contains('label', 'password').type('123456789')
    cy.get('#login-button').click()

    cy.contains('Hassan Muhd logged in')
  })

  it('login fails with wrong password', function() {
      cy.contains('button', 'login').click()
      cy.contains('label', 'username').type('hassino')
      cy.contains('label', 'password').type('wrong')
      cy.get('#login-button').click()

      cy.get('.error')
        .should('contain', 'wrong credentials')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border-style', 'solid')
      
      cy.get('html').should('not.contain', 'Hassan Muhd Logged in')
    })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'hassino', password: '123456789'})
    })

    it('a new note can be created', function() {
      cy.contains('new note').click()
      cy.get('#new-note-field').type('a note created by cypress', {force: true})
      cy.get('#save-note').click({force: true})

      cy.contains('a note created by cypress')
    })

    describe('and several notes exist', function() {
      beforeEach(function() {
        cy.createNote({ content: 'first note', important: true })
        cy.createNote({ content: 'second note', important: true })
        cy.createNote({ content: 'third note', important: true })
      })

      it('one of those can be made non important', function() {
        cy.contains('second note').parent().find('button').as('theButton')
        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make important')
      })
    })
  })
})