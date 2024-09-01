// src/app/products/[id]/page.tsx
'use client'
import { useParams } from 'next/navigation'; // Đúng cách sử dụng
import { ProductDetailPage } from '@/modules/product';

const products = [
    { id: 1, name: "Product 1", price: "$10", description: "Description 1", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
    { id: 2, name: "Product 2", price: "$20", description: "Description 2", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
    { id: 3, name: "Product 3", price: "$30", description: "Description 3", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
    { id: 4, name: "Product 4", price: "$40", description: "Description 4", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
    { id: 5, name: "Product 5", price: "$50", description: "Description 5", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
    { id: 6, name: "Product 6", price: "$60", description: "Description 6", imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg" },
];

export default function ProductDetail() {
    const params = useParams(); // Sử dụng useParams để lấy tham số từ URL
    const { id } = params;

    const product = products.find(p => p.id === parseInt(id as string));
    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
            <ProductDetailPage />
        </div>
    );
}
