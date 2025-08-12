import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../../DataBaseFecth.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

// const giftProducts = [
//     { id: 1, title: "Chocolate Box", price: 500, img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJOsr6pcMBR0b83CJbHYo4tM5Qtpd-nzu7EfxLse5gJEP4lz1lIjorTwrDI6AaN0mtmc&usqp=CAU" },
//     { id: 2, title: "Teddy Bear", price: 800, img_link: "https://m.media-amazon.com/images/I/61BqBJ2TEyL._UF1000,1000_QL80_.jpg" },
//     { id: 3, title: "Flower Bouquet", price: 1200, img_link: "https://www.fnp.com/images/pr/m/v20250522122925/vivid-10-red-rose-bouquet.jpg" },
//     { id: 4, title: "Greeting Card", price: 150, img_link: "https://a.storyblok.com/f/165154/1280x720/341bc843fb/01_popular-greeting-cards-to-sell.jpg/m/" },
//     { id: 5, title: "Gift Hamper", price: 2000, img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqilogj7ZqSqkxbuChU02iBRbVde43ybTqpQ&s" },
//     { id: 6, title: "Perfume Set", price: 2500, img_link: "https://www.riyalifestyle.com/cdn/shop/files/Riya_Mens_Lifestyle_1.jpg?v=1747375231" },
//     { id: 7, title: "Doll Gift", price: 2550, img_link: "https://5.imimg.com/data5/SELLER/Default/2024/5/422670991/MJ/EI/VP/87228786/cute-baby-doll.jpeg" },
//     { id: 8, title: "Photo Fram", price: 1000, img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOf-cVsTLRn1UB913SNDw8K4rPX4M4lM7gWK-yCfKt1o1X5qbXxjNT_Eb-ycGnjWFiFw&usqp=CAU" },
//     { id: 9, title: "Car Toy", price: 520, img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWGLyMyyz-nxYcXdSilzgnyD1aMrrRx0wQA&s" },
//     { id: 9, title: "Cycle Ranger", price: 8000, img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jA-3X4iPlHqLsguoshOB6rxOy5pYpqoMNA&s" },
//     { id: 9, title: "Birthday Fram", price: 500, img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEp_zCELWp19c58wuOj5NrWZvUcSkk-a-Eg&s" },
//     { id: 9, title: "LED Warm Light", price: 2000, img_link: "https://www.diycart.in/wp-content/uploads/2024/09/Diycart-Diwali-star-light-warm-white-1.jpg" },
//     { id: 9, title: "Holi colors", price: 1500, img_link: "https://cheetah.cherishx.com/uploads/7ceb4bfa9ae454ea1f27933c9055d82a_original.jpg" },
//     { id: 9, title: "Kitchen Set", price: 4500, img_link: "https://m.media-amazon.com/images/I/71uuEHUL9-S.jpg" },
//     { id: 9, title: "Waterfall Moutain", price: 9001, img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapTXpA83aOy-JfWqL1KMGoz-R8JNg7LFhew&s" },
// ];

export default function Shop() {

    const navigate = useNavigate();
    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGifts, setSelectedGifts] = useState([]);
    const [shopData, setShopData] = useState([]);
    useEffect(() => {
        async function fetchCakes() {
            const { data, error } = await supabase.from('shop_card').select('*');
            if (error) {
                console.error('Error fetching cakes:', error);
            } else {
                // console.log('Cakes data:', data);
                setShopData(data);
            }
        }
        fetchCakes();
    }, []);

    const filteredGifts = shopData.filter((gift) =>
        gift.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // const toggleSelectGift = (id) => {
    //     setSelectedGifts((prevSelected) =>
    //         prevSelected.includes(id)
    //             ? prevSelected.filter((giftId) => giftId !== id)
    //             : [...prevSelected, id]
    //     );
    // };

    return (
        <>
            <div className="container max-w-7xl mx-auto p-6 my-10 md:my-13">
                <div className="row">
                    <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
                        <span className="border-b-3 pb-1 mb-1">Purchase Your Favorite Gifts</span>
                    </h2>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-8 max-w-md mx-auto">
                            <motion.input
                                type="text"
                                placeholder="Search gifts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
                                whileFocus={{ scale: 1.03, boxShadow: "0 0 8px rgba(219, 39, 119, 0.7)" }}
                                name="search"
                                list="search"
                            />
                            <datalist id="search">
                                <option value="Perfume" />
                                <option value="Teddy" />
                                <option value="Chocolate" />
                                <option value="Flowesr" />
                                <option value="Kitchen" />
                            </datalist>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {
                                filteredGifts.length === 0 ? (
                                    <motion.p
                                        className="text-center text-gray-500 col-span-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        No Data Found or Any Gift
                                    </motion.p>
                                ) : (
                                    filteredGifts.map((shopItem, shopIndex) => {
                                        const isSelected = selectedGifts.includes(shopItem.id);
                                        return (
                                            <motion.div
                                                key={shopIndex}
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3 }}
                                                className={`border rounded-lg shadow-lg p-4 cursor-pointer transition transform hover:scale-105 ${isSelected ? "border-pink-600 bg-pink-50" : "border-gray-300 bg-white"
                                                    }`}

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
                                                        className={`w-48 cursor-pointer mx-1  py-2 rounded text-white font-semibold transition ${isSelected ? "bg-pink-700 hover:bg-pink-800" : "bg-pink-500 hover:bg-pink-600"
                                                            }`}
                                                    >
                                                        Add Card
                                                    </button>
                                                    <Link
                                                        type="button"
                                                        className={`text-center w-48 cursor-pointer mx-1  py-2 rounded bg-green-700 text-white font-semibold transition}`}
                                                        to='buy-product'
                                                        // onClick={()=>navigate('buy-product')}
                                                        state={shopItem}
                                                    >
                                                        Buy Now
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        );
                                    })
                                )
                            }
                        </AnimatePresence>
                    </div>
                </div>
                <div className="row">
                    {/* <AnimatePresence>
                    {selectedGifts.length > 0 && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="mt-10 bg-pink-100 p-6 rounded-lg max-w-md mx-auto text-center shadow-md"
                        >
                            <h3 className="text-2xl font-bold text-pink-700 mb-4">
                                Selected Gifts ({selectedGifts.length})
                            </h3>
                            <ul className="text-gray-700 list-disc list-inside">
                                {selectedGifts.map((id) => {
                                    const gift = giftProducts.find((g) => g.id === id);
                                    return <li key={id}>{gift?.title} - ₹{gift?.price}</li>;
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence> */}
                </div>
            </div>
        </>
    );
}
