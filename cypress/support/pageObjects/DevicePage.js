class DevicePage {
    createDevice(payload, token) {
        return cy.request({
            url: 'https://api.restful-api.dev/objects',
            method: 'POST',
            body: payload,
            headers: {
                Authorization: `Bearer ${token}`
            },
            failOnStatusCode: false
        });
    }

    createDeviceWithoutPayload() {
        return cy.request({
            url: 'https://api.restful-api.dev/objects',
            method: 'POST',
            failOnStatusCode: false
        });
    }
}

export default DevicePage;
