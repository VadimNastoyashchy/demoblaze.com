import Demoblaze from '../src/apiServices/Demoblaze';
import ApiSupport from '../src/ApiSupport';

describe('API tests', () => {

    describe('Check \"api.demoblaze.com/bycat\" api endpoint', () => {
        const categoryKeys = ['cat', 'desc', 'id', 'img', 'price', 'title'];

        const checkStatusCodeAndResponseParams = (response: Cypress.Response<any>, uniqKey: string): void => {
            expect(response.status).to.eq(200);
            expect(response.body.Items[0]).to.have.property('cat', uniqKey);
            expect(response.body.Items[0]).to.have.keys(categoryKeys);
        };

        it('Check "Phone category" with API', () => {
            const phoneValue: string = 'phone';
            ApiSupport.POST(Demoblaze.bycat, { cat: phoneValue })
                .then(
                    (resp) => {
                        checkStatusCodeAndResponseParams(resp, phoneValue);
                    });;
        });

        it('Check "Laptop category" with API', () => {
            const notebookValue: string = 'notebook';
            ApiSupport.POST(Demoblaze.bycat, { cat: notebookValue })
                .then(
                    (resp) => {
                        checkStatusCodeAndResponseParams(resp, notebookValue);
                    });;
        });

        it('Check "Monitor category" with API', () => {
            const monitorValue: string = 'monitor';
            ApiSupport.POST(Demoblaze.bycat, { cat: monitorValue })
                .then(
                    (resp) => {
                        checkStatusCodeAndResponseParams(resp, monitorValue);
                    });;
        });
    });
});
