import express from 'express'
import { inventoryRouter } from './inventory.routes';
const routes = express.Router();

routes.use('/inventory', inventoryRouter)

export default routes