
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { truncateText } from "@/utils/helper";
import { Separator } from '@radix-ui/react-separator';

interface Blog {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    date: Date;
}

interface BlogListProps {
    blogs: Blog[];
    loading: boolean;
}

const SkeletonCard = () => (
    <Card className="p-2 bg-gray-200 shadow-md rounded-lg flex flex-col items-center justify-between h-[300px] animate-pulse">
        <div className="w-full h-40 bg-gray-300 rounded-lg mb-3"></div>
        <div className="flex justify-between w-full px-2 bg-gray-300"></div>
        <div className="w-full pl-2 pr-2 h-10 bg-gray-300 rounded mb-2"></div>
        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
    </Card>
);

export const BlogList: React.FC<BlogListProps> = ({ blogs, loading }) => {
    return (
        <div className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
                Array(8).fill(0).map((_, index) => <SkeletonCard key={index} />)
            ) : (
                blogs.map((blog) => (
                    <Link href={`/products/${blog.id}`} key={blog.id} passHref>
                        <Card className="rounded-sm flex flex-col transform transition-transform hover:scale-105 h-[400px] text-[#6D758F]">
                            <div className='w-full bg-gray-200 p-10 flex justify-center items-center h-[200px]'>
                                <Image
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    width={50}
                                    height={50}
                                    priority={true}
                                    className="max-h-xs object-cover rounded-sm mb-3 transition-opacity hover:opacity-90 border border-gray-300"
                                />
                            </div>
                            <div className='flex flex-col justify-center p-3 text-start'>
                                <div className="text-lg font-bold mb-2 min-h-[56px] max-h-[56px] text-clip overflow-hidden ...">
                                    {truncateText(blog.title, 45)}
                                </div>
                                <div className="text-xs font-medium text-left min-h-[64px] max-h-[64px] text-clip overflow-hidden ...">
                                    {truncateText(blog.description, 100)}
                                </div>
                                <Separator className="bg-[#E1E4ED] w-full h-[1px] mb-5" />
                                <div className='flex relative'>
                                    <p className="text-xs font-semibold text-left">
                                        {blog.category}
                                    </p>
                                    <p className="text-xs font-medium text-right absolute right-0">
                                        {blog.date.toDateString()}</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))
            )}
        </div >
    );
};
