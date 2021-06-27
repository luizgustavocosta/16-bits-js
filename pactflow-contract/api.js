const axios = require('axios');
const {Customer} = require("./customer");

class CustomerApiClient {
    constructor(url) {
        this.url = url
    }

    async getCustomer(id) {
        return axios.get(`${this.url}/api/v1/customers/${id}`)
            .then(response => {
                const customer = response.data;
                new Customer(customer.id, customer.name, customer.middleName, customer.lastName, customer.becameCustomer);
            })
    }
}

module.exports = {
    CustomerApiClient: CustomerApiClient
}
