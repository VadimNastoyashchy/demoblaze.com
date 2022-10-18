export default class ApiSupport {
    public static sendAndCheckDataProductCategories(requestMethod: string, requestUrl: string, requestBody: any): void {
        cy.request(requestMethod, requestUrl, requestBody).then(
            (resp) => {
                expect(resp.status).to.eq(200);
                const body = resp.body;
                cy.log(JSON.stringify(body));
            });
    }
}