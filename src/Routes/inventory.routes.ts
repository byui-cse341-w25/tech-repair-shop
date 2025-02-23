import express from "express"
import { InventoryController } from "../Controllers/inventory.controller"

export const inventoryRouter = express.Router()


/**
 * @swagger
 * /inventory/:
 *   post:
 *     summary: Create a new inventory entry
 *     description: Post an inventory to the database.
 * 
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *                  item:
 *                      type: string
 *                      example: Apple 15 screen
 *                  stock:
 *                      type: number
 *                      example: 5
 *                  brand:
 *                      type: string
 *                      example: Apple
 *                  price:
 *                      type: string
 *                      example: $100.20
 *                  barcode:
 *                      type: string
 *                      example: 23a2b12
 *     responses:
 *       201:
 *         description: Successful response with the new entry.
 */
inventoryRouter.post('/', InventoryController.addinventory)


/**
 * @swagger
 * /inventory/:
 *   get:
 *     summary: Get a list of inventory items
 *     description: Retrieve a list of inventories from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of inventories.
 */
inventoryRouter.get('/', InventoryController.getInventories)

/**
 * @swagger
 * /inventory/{id}:
 *   get:
 *     summary: Get an item's inventory by it's id
 *     description: Retrieve an inventory from the database.
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          example: 4
 *          description: id of inventory to retrieve
 *     responses:
 *       200:
 *         description: Successful response with a single inventory.
 */
inventoryRouter.get('/:id', InventoryController.getAInventory)



/**
 * @swagger
 * /inventory/{id}:
 *   put:
 *     summary: Update an item's inventory details by it's id
 *     description: Retrieve an item and update it from the database.
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          example: 4
 *          description: id of inventory to retrieve
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *                  item:
 *                      type: string
 *                      example: Apple 15 screen
 *                  stock:
 *                      type: number
 *                      example: 5
 *                  brand:
 *                      type: string
 *                      example: Apple
 *                  price:
 *                      type: string
 *                      example: $100.20
 *                  barcode:
 *                      type: string
 *                      example: 23a2b12
 *     responses:
 *       204:
 *         description: Successful response with an updated inventory.
 */
inventoryRouter.put('/:id', InventoryController.updateInventory)

/**
 * @swagger
 * /inventory/{id}:
 *   delete:
 *     summary: Delete an item's inventory by it's id
 *     description: Delete an inventory from the database.
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          example: 4
 *          description: id of inventory to retrieve
 *     responses:
 *       200:
 *         description: Successful response with confirmation of deletion.
 */
inventoryRouter.delete('/:id', InventoryController.deleteInventory)