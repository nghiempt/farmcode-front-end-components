'use client'

import { useState, useEffect } from "react";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { TopBlog } from "./top-blog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogList } from "./blog-list";

interface Blog {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    date: Date;
}

interface BlogCategory {
    id: number;
    name: string;
}

const blogCategories: BlogCategory[] = [
    { id: 1, name: "Health" },
    { id: 2, name: "Travel" },
    { id: 3, name: "Tech" },
    { id: 4, name: "Life" },
];

export function BlogsPage() {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('health');

    const init = () => {
        setTimeout(() => {
            setBlogs([
                {
                    id: 1,
                    title: "Understanding Blockchain",
                    description: "A comprehensive guide to understanding blockchain technology. This article delves into the core principles of blockchain, explaining its architecture, types, and the transformative potential it holds for various industries. Learn about distributed ledger technology, consensus mechanisms, and how blockchain ensures transparency and security in transactions.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Tech",
                    date: new Date("2024-09-01"),
                },
                {
                    id: 2,
                    title: "Future of AI",
                    description: "An in-depth exploration of the advancements in artificial intelligence (AI) and what the future holds for this rapidly evolving field. From machine learning and deep learning to ethical considerations and AI's impact on various sectors, this article provides a thorough overview of current trends and future possibilities in AI development.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Tech",
                    date: new Date("2024-09-05"),
                },
                {
                    id: 3,
                    title: "Healthy Eating",
                    description: "Maintaining a balanced diet is key to a healthy lifestyle. This article covers the essentials of healthy eating, including tips on portion control, understanding macronutrients, and choosing foods that promote overall well-being. Learn how to incorporate more fruits, vegetables, and whole grains into your diet, and discover delicious, nutritious recipes that make healthy eating enjoyable.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Health",
                    date: new Date("2024-09-10"),
                },
                {
                    id: 4,
                    title: "Budget Travel",
                    description: "Traveling on a budget doesn't mean missing out on amazing experiences. This guide provides practical advice on how to explore new places without breaking the bank. Learn about affordable travel destinations, budgeting tips, cost-saving hacks, and strategies to find cheap flights and accommodations. Whether you're planning a solo adventure or a family vacation, this article will help you make the most of your travel budget.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Travel",
                    date: new Date("2024-09-15"),
                },
                {
                    id: 5,
                    title: "Meditation Basics",
                    description: "Meditation is a powerful practice that can help reduce stress, improve focus, and enhance overall well-being. This article introduces the basics of meditation, including various techniques such as mindfulness, transcendental meditation, and guided visualization. Learn how to start a meditation practice, the benefits of regular meditation, and tips for overcoming common challenges beginners face.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Life",
                    date: new Date("2024-09-20"),
                },
                {
                    id: 6,
                    title: "Top 10 Yoga Poses for Beginners",
                    description: "Yoga is an excellent way to enhance physical fitness and mental clarity. This article highlights the top 10 yoga poses perfect for beginners, providing step-by-step instructions and tips on proper alignment and breathing techniques. Discover the benefits of each pose, from increasing flexibility and strength to reducing stress and promoting relaxation.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Health",
                    date: new Date("2024-09-25"),
                },
                {
                    id: 7,
                    title: "Exploring the Alps",
                    description: "A journey through the majestic Alps, this article serves as a comprehensive guide for adventure seekers and nature enthusiasts. Discover the best hiking routes, scenic spots, and outdoor activities that the Alps have to offer. From picturesque villages to challenging mountain trails, learn how to prepare for an unforgettable alpine adventure.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Travel",
                    date: new Date("2024-09-30"),
                },
                {
                    id: 8,
                    title: "The Rise of Electric Vehicles",
                    description: "Electric vehicles (EVs) are revolutionizing the automotive industry. This article explores the growth of EV technology, the benefits of transitioning to electric cars, and the challenges facing widespread adoption. Learn about the latest advancements in battery technology, government policies promoting EVs, and how electric vehicles contribute to a sustainable future.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Tech",
                    date: new Date("2024-10-05"),
                },
                {
                    id: 9,
                    title: "Healthy Snacking: What to Eat",
                    description: "Snacking can be a part of a healthy diet when done right. This article offers a guide to healthy snacking options that keep you satisfied between meals. Learn about nutritious snack ideas that are low in calories but high in protein and fiber, and discover how to make better choices to support your health and fitness goals.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Health",
                    date: new Date("2024-10-10"),
                },
                {
                    id: 10,
                    title: "10 Tips for Solo Travel",
                    description: "Traveling alone can be an incredibly rewarding experience. This article provides expert tips for solo travelers to ensure safety and maximize enjoyment. From choosing the right destination and packing essentials to navigating new cultures and making friends on the road, discover how to make your solo adventure an unforgettable journey.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Travel",
                    date: new Date("2024-10-15"),
                },
                {
                    id: 11,
                    title: "Developing a Growth Mindset",
                    description: "A growth mindset is essential for personal and professional development. This article explains what a growth mindset is, why it matters, and how you can cultivate it. Learn practical strategies to embrace challenges, learn from feedback, and persist in the face of setbacks, all of which are key to achieving long-term success.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Life",
                    date: new Date("2024-10-20"),
                },
                {
                    id: 12,
                    title: "Cryptocurrency Trading Tips",
                    description: "Cryptocurrency trading has gained popularity as an investment strategy. This article offers essential tips for trading cryptocurrencies effectively, including understanding market trends, managing risks, and avoiding common pitfalls. Learn how to develop a trading strategy, analyze market signals, and choose the right platforms for your investment needs.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Tech",
                    date: new Date("2024-10-25"),
                },
                {
                    id: 13,
                    title: "Mental Health Awareness",
                    description: "Mental health is a crucial aspect of overall well-being. This article aims to raise awareness about mental health issues and provides tips on how to maintain good mental health. Learn about common mental health challenges, the importance of seeking help, and ways to build resilience and cope with stress and anxiety.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Health",
                    date: new Date("2024-10-30"),
                },
                {
                    id: 14,
                    title: "Backpacking Through Asia",
                    description: "Asia offers a wealth of travel experiences for backpackers. This comprehensive guide covers everything you need to know for backpacking through Asia, from planning your route and budgeting to understanding local cultures and staying safe. Discover the best destinations, hidden gems, and tips for an unforgettable journey through diverse landscapes and cultures.",
                    imageUrl: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg",
                    category: "Travel",
                    date: new Date("2024-11-05"),
                }
            ]
            )
            setLoading(false)
        }, 1000);
    }

    useEffect(() => {
        init()
    }, []);

    const filterBlogsByCategory = (category: string) => {
        return blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
            <Header />
            <div className="w-full md:w-2/3 lg:w-2/3 px-20 py-10 text-[#6D758F]">
                <div className="flex flex-col justify-center items-center mb-5">
                    <div className="w-full max-w-sm text-2xl font-extrabold mb-1 text-center">Expert web design advice</div>
                    <div className="w-full max-w-sm text-xs font-medium text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
                    </div>
                </div>
                <TopBlog />
                <Tabs defaultValue={activeCategory} className="w-full mt-8">
                    <div className="w-full flex lg:relative mb-5 justify-center items-center lg:justify-start items-start">
                        <div className="max-w-sm text-2xl font-extrabold mb-1 text-start hidden lg:block">Latest articles</div>
                        <div className="lg:absolute lg:right-0 flex ">
                            <TabsList>
                                {blogCategories.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.name.toLowerCase()}
                                        onClick={() => {
                                            setActiveCategory(category.name.toLowerCase())
                                        }}
                                    >
                                        {category.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                    </div>
                    {blogCategories.map((category) => (
                        <TabsContent key={category.id} value={category.name.toLowerCase()}>
                            <BlogList blogs={filterBlogsByCategory(category.name)} loading={loading} />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
            <Footer />
        </div>
    );
}
