///  <reference types="cypress" />

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        //baseUrl + Register html
        cy.visit('Register.html');

        //type
        cy.get('input[placeholder="First Name"]').type('Aluno');
        cy.get('input[ng-model^=Last]').type('Agilizei');
        cy.get('input[ng-model^=Email]').type('aluno@email.com');
        cy.get('input[ng-model^=Phone]').type('11986769947');

        //check -> radio's e checkboxes
        cy.get('input[value=FeMale]').check();
        cy.get('input[Type=Checkbox]').check('Cricket');
        cy.get('input[Type=Checkbox]').check('Movies');

        //select -> select e select2 (combos)
        cy.get('Select#Skills').select('Javascript');
        cy.get('Select#countries').select('Barbados');
        cy.get('Select#country').select('Japan', { force: true }); // 🚨
        cy.get('Select#yearbox').select('1996');
        cy.get('Select[ng-model^=month]').select('January');
        cy.get('Select#daybox').select('23');


    });
});


// elementos sao todos elementos de texto
// input[placeholder="First Name"]
// input[ng-model^=Last]
// input[ng-model^=Email]
// input[ng-model^=Phone]
// input[value=FeMale]
// input[id=Checkbox]

// Select#skills
// Select#countries
// Select#country
// Select#yearbox
// Select[ng-model^=monthbox]
// Select#daybox

// input[id=firstpassword]
// input[id=secondpassword]