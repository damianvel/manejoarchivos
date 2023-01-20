const users = []
const fs = require('fs')

require('fs').writeFile(

    './users.json',

    JSON.stringify(users),

    function (err) {
        if (err) {
            console.error('error');
        }
    }
)


class ProductManager {

    constructor() {
        this.path = "./user.json"
        this.products = []
    }


    getProducts = () => fs.existsSync(this.products)

    getProductById = (idInput) => {
        if ((this.products.find(({ id }) => id === idInput))) {
            fs.existsSync(parseInt(this.products.find(({ id }) => id === idInput)))
        }
        else {
            console.log("Not found")
        }

   }

   // updateProduct = (idInput, data) => {
   //     if ((this.products.find(({ id }) => id === idInput))) {
   //         const toUpdate = (this.products.find(({ id }) => id === idInput))
   //         const updated = { ...toUpdate, data }
   //         console.log(updated)
//
//}
  //      else {
//console.log("Not found")
  //      }


   // }

    addProduct = (newProduct) => {

        if ((this.products.find(({ code }) => code === newProduct.code))) {
            console.log('producto con este code ya existe: es el siguiente:')
            console.log(this.products.find(({ code }) => code === newProduct.code))

            
        } else {

            if (newProduct.title && newProduct.description && newProduct.price && newProduct.code && newProduct.stock) {


                if (this.products.length === 0) {
                    newProduct.id = 1
                } else {
                    newProduct.id = this.products[this.products.length - 1].id + 1

                    fs.appendFile.writeFile(JSON.stringify(newProduct.path, newProduct))
                    console.log('Termino de escribir')
                }


            
        }else{ console.log(" faltan datos") }
    }
}


}



getProductById = (idInput) => {
    if ((this.products.find(({ id }) => id === idInput))) {
        fs.unlinkSync((this.products.find(({ id }) => id === idInput)))
    }
    else {
        console.log("Not found")
    }


}




const productManager = new ProductManager()



// prueba agregar primer producto ok
productManager.addProduct(

    {
        title: "jarra",
        description: "linda",
        price: 500,
        thumbnail: "notiene",
        code: 265,
        stock: 15,
        id: 5,
    })

// prueba agregar segundo producto ok

productManager.addProduct({
    title: "florero",
    description: "negro",
    price: 500,
    thumbnail: "notiene",
    code: 658,
    stock: 15,
    id: 6,
})





// prueba traer todos los productos

productManager.getProducts()

// prueba buscar productos por ID ok


productManager.getProductById(idInput = 2)

//prueba agregar producto con code repetido

productManager.addProduct({
    title: "florero",
    description: "negro",
    price: 500,
    thumbnail: "notiene",
    code: 658,
    stock: 15,
    id: 6,
})

//prueba agregar producto incompleto

productManager.addProduct({
    title: "maceta",
    description: "blanca",
    price: 500,
    thumbnail: "notiene",
    // code: 5,
    id: 9,
})


