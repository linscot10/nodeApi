
const Products = '../models/products.model.js';


const getProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getProductsId = async (req, res) => {
    try {

        const { id } = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const postProducts = async (req, res) => {
    try {
        const product = await Products.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product Not Found" })
        }

        const updatedProduct = await Products.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndDelete(id);
        if (!product)
            return res.status(404).json({ message: "Product Not Found" });

        res.status(200).json({ message: "Product Deleted Successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = {
    getProducts,
    getProductsId,
    postProducts,
    updateProducts,
    deleteProducts

}