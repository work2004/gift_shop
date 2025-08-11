import React from "react";

function Footer() {
    return (
        <>
            <div className="bg-pink-700 text-pink-100 py-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About GiftShop</h3>
                        <p className="text-pink-200">
                            We offer beautiful gifts for every occasion. Quality products and
                            excellent customer service are our priority.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>123 Gift Street, Happy Town</p>
                        <p>Phone: +91 12345 67890</p>
                        <p>Email: support@giftshop.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-300 transition"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://facebook.com/yourpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-300 transition"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://pinterest.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-300 transition"
                            >
                                Pinterest
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center text-pink-300 text-sm">
                    &copy; {new Date().getFullYear()} GiftShop. All rights reserved.
                </div>
            </div>
        </>
    );
}
export default Footer
