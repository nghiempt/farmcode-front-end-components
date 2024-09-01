'use client'
import { Button } from "@/components/ui/button";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

// Dummy product data (replace with actual data fetching)
const product = {
    id: 1,
    name: "Premium Leather Jacket",
    price: "$250",
    description:
        "This premium leather jacket is crafted with the finest materials, ensuring both style and durability. Perfect for those who value quality and timeless fashion.",
    imageUrl:
        "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
    details: [
        "100% Genuine Leather",
        "Available in multiple sizes",
        "Classic fit",
        "Dry clean only",
        "Made in Italy",
    ],
    relatedProducts: [
        { id: 2, name: "Leather Wallet", price: "$50", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
        { id: 3, name: "Leather Belt", price: "$70", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
        { id: 4, name: "Leather Boots", price: "$150", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
    ],
};

export function ProductDetailPage() {
    const params = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const handleBuyNow = () => {
        console.log("Buy now clicked");
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
            <Header />
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg py-10 px-4 md:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex justify-center">
                        {loading ? (
                            <div className="w-full max-w-xs md:max-w-md h-64 bg-gray-300 animate-pulse rounded-lg"></div>
                        ) : (
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            />
                        )}
                    </div>
                    <div className="flex flex-col justify-between space-y-6">
                        <div>
                            {loading ? (
                                <div className="space-y-3">
                                    <div className="h-8 bg-gray-300 animate-pulse rounded-md"></div>
                                    <div className="h-6 bg-gray-300 animate-pulse rounded-md"></div>
                                    <div className="h-24 bg-gray-300 animate-pulse rounded-md"></div>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                                        {product.name}
                                    </h1>
                                    <p className="text-2xl text-gray-700 font-semibold mb-6">
                                        {product.price}
                                    </p>
                                    <p className="text-md text-gray-600 mb-8 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-2">
                                        {product.details.map((detail, index) => (
                                            <li key={index} className="text-sm">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <Button
                            className={`w-full py-3 ${
                                loading ? 'bg-gray-300' : 'bg-black'
                            } text-white rounded-md shadow-md border ${
                                loading ? '' : 'border-black hover:bg-white hover:text-black hover:shadow-lg transition-colors duration-200 ease-in-out'
                            }`}
                            onClick={handleBuyNow}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Buy Now'}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg py-10 px-4 md:px-8 mt-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    {loading ? 'Loading Related Products...' : 'Related Products'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loading
                        ? Array(4)
                              .fill(0)
                              .map((_, index) => (
                                  <div key={index} className="bg-gray-300 shadow-md rounded-lg p-5 flex flex-col items-center animate-pulse">
                                      <div className="w-full h-40 bg-gray-400 rounded-lg mb-4"></div>
                                      <div className="h-4 bg-gray-400 rounded-md w-3/4 mb-2"></div>
                                      <div className="h-4 bg-gray-400 rounded-md w-1/2 mb-4"></div>
                                      <div className="w-full h-8 bg-gray-400 rounded-md"></div>
                                  </div>
                              ))
                        : product.relatedProducts.map((relatedProduct) => (
                              <div key={relatedProduct.id} className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                  <img
                                      src={relatedProduct.imageUrl}
                                      alt={relatedProduct.name}
                                      className="w-full h-40 object-cover rounded-lg mb-4 transition-opacity hover:opacity-90"
                                  />
                                  <h3 className="text-md font-semibold text-gray-800 mb-2">
                                      {relatedProduct.name}
                                  </h3>
                                  <p className="text-sm text-gray-600 mb-4">
                                      {relatedProduct.price}
                                  </p>
                                  <Button
                                      className="w-full py-2 bg-black text-white rounded-md shadow-sm border border-black hover:bg-white hover:text-black hover:shadow-md transition-colors duration-200 ease-in-out text-sm"
                                      onClick={() => window.location.href = `/products/${relatedProduct.id}`}
                                  >
                                      View Product
                                  </Button>
                              </div>
                          ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
