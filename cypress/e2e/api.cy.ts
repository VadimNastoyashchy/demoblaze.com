import Api from '../src/ApiSupport';

const apiUrl: string = Cypress.env('baseApiUrl');
const phoneValue: string = 'phone';
const notebookValue: string = 'notebook';
const monitorValue: string = 'monitor';

describe('API test', () => {
    it('Check "Phone category" with API', () => {
        Api.POST('POST', apiUrl, { cat: phoneValue })
            .then(
                (resp) => {
                    expect(resp.status).to.eq(200);
                    const body = resp.body;
                    expect(resp.body.Items[0]).to.have.property('cat', phoneValue);
                    for (let key in body.Items[0]) {
                        cy.log(key);
                    }
                });;
    });
    it('Check "Laptop category" with API', () => {
        Api.POST('POST', apiUrl, { cat: notebookValue })
        .then(
            (resp) => {
                expect(resp.status).to.eq(200);
                const body = resp.body;
                expect(resp.body.Items[0]).to.have.property('cat', notebookValue);
                for (let key in body.Items[0]) {
                    cy.log(key);
                }
            });;
    });
    it('Check "Monitor category" with API', () => {
        Api.POST('POST', apiUrl, { cat: monitorValue })
        .then(
            (resp) => {
                expect(resp.status).to.eq(200);
                const body = resp.body;
                expect(resp.body.Items[0]).to.have.property('cat', monitorValue);
                for (let key in body.Items[0]) {
                    cy.log(key);
                }
            });;
    });
});
