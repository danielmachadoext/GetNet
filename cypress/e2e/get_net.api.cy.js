/// <reference types="cypress"/>

const { data } = require('ospath')
const payload_cadastro_dispositivo = require('../fixtures/cadastrar-dispositivo-payload.json')
const payload_cadastrar_campos_obrigatorios = require('../fixtures/cadastrar_campos_obrigatorios_payload.json')
const { string } = require('assert-plus')

describe("Cadastrar dispositivos", () =>{

    var token

    before('Login', () => {
        cy.request({

            url: 'https://api.restful-api.dev/login',
            method: 'POST',
            BODY: {
                email: 'pl19j@exemple.com',
                password: '123456'
            },
            failOnStatusCode: false

        })
            .then((response) => {
                token = response.body.token
            })

    })
})


    it('Cadastrar dispositivo', () => {

            cy.request({
            url: 'https://api.restful-api.dev/objects',
            method: 'POST',
            body: payload_cadastro_dispositivo,
           // headers: {
           //     Authorization: `Bearer ${token}`
            //}

        })
            .then((response) => {
                //Status Code
                expect(response.status).equal(200)
                 //Contrato
                expect(response.body).to.have.property('name', payload_cadastro_dispositivo.name)               
                expect(response.body.data).to.have.property('year' , payload_cadastro_dispositivo.data.year)
                expect(response.body.data).to.have.property('price', payload_cadastro_dispositivo.data.price)
                expect(response.body.data).to.have.property('CPU model', payload_cadastro_dispositivo.data['CPU model'])
                expect(response.body.data).to.have.property('Hard disk size', payload_cadastro_dispositivo.data['Hard disk size'])
                expect(response.body.data).to.have.property('cor', payload_cadastro_dispositivo.data.cor)
                //Campo Obrigatorio
                expect(response.body.name).not.empty
                expect(response.body.data.year).not.empty
                expect(preco).not.empty
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['Hard disk size']).not.empty
                expect(response.body.data.cor).not.empty              

            })
    })

    it('Cadastrar dispositivo campos obrigatórios', () => {

        cy.request({
        url: 'https://api.restful-api.dev/objects',
        method: 'POST',
        failOnStatusCode: false
        
    })

        .should(({ status, statusText }) => {
        expect(status).to.equal(400)
        expect(statusText).to.equal('Bad Request')

    })
})
