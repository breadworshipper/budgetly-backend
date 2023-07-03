const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ["./app.js"];
// const endpointsFiles = ["./api/routes/authentication_route.js", "./api/routes/budget_route.js",
// "./api/routes/category_route.js", "./api/routes/expense_route.js"]

swaggerAutogen(outputFile, endpointsFiles);
