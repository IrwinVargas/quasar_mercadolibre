import * as path from 'path'

const swaggerDefinition =  {
      openapi: "3.0.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "1.0.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
        basePath: '/api/v1'
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    }

export default swaggerDefinition