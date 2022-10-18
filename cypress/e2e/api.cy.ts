import ApiSupport from '../support/ApiSupport';

describe('API test', () => {
    it('Check "Phone category" with API', () => {
        ApiSupport.sendAndCheckDataProductCategories('POST', 'https://api.demoblaze.com/bycat', { cat: 'phone' });
    });
    it('Check "Laptop category" with API', () => {
        ApiSupport.sendAndCheckDataProductCategories('POST', 'https://api.demoblaze.com/bycat', { cat: 'notebook' });
    });
    it('Check "Monitor category" with API', () => {
        ApiSupport.sendAndCheckDataProductCategories('POST', 'https://api.demoblaze.com/bycat', { cat: 'monitor' });
    });
});
