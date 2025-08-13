import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Gift, Headphones, MapPin, ShieldCheck, Smile, Truck } from "lucide-react";
import Slide from "./Slide";
import { useNavigate } from "react-router-dom";
import Footer from "../../footer/Footer";

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
const products = [
    {
        id: 1,
        name: "Rose Bouquet",
        price: "₹899",
        image: "https://www.bigwishbox.com/cdn/shop/products/0001-3988226054-_1.png?v=1717488576",
    },
    {
        id: 2,
        name: "Chocolate Gift Box",
        price: "₹599",
        image: "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-lindt-gourmet-chocolate-box-205012-m.jpg",
    },
    {
        id: 3,
        name: "Teddy Bear",
        price: "₹499",
        image: "https://www.fnp.com/images/pr/l/v20230105004046/big-hugsy-teddy-bear_1.jpg",
    },
];
const benefits = [
    {
        icon: <MapPin size={36} className="text-pink-600" />,
        title: "Our Shop Location",
        description: "Visit us at 123 Gift Street, Happy Town.",
    },
    {
        icon: <Headphones size={36} className="text-pink-600" />,
        title: "24/7 Customer Care",
        description: "We’re here to help you anytime.",
    },
    {
        icon: <Truck size={36} className="text-pink-600" />,
        title: "Fast Delivery",
        description: "Quick and safe delivery on all orders.",
    },
    {
        icon: <Gift size={36} className="text-pink-600" />,
        title: "Quality Products",
        description: "Handpicked gifts with love and care.",
    },
    {
        icon: <ShieldCheck size={36} className="text-pink-600" />,
        title: "Trusted & Secure",
        description: "Your satisfaction is our priority.",
    },
    {
        icon: <Smile size={36} className="text-pink-600" />,
        title: "Happy Customers",
        description: "Thousands of satisfied customers worldwide.",
    },
];
const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        text:
            "Amazing gift shop! The products are high quality and delivery was super fast. Highly recommend!",
        avatar:
            "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 2,
        name: "Rahul Verma",
        text:
            "Customer service was excellent and they helped me pick the perfect gift for my wife. Loved it!",
        avatar:
            "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        id: 3,
        name: "Anjali Singh",
        text:
            "Beautifully packaged gifts with timely delivery. Will definitely shop again.",
        avatar:
            "https://randomuser.me/api/portraits/women/44.jpg",
    },
];



function Home() {
    useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
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
    const test_card = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        adaptiveHeight: true,
    };
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid bg-pink-50 w-full">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="relative h-screen bg-cover bg-center flex items-center justify-center"
                            style={{
                                backgroundImage:
                                    "url('https://cdn.shortpixel.ai/spai/w_919+q_lossless+ret_img+to_webp/websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/gift-shop-social-image.jpg')",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-70 animate-gradient-x"></div>

                            <motion.div
                                className="relative p-1.5 text-lxl md:text-4xl max-w-3xl text-center text-white z-10"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                                    Discover Perfect Gifts for Every Occasion
                                </h1>
                                <p className="mt-6 text-lg sm:text-xl md:text-2xl drop-shadow-md">
                                    Make your moments unforgettable with our curated gift collection.
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-10 bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition duration-300"
                                    onClick={() => navigate('shop')}
                                >
                                    Shop Now
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-lg"
                            >
                                <h1 className="text-4xl md:text-6xl font-bold text-pink-700">
                                    Surprise Your Loved Ones 🎁
                                </h1>
                                <p className="mt-4 text-gray-600">
                                    Explore our collection of thoughtful gifts to make every moment
                                    special.
                                </p>
                                <button onClick={() => navigate('shop')} className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition duration-300">
                                    Shop Now
                                </button>
                            </motion.div>
                            <motion.img
                                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc"
                                alt="Gift"
                                className="w-full md:w-1/2 rounded-lg shadow-lg mt-8 md:mt-0"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="px-6 md:px-20 py-12">
                            <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
                                <span className="border-b-3 pb-1 mb-1">Best Selling Gifts</span>
                            </h2>
                            <div className="grid gap-8 md:grid-cols-3">
                                {products.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-60 w-full object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">{product.name}</h3>
                                            <p className="text-pink-600 font-bold">{product.price}</p>
                                            <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                                                Buy Now
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h2 className="text-3xl font-bold text-center mb-6 text-pink-700">
                        <span className="border-b-3 pb-1 mb-1">Popular Gifts</span>
                    </h2>
                    <Slide />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="bg-pink-50 py-16 px-6">
                            <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
                                <span className="border-b-3 pb-1 mb-1">Your Celebration, Our Creation</span>
                            </h2>
                            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                                {benefits.map(({ icon, title, description }, index) => (
                                    <motion.div
                                        key={title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, duration: 0.6 }}
                                        className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center cursor-default hover:shadow-2xl transition-shadow duration-300"
                                    >
                                        <div className="mb-4">{icon}</div>
                                        <h3 className="text-xl font-semibold text-pink-700 mb-2">{title}</h3>
                                        <p className="text-gray-600">{description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="bg-white py-16 px-6">
                            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                                <motion.img
                                    src="https://postscriptshop.com/cdn/shop/articles/IMG_1149_2.jpg?v=1729525731"
                                    alt="Shop Front"
                                    className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                />
                                <motion.div
                                    className="w-full md:w-1/2"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h2 className="text-4xl font-bold text-pink-700 mb-6">Please Visit Our Shop</h2>
                                    <p className="mb-4 text-gray-700 text-lg">
                                        D-89 Basantpur Faridabad Harayana 801104
                                    </p>
                                    <div className="flex items-center space-x-3">
                                        <motion.div
                                            className="relative"
                                            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <MapPin size={40} className="text-pink-600" />
                                            <motion.span
                                                className="absolute top-1 left-1 w-8 h-8 rounded-full bg-pink-400 opacity-50"
                                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </motion.div>
                                        <span className="text-pink-700 font-semibold text-xl">Panchshil Colony Faridabad</span>
                                    </div>

                                    <p className="mt-6 text-gray-600">
                                        We are open from 10 AM to 8 PM every day.
                                        Contect no. <a href="tel:+919341261243" className="text-pink-600 underline">+91 93412 61243</a>
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col max-w-4xl mx-auto py-16 px-6">
                        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
                            <span className="border-b-3 pb-1 mb-1">What Our Customers Feedback</span>
                        </h2>
                        <Slider {...test_card}>
                            {testimonials.map(({ id, name, text, avatar }) => (
                                <div
                                    key={id}
                                    className="bg-white p-8 rounded-lg shadow-lg mx-4 text-center"
                                >
                                    <img
                                        src={avatar}
                                        alt={name}
                                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <p className="italic text-gray-700 mb-4">"{text}"</p>
                                    <h3 className="font-semibold text-pink-700">{name}</h3>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="col bg-pink-50 py-16 px-6">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-pink-700 mb-6">
                                <span className="border-b-3 pb-1 mb-1">Stay Updated!</span>

                            </h2>
                            <p className="mb-8 text-gray-700">
                                Subscribe to our newsletter for the latest gifts, offers & updates.
                            </p>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-green-600 font-semibold text-lg"
                                >
                                    Thank you for subscribing!
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className=" max-w-md mx-auto gap-4"
                                >
                                    <motion.input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(219, 39, 119, 0.7)" }}
                                        className="flex-grow px-4 py-3 rounded-lg border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                                    />
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="m-3 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-pink-700 transition"
                                    >
                                        Subscribe
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
export default Home;
