describe(`Automation testing of APIs using cypress`, function () {

    context(`API response validation`, function () {
        it(`GET request validation`, function () {
            cy.request(`GET`, `https://3aa52d8d-fa7a-49aa-acd6-071ad13ed6df.mock.pstmn.io/users`)
                .then(function (response) {
                    expect(response.status).to.eq(200);
                    expect(response.body).length.to.be.greaterThan(1);
                })
        })

        it(`POST request validation`, function () {
            cy.request(`POST`, `https://3aa52d8d-fa7a-49aa-acd6-071ad13ed6df.mock.pstmn.io/post`)
                .then(function (response) {
                    expect(response.status).to.eq(200);
                })
        })

        it(`DELETE request validation`, function () {
            cy.request(`DELETE`, `https://3aa52d8d-fa7a-49aa-acd6-071ad13ed6df.mock.pstmn.io/delete`)
                .then(function (response) {
                    expect(response.status).to.eq(200);
                    expect(response.body).length.to.be.greaterThan(1);
                })
        })
    })

    context(`API validation using intercept`, function () {
        it(`This is a validation for API request response using intercept`, function () {
            cy.intercept(`GET`,`https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10`, (req) => {
                expect(req.body).to.include(`Lunn Avenue`);
            });
            
        })
    })
})
