import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Buy() {
    // Product data yahan rakho
    const product = {
        id: 1,
        name: "Chocolate Box",
        price: 500,
        image:
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80",
    };

    const [quantity, setQuantity] = useState(1);

    const totalPrice = product.price * quantity;

    const handlePayment = () => {
        alert(
            `Payment successful for ${quantity} ${product.name}(s), total ₹${totalPrice}`
        );
    };

    return (
        <motion.section
            className="max-w-4xl mx-auto p-8 mt-12 bg-pink-50 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl font-bold text-pink-700 mb-6 text-center">
                Purchase {product.name}
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-8">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full sm:w-1/3 h-64 object-cover rounded-md shadow-md"
                />

                <div className="flex-1">
                    <p className="text-xl text-pink-700 font-semibold mb-4">
                        Price: ₹{product.price}
                    </p>

                    <div className="flex items-center space-x-4 mb-6">
                        <button
                            onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                        >
                            −
                        </button>
                        <span className="text-2xl font-bold">{quantity}</span>
                        <button
                            onClick={() => setQuantity((q) => q + 1)}
                            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                        >
                            +
                        </button>
                    </div>

                    <p className="text-2xl font-bold text-pink-800 mb-6">
                        Total: ₹{totalPrice}
                    </p>

                    <button
                        onClick={handlePayment}
                        className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-pink-700 transition transform hover:scale-105"
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </motion.section>
    );
}
