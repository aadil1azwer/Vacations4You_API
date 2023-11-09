const authDoc = require('./auth');

module.exports = {
  openapi: '3.0.3',
  info: {
    title: "Vacations4You -  Backend",
    description: "Vacations4You back-end API endpoints",
    termsOfService: "http://swagger.io/terms/",
  },
  servers: [
    {
      url: '/api/v1'
    }
  ],
  paths: {
    ...authDoc,
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  },
  tags: [
    {
      name: "Vacations4You",
      description: "API Endpoints"
    }
  ],
  security: [
    []
  ]
};