/// <reference types="cypress" />
describe('Validação de registro de usuário', () => {
    before(() =>{
        // Armazena as variaveis de elementos usados em todo o teste
        Cypress.env('ImagemRegistro', 'img[src="images/mast_register.gif"]')
        Cypress.env('TelaRegistroConcluido', ':nth-child(3) > font > b')
        Cypress.env('TelaLogin', ':nth-child(3) > td > p > font')
    })

    it('registro de dados de usuário', () => {
        cy.visit('register.php')       
        // Validar que a imagem da tela de registro está visivel
        cy.get(Cypress.env('ImagemRegistro'))
        .should('be.visible')
    })

    it('Preencher os dados de registro', () => {
        //Dados registro
        cy.PreencherDados()
        cy.get('@nome')
            .should('be.visible')
        cy.get('@sobreNome')
            .should('be.visible')
        cy.get('@telefone')
            .should('be.visible')
        cy.get('@email')
            .should('be.visible')
        cy.get('@endereço')
            .should('be.visible')
        cy.get('@cidade')
            .should('be.visible')
        cy.get('@estado')
            .should('be.visible')
        cy.get('@CEP')
            .should('be.visible')
        cy.get('@pais')
            .should('be.visible')

    })
        
    it('Preencher dados de Login', () => {
        //Dados Login
        cy.PreencherDadosLogin()
        cy.get('@usuario')
            .should('be.visible')
        cy.get('@senha')
            .should('be.visible')
    })

    it('Clicar em enviar', () => {
        //Clicar em submeter
        cy.ClicarEnviar()
        cy.get(Cypress.env('TelaRegistroConcluido'))
        .should('be.visible')
        .contains('Note: Your user name is jabasili.')
    })
    
    it('Clicar no link de login', () => {
        //Link de login
        cy.ClicarLink()
        cy.get(Cypress.env('TelaLogin'))
        .should('be.visible')
        .contains("Welcome back to Mercury Tours! Enter your user information to access the member-only areas of this site. If you don't have a log-in, please fill out the registration form.")
    })
        
    it('Fazer o login', () => {
        //Fazer Login
        cy.FazerLogin()    
        cy.get('@user')
            .should('be.visible')
        cy.get('@pass')
            .should('be.visible')
    })
        
    it('Clicar para fazer o login', () => {
        //Clicar para fazer login
        cy.ClicarSubmiter()
        cy.get('h3')
        .should('be.visible')
        .contains('Login Successfully')
    })        
})
