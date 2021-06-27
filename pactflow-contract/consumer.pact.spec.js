// (1) Import the pact library and matching methods
const {Pact} = require('@pact-foundation/pact');
const {CustomerApiClient} = require('./api');
const {Customer} = require('./customer');
const {Matchers} = require("@pact-foundation/pact")
const {like, regex} = Matchers
const chai = require("chai")
const expect = chai.expect

// (2) Configure our Pact library
const mockProvider = new Pact({
    consumer: '16-bits-consumer',
    provider: '16-bits-provider',
    cors: false
});

describe('Customers API test', () => {
    // (3) Setup Pact lifecycle hooks
    before(() => mockProvider.setup());
    afterEach(() => mockProvider.verify());
    after(() => mockProvider.finalize());

    it('get customer by ID', async () => {
        // (4) Arrange
        const expectedCustomer = {id: 1, name: 'Luiz', middleName: 'De O', lastName: 'Costa', becameCustomer:'2021/06/27'}

        await mockProvider.addInteraction({
            state: 'a customer with ID 1 exists',
            uponReceiving: 'a request to get a customer',
            withRequest: {
                method: 'GET',
                path: '/api/v1/customers/1'
            },
            willRespondWith: {
                status: 200,
                headers: {
                    'Content-Type': regex({generate: 'application/json; charset=utf-8', matcher: '^application\/json'}),
                },
                body: like(expectedCustomer),
            },
        });

        // (5) Act
        const api = new CustomerApiClient(mockProvider.mockService.baseUrl);
        const customer = await api.getCustomer(1);

        // (6) Assert that we got the expected response
        expect(customer).to.deep.equal(new Customer(1, 'Luiz', 'De O', 'Costa', '2021/06/27'));
    });
});
