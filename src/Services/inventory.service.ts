import { Inventory } from "../Models/inventory";
export class inventoryService {
    async createInventory(data: any)
    {
        try {
            const newInv = await Inventory.create(data)
            return newInv
        }
        catch (error) {
            console.log(error)
        }
    }

    async getInventories()
    {
        try {
            const items = await Inventory.find({})
            return items
        }
        catch (error) {
            console.log(error)
        }
    }

    async getInventory(id: string)
    {
        try {
            const inv = await Inventory.findById({_id: id})
            if(!inv)
            {
                return 'Inventory not avaliable'
            }
            return inv
        }
        catch (error)
        {
            console.log(error)
        }
    }

    async updateInventory(id:string, data:any)
    {
        try{
            const inv = await Inventory.findByIdAndUpdate({_id: id}, data, {new:true})
            if(!inv)
            {
                return "Inventory not availiable"
            }
            return inv
        }
        catch (error)
        {
            console.log(error)
        }
    }

    async deleteInventory(id: string)
    {
        try {
            const inv = await Inventory.findByIdAndDelete(id)
            if(!inv)
            {
                return "Inventory not avaliable"
            }
        }  
        catch (error)
        {
            console.log(error)
        }
    }
}


export const inventoryServices = new inventoryService()