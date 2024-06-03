const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Product Name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false,

        }
    },

    {
        timestamps: true
    }
);


const Products = mongoose.model("Product", productSchema);

module.exports = Products;