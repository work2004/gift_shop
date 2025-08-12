import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Slide() {
    const product = [
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <Slider {...settings}>
                {product.map((p) => (
                    <div key={p.id} className="px-2">
                        <article className="bg-white rounded-2xl shadow-md flex flex-col overflow-hidden">
                            <div className="relative h-44 sm:h-48 lg:h-52">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover"
                                />
                                {p.title && (
                                    <span className="absolute left-3 top-3 bg-rose-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        {p.title}
                                    </span>
                                )}
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="text-sm sm:text-base font-semibold line-clamp-2">{p.title}</h3>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.subtitle}</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div>
                                        <div className="text-lg font-bold">₹{p.price}</div>
                                        <div className="text-xs text-gray-400">{p.note}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="px-3 py-1 rounded-full border border-gray-200 text-xs hover:bg-gray-50">
                                            Save
                                        </button>
                                        <button className="px-3 py-2 rounded-full bg-rose-500 text-white text-sm shadow hover:opacity-95">
                                            Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

