// GalleryMasonry.jsx
import React, { useEffect } from "react";
import Footer from "../../footer/Footer";

const images = [
    { src: "https://www.fnp.com/images/pr/l/v20240426181219/delicate-love-6-pink-roses-bunch_1.jpg", colSpan: 2, rowSpan: 1 },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzydKKCtcbT2N1FaCp-vssaVqEIFOwUlnuzA&s", colSpan: 1, rowSpan: 2 },
    { src: "https://www.fnp.com/images/pr/l/v20230105004046/big-hugsy-teddy-bear_1.jpg", colSpan: 1, rowSpan: 1 },
    { src: "https://www.fnp.com/images/pr/l/v20230105004046/big-hugsy-teddy-bear_1.jpg", colSpan: 1, rowSpan: 1 },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvXDJodBCt_qNa9jF5hfk7l3_hcVXuArMv_oF9jaFMrpPcl7X5Q9ARiXFonl6dS7BQ1g&usqp=CAU", colSpan: 2, rowSpan: 1 },
    { src: "https://www.mcaffeine.com/cdn/shop/files/card_1_8603dbef-aead-4514-8379-9a3a801f4d78.jpg?v=1727424882", colSpan: 1, rowSpan: 1 },
    { src: "https://www.fnp.com/images/pr/l/v20230105004046/big-hugsy-teddy-bear_1.jpg", colSpan: 1, rowSpan: 1 },
    { src: "https://www.fnp.com/images/pr/l/v20240426181219/delicate-love-6-pink-roses-bunch_1.jpg", colSpan: 1, rowSpan: 2 },
];
const popularGifts = [
    {
        id: 1,
        name: "Rose Bouquet",
        image:
            "https://www.fnp.com/images/pr/l/v20240426181219/delicate-love-6-pink-roses-bunch_1.jpg",
    },
    {
        id: 2,
        name: "Chocolate Box",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzydKKCtcbT2N1FaCp-vssaVqEIFOwUlnuzA&s",
    },
    {
        id: 3,
        name: "Teddy Bear",
        image:
            "https://www.fnp.com/images/pr/l/v20230105004046/big-hugsy-teddy-bear_1.jpg",
    },
    {
        id: 4,
        name: "Gift Card",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvXDJodBCt_qNa9jF5hfk7l3_hcVXuArMv_oF9jaFMrpPcl7X5Q9ARiXFonl6dS7BQ1g&usqp=CAU",
    },
    {
        id: 5,
        name: "Perfume Set",
        image:
            "https://www.mcaffeine.com/cdn/shop/files/card_1_8603dbef-aead-4514-8379-9a3a801f4d78.jpg?v=1727424882",
    },
];

function Gallary() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="max-w-7xl mx-auto p-4">
                            <h2 className="text-3xl font-semibold mb-6 text-center">Our Cake Gallery</h2>
                            <div
                                className="grid grid-cols-3 grid-rows-4 gap-4"
                                style={{ gridAutoFlow: "dense" }}
                            >
                                {images.map(({ src, colSpan, rowSpan }, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Cake ${index + 1}`}
                                        className={`w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}
                                        style={{
                                            gridColumn: `span ${colSpan}`,
                                            gridRow: `span ${rowSpan}`,
                                        }}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Gallary;
