import React from "react";

const Slide = () => {
    // const popularData = [
    //     { id: 1, title: "Chocolate Cake", img: "https://via.placeholder.com/300x200" },
    //     { id: 2, title: "Strawberry Cake", img: "https://via.placeholder.com/300x200" },
    //     { id: 3, title: "Vanilla Cake", img: "https://via.placeholder.com/300x200" },
    //     { id: 4, title: "Red Velvet", img: "https://via.placeholder.com/300x200" },
    //     { id: 5, title: "Black Forest", img: "https://via.placeholder.com/300x200" }
    // ];
    const popularData = [
        {
            id: 1,
            name: "Rose Bouquet",
            price: "₹800",
            image: "https://www.bigwishbox.com/cdn/shop/products/0001-3988226054-_1.png?v=1717488576",
            title: 'Popular'
        },
        {
            id: 2,
            name: "Chocolate Gift Box",
            price: "₹526",
            image: "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-lindt-gourmet-chocolate-box-205012-m.jpg",
            title: 'New'
        },
        {
            id: 3,
            name: "Teddy Bear",
            price: "₹420",
            image: "https://www.fnp.com/images/pr/l/v20230105004046/big-hugsy-teddy-bear_1.jpg",
            title: 'Popular'
        },
        {
            id: 4,
            name: "Rose Bouquet",
            price: "₹652",
            image: "https://www.fnp.com/images/pr/l/v20240426181219/delicate-love-6-pink-roses-bunch_1.jpg",
            title: 'New'
        },
        {
            id: 5,
            name: "Chocolate Box",
            price: "₹652",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzydKKCtcbT2N1FaCp-vssaVqEIFOwUlnuzA&s",
            title: 'New'
        },
        {
            id: 6,
            name: "Perfume Set",
            price: "₹652",
            image: "https://www.mcaffeine.com/cdn/shop/files/card_1_8603dbef-aead-4514-8379-9a3a801f4d78.jpg?v=1727424882",
            title: 'Popular'
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide">
                {
                    popularData.map((pop) => (
                        <div
                            key={pop.id}
                            className="snap-center shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <img
                                src={pop.image}
                                alt={pop.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{pop.title}</h3>
                                <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Slide;
