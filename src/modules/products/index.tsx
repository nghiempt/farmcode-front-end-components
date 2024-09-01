'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import Link from "next/link";
import Image from "next/image";
import { truncateText } from "@/utils/helper";

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
}

const SkeletonCard = () => (
    <Card className="p-2 bg-gray-200 shadow-md rounded-lg flex flex-col items-center justify-between h-[300px] animate-pulse">
        <div className="w-full h-40 bg-gray-300 rounded-lg mb-3"></div>
        <div className="flex justify-between w-full px-2">
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
        </div>
        <div className="w-full pl-2 pr-2 h-10 bg-gray-300 rounded mb-3"></div>
        <div className="w-full h-8 bg-gray-300 rounded"></div>
    </Card>
);

export function ProductsPage() {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([] as any);

    const init = () => {
        setTimeout(() => {
            setProducts(
                [
                    { id: 1, name: "Product 1", price: "$10", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
                    { id: 2, name: "Product 2", price: "$20", description: "Description 2", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
                    { id: 3, name: "Product 3", price: "$30", description: "Description 3", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
                    { id: 4, name: "Product 4", price: "$40", description: "Description 4", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
                    { id: 5, name: "Product 5", price: "$50", description: "Description 5", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
                    { id: 6, name: "Product 6", price: "$60", description: "Description 6", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
                ]
            )
            setLoading(false)
        }, 1000);
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 bg-gray-100 rounded-lg px-4 py-6 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {loading ? (
                    Array(8).fill(0).map((_, index) => <SkeletonCard key={index} />)
                ) : (
                    products?.map((product: Product, index: any) => (
                        <Link href={`/products/${product?.id}`} key={index}>
                            <Card
                                className="p-2 bg-white shadow-md rounded-lg flex flex-col items-center justify-between transform transition-transform hover:scale-105 h-[300px]"
                            >
                                <Image
                                    src={product?.imageUrl}
                                    alt={product?.name}
                                    width={100}
                                    height={50}
                                    priority={true}
                                    className="w-full h-40 object-cover rounded-lg mb-3 transition-opacity hover:opacity-90"
                                />
                                <div className="flex justify-between w-full px-2">
                                    <h2 className="text-sm font-bold mb-2">{product?.name}</h2>
                                    <p className="text-sm font-bold mb-2">{product?.price}</p>
                                </div>
                                <p className="pl-2 pr-2 text-xs text-gray-600 text-left mb-3">
                                    {truncateText(product?.description, 60)}
                                </p>
                                <Button className="w-full">
                                    Buy now
                                </Button>
                            </Card>
                        </Link>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
}
