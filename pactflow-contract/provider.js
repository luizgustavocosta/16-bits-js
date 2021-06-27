const express = require("express")
const cors = require("cors")

const server = express()
server.use(cors())
server.use((request,
            response,
            next) => {
    response.header("Content-Type", "application/json; charset=utf-8")
    next()
})

server.get("/api/v1/customers/:id", (req, response) => {
    response.json({id: 1, name: "Luiz", middleName: "De O", lastName: "Costa", becameCustomer: "2021/06/27"})
})

module.exports = {
    server
}
