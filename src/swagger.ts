import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
process.env.NODE_ENV === 'production'

const routesPath = './routes/*.js'; // Adjust based on build structure

console.log('Swagger API path:', routesPath);

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RepairShop API',
      version: '1.0.0',
      description: 'API documentation for your Node.js application',
    },
  },
  apis: [routesPath], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;