class Customer {
    constructor(id, name, middleName, lastName, becameCustomer) {
        this.id = id
        this.name = name
        this.middleName = middleName
        this.lastName = lastName
        this.becameCustomer = becameCustomer
    }
}
module.exports = {
    Customer: Customer
}