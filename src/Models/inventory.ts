import { Schema, model } from "mongoose";


interface IInventory {
    item: string,
    stock: number,
    brand: string,
    price: string,
    barcode: string   
}

const inventorySchema = new Schema<IInventory>({
    item: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    }
})


export const Inventory = model<IInventory>('Inventory', inventorySchema)