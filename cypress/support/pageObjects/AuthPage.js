class AuthPage {
    login(email, password) {
        return cy.request({
            url: 'https://api.restful-api.dev/login',
            method: 'POST',
            body: {
                email: email,
                password: password
            },
            failOnStatusCode: false
        });
    }
}

export default AuthPage;
