import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { supabase } from "../../DataBaseFecth";
import { motion, AnimatePresence } from "framer-motion";

function ShopPage({ product }) {
    const { state } = useLocation();
    const [relateData, setRealteData] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };
    const totalPrice = state.price * quantity;
    const [allData, setAllData] = useState([]);
    const relatedType = state.type;
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("shop_card")
                .select("*");
            // console.log(data)
            setAllData(data)

            if (error) {
                console.error(error);
            } else {
                const filterData = data.filter(item => item.type.toLowerCase() === relatedType);
                setRealteData(filterData);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);


    const [showPayment, setShowPayment] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleBuyNow = () => {
        setShowPayment(true);
    };

    const handlePay = () => {
        setShowPayment(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000); // 2 sec me success band
    };


    return (
        <>

            <div className="container max-w-7xl mx-auto p-6">
                <div className="row">
                    <div className="max-w-6xl mx-auto px-4 py-6 pt-20">
                        <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
                            <span className="border-b-3 pb-1 mb-1">Purchase Product Here</span>
                        </h2>
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
                                <h3 className="text-xl font-semibold">Product Details</h3>
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
                                <button onClick={handleBuyNow} className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        showPayment && (
                            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                    <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
                                    <div className="space-y-2">
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="payment" defaultChecked />
                                            <span>UPI</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="payment" />
                                            <span>Credit/Debit Card</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="payment" />
                                            <span>Net Banking</span>
                                        </label>
                                    </div>
                                    <div className="mt-4 flex justify-end gap-2">
                                        <button
                                            onClick={() => setShowPayment(false)}
                                            className="px-4 py-2 bg-gray-400 text-white rounded"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handlePay}
                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {showSuccess && (
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
                            ✅ Order Successful!
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col">
                        <div className="">
                            <h2 className="text-3xl text-center my-7">{state.title} Related Product </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {
                                    relateData.length > 0 ? (
                                        relateData.map((shopItem, shopIndex) => {
                                            return (
                                                <motion.div
                                                    key={shopIndex}
                                                    layout
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`border rounded-lg shadow-lg p-4 cursor-pointer transition transform hover:scale-105}`}

                                                >
                                                    <img
                                                        src={shopItem.image_link}
                                                        alt={shopItem.title}
                                                        className="w-full h-48 object-cover rounded-md mb-4"
                                                    />
                                                    <h3 className="text-xl font-semibold text-pink-700 mb-2">{shopItem.title}</h3>
                                                    <p className="text-gray-700 mb-2">Price -  ₹{shopItem.price}</p>
                                                    <div className="flex justify-between">
                                                        <button
                                                            type="button"
                                                            className={`w-48 cursor-pointer mx-1  py-2 rounded text-white font-semibold transition}`}
                                                        >
                                                            Add Card
                                                        </button>
                                                        <Link
                                                            type="button"
                                                            className={`text-center w-48 cursor-pointer mx-1  py-2 rounded bg-green-700 text-white font-semibold transition}`}
                                                            to='/shop/buy-product'
                                                            // onClick={()=>navigate('buy-product')}
                                                            state={shopItem}
                                                        >
                                                            Buy Now
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            );
                                        }
                                        )
                                    ) : (
                                        <p>No water products found.</p>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {
                                allData.length > 0 ? (
                                    allData.map((shopItem, shopIndex) => {
                                        return (
                                            <motion.div
                                                key={shopIndex}
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3 }}
                                                className={`border rounded-lg shadow-lg p-4 cursor-pointer transition transform hover:scale-105}`}

                                            >
                                                <img
                                                    src={shopItem.image_link}
                                                    alt={shopItem.title}
                                                    className="w-full h-48 object-cover rounded-md mb-4"
                                                />
                                                <h3 className="text-xl font-semibold text-pink-700 mb-2">{shopItem.title}</h3>
                                                <p className="text-gray-700 mb-2">Price -  ₹{shopItem.price}</p>
                                                <div className="flex justify-between">
                                                    <button
                                                        type="button"
                                                        className={`w-48 cursor-pointer mx-1  py-2 rounded text-white font-semibold transition}`}
                                                    >
                                                        Add Card
                                                    </button>
                                                    <Link
                                                        type="button"
                                                        className={`text-center w-48 cursor-pointer mx-1  py-2 rounded bg-green-700 text-white font-semibold transition}`}
                                                        to='/shop/buy-product'
                                                        // onClick={()=>navigate('buy-product')}
                                                        state={shopItem}
                                                    >
                                                        Buy Now
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        );
                                    }
                                    )
                                ) : (
                                    <p>No water products found.</p>
                                )
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShopPage;