import {promises as fs} from "fs"

class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        
        this.nextId++   
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.Id++

        let newProduct = {
            id: ProductManager.Id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        console.log(newProduct)

        //await fs.writeFile(this.patch, "...")
    }
}

const productos = new ProductManager

productos.addProduct("Pañales Dia", "Pack de pañales para adulto absorventes de uso diario", 12000, "imagen1", "pa0355", 30)
