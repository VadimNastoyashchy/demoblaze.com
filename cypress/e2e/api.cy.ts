import ApiSupport from '../src/ApiSupport';

const apiUrl: string = Cypress.env('byCatApiUrl');
const phoneValue: string = 'phone';
const notebookValue: string = 'notebook';
const monitorValue: string = 'monitor';
const categoryKeys = ['cat', 'desc', 'id', 'img', 'price', 'title'];

describe('API test', () => {
    it.only('Check "Phone category" with API', () => {
        ApiSupport.POST(apiUrl, { cat: phoneValue })
            .then(
                (resp) => {
                    expect(resp.status).to.eq(200);
                    expect(resp.body.Items[0]).to.have.property('cat', phoneValue);
                    expect(resp.body.Items[0]).to.have.keys(categoryKeys);
                });;
    });
    it('Check "Laptop category" with API', () => {
    });
    it('Check "Monitor category" with API', () => {
    });
});
