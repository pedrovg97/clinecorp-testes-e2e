/// <reference types="cypress"


describe('Cadastro de paciente', () => {

    it('Criar paciente', () => {
        cy.visit("https://sistema.clinicorp.com/login/")
        cy.get('[id="username"]').type("pedroobnt@zodontobox", {force: true})
        cy.get('[id="password"]').type("&3UVXmoa", {force: true})
        cy.get('[type="primary"]').click()


    })
})