import React, { useEffect } from "react";
import Footer from "../../footer/Footer";

const blogData = [
    {
        id: 1,
        title: "Customer Experience: Shop se kharidari ka anubhav",
        date: "August 12, 2025",
        author: "Rahul Sharma",
        excerpt:
            "Maine yahan se cake kharida, aur delivery time bahut achha tha. Quality bhi top-notch thi.",
        image:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Cake Decoration Tips from Our Customers",
        date: "August 9, 2025",
        author: "Neha Verma",
        excerpt:
            "Ghar par cake decorate karna chahte hain? Yeh kuch simple tips hain jo humare customers ne share kiye hain.",
        image:
            "https://i.ytimg.com/vi/oKES4lujicE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBSoZItdT6ZWz5BbYv_rAdbZj6ZpQ",
    },
    {
        id: 3,
        title: "Why Our Customers Love Our Custom Cakes",
        date: "August 5, 2025",
        author: "Pooja Singh",
        excerpt:
            "Custom cakes banwane ka process bahut smooth hai. Har detail par dhyan diya jata hai.",
        image:
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    },
];

const ads = [
    {
        id: 1,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-mtDlE2LUzd-esoo8Oglprcejz2JQ7L8NA&s",
        link: "#",
        alt: "Special Dinner Plage",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
        link: "#",
        alt: "Free Delivery Offer",
    },
];

const posterContent = {
    title: "Celebrate Every Moment with Perfect Gifts!",
    subtitle: "From birthdays to anniversaries, we have gifts for all occasions.",
    buttonText: "Order Your Gift",
    image:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=81https://www.vecteezy.com/vector-art/34962800-horizontal-promotion-banner-with-3d-big-beautiful-present-box-web-page-for-gift-shop-store",
};



function Blog() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <>
            <div className="container my-10 min-h-screen bg-gray-50 px-6 md:px-20 py-12">
                <div className="row">
                    <div className="col">
                        <div
                            className="relative rounded-lg overflow-hidden mb-16 shadow-lg"
                            style={{ maxHeight: "400px" }}
                        >
                            <img
                                src='https://static.vecteezy.com/system/resources/thumbnails/034/962/728/small/advertising-poster-for-gift-shop-online-store-with-button-view-more-vector.jpg'
                                alt="Poster"
                                className="w-full h-full object-cover brightness-75"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                                    {posterContent.title}
                                </h1>
                                <p className="mt-4 text-xl md:text-2xl text-white drop-shadow-md">
                                    {posterContent.subtitle}
                                </p>
                                <button
                                    onClick={() => alert("Order page coming soon!")}
                                    className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
                                >
                                    {posterContent.buttonText}
                                </button>
                            </div>
                        </div>
                        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ads.map((ad) => (
                                <a
                                    key={ad.id}
                                    href={ad.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src={ad.image}
                                        alt={ad.alt}
                                        className="w-full h-48 object-cover"
                                    />
                                </a>
                            ))}
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                Customer Stories & Tips
                            </h2>
                            <div className="grid gap-10 md:grid-cols-3">
                                {blogData.map((post) => (
                                    <article
                                        key={post.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-4">
                                                {post.date} &mdash; By {post.author}
                                            </p>
                                            <p className="text-gray-700">{post.excerpt}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Blog;