import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function ShopPage({ product }){
    const {state} = useLocation();
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };
    const totalPrice = state.price * quantity;

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-6 pt-20">
                <h2 className="text-2xl font-bold mb-6 text-center">Product Order Here</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
                        <img
                            src={state.image_link}
                            alt={state.title}
                            className="w-full h-64 object-cover rounded-xl"
                        />
                        <h3 className="text-lg font-semibold mt-4">{state.title}</h3>
                        <p className="text-gray-500">₹{state.price}</p>

                        <label className="block mt-3 text-sm font-medium">
                            Quantity:
                        </label>
                        <select
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="mt-1 border border-gray-300 rounded-lg p-2 w-24 focus:ring-2 focus:ring-blue-400"
                        >
                            {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold">Order Summary</h3>
                        <hr className="my-3" />
                        <p className="my-6 text-gray-700 text-2x2 font-bold">{state.about}</p>
                        <p className="text-gray-700">Product: {state.title}</p>
                        <p className="text-gray-700">
                            Price per item: ₹{state.price}
                        </p>
                        <p className="text-gray-700">Quantity: {quantity}</p>
                        <h4 className="text-lg font-bold mt-2">
                            Total: ₹{totalPrice}
                        </h4>
                        <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShopPage;