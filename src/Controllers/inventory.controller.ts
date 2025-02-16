import { inventoryServices } from "../Services/inventory.service";
import { Request, Response } from "express";


class inventoryController
{
    addinventory = async (req: Request, res: Response) => {
        const data = {
            item: req.body.item,
            stock: req.body.stock,
            brand: req.body.brand,
            price: req.body.price,
            barcode: req.body.barcode   
        }

        const inv = await inventoryServices.createInventory(data)
        res.status(201).send(inv)
    }

    getInventories = async (req: Request, res: Response) => {
        const inventories = await inventoryServices.getInventories()
        res.status(200).send(inventories)
    }

    getAInventory = async (req: Request, res: Response) => {
        const id = req.params.id
        const inventory = await inventoryServices.getInventory(id)
        res.status(200).send(inventory)
    }

    updateInventory = async (req: Request, res: Response) => {
        const id = req.params.id
        const inventory = await inventoryServices.updateInventory(id, req.body)
        res.status(204).send(inventory)
    }

    deleteInventory = async (req:Request, res: Response) => {
        const id = req.params.id
        await inventoryServices.deleteInventory(id)
        res.status(200).send("Inventory deleted")
    }
}


export const InventoryController = new inventoryController()