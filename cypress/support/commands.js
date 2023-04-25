Cypress.Commands.add('PreencherDados', () =>{
    cy.fixture('DadosRegistro').then((DadosRegistro) => {
        cy.get('input[name="firstName"]')
            .as('nome')
            .type(DadosRegistro.nome)

        cy.get('input[name="lastName"]')
            .as('sobreNome')
            .type(DadosRegistro.sobrenome)

        cy.get('input[name="phone"]')
            .as('telefone')
            .type(DadosRegistro.telefone)

        cy.get('input[name="userName"]')
            .as('email')
            .type(DadosRegistro.email)

        cy.get('input[name="address1"]')
            .as('endereço')
            .type(DadosRegistro.endereco)

        cy.get('input[name="city"]')
            .as('cidade')
            .type(DadosRegistro.cidade)

        cy.get('input[name="state"]')
            .as('estado')
            .type(DadosRegistro.estado)

        cy.get('input[name="postalCode"]')
            .as('CEP')
            .type(DadosRegistro.CEP)

        cy.get('select[name="country"]')
            .as('pais')
            .select('BRAZIL')
    })
} )

Cypress.Commands.add('PreencherDadosLogin', () =>{
    cy.fixture('DadosLogin').then((DadosLogin) => {
        cy.get('input[name="email"]')
            .as('usuario')
            .type(DadosLogin.usuario)

        cy.get('input[name="password"]')
            .as('senha')
            .type((DadosLogin.senha), { log: false })

        cy.get('input[name="confirmPassword"]')
            .as('confirmarSenha')
            .type((DadosLogin.confirmarSenha), { log: false })
    })
})

Cypress.Commands.add('ClicarEnviar', () => {
    cy.get('input[name="submit"]')
        .as('botaoEnviar')
        .click()
})

Cypress.Commands.add('ClicarLink', () => {
    cy.get('a[href="login.php"]')
        .as('LinkLogin').click()
})

Cypress.Commands.add('FazerLogin', () => {
    cy.fixture('Login').then((Login) => {
    cy.get('input[name="userName"]')
        .as('user')
        .type(Login.userName)
    cy.get('input[name="password"]')
        .as('pass')
        .type((Login.passaword), { log: false })
    })
})

Cypress.Commands.add('ClicarSubmiter', () => {
    cy.get('input[name="submit"]')
        .as('clicarLogin')
        .click()
})