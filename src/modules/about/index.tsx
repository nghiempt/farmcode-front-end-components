'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { UserRound } from "lucide-react"
import { ClientSay } from "./client-say"

export function AboutPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center text-[#6D758F]">
            <Header />
            <div className="flex flex-col justify-center items-center mb-8 mt-10">
                <div className="w-full max-w-xs text-2xl font-extrabold mb-1 text-center">Meet our talented team</div>
                <div className="w-full max-w-xs text-xs font-medium text-center">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
                </div>
            </div>
            <div className="flex flex-col justify-center items-center grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-10 mb-10">
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="bg-gray-100 p-4 rounded-full inline-flex mb-2">
                        <UserRound />
                    </div>
                    <div className="text-sm font-semibold">Brian Clark</div>
                    <div className="text-xs font-semibold text-[#B4B9C9]">CEO & Founder</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="bg-gray-100 p-4 rounded-full inline-flex mb-2">
                        <UserRound />
                    </div>
                    <div className="text-sm font-semibold">Stephanie Powell</div>
                    <div className="text-xs font-semibold text-[#B4B9C9]">VP of Finance</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="bg-gray-100 p-4 rounded-full inline-flex mb-2">
                        <UserRound />
                    </div>
                    <div className="text-sm font-semibold">Christopher White</div>
                    <div className="text-xs font-semibold text-[#B4B9C9]">VP of Product</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="bg-gray-100 p-4 rounded-full inline-flex mb-2">
                        <UserRound />
                    </div>
                    <div className="text-sm font-semibold">Emily Miller</div>
                    <div className="text-xs font-semibold text-[#B4B9C9]">VP of HR</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="bg-gray-100 p-4 rounded-full inline-flex mb-2">
                        <UserRound />
                    </div>
                    <div className="text-sm font-semibold">Michael Davis</div>
                    <div className="text-xs font-semibold text-[#B4B9C9]">VP of Sales</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="bg-gray-100 p-4 rounded-full inline-flex mb-2">
                        <UserRound />
                    </div>
                    <div className="text-sm font-semibold">William Anderson</div>
                    <div className="text-xs font-semibold text-[#B4B9C9]">VP of Business</div>
                </div>
            </div>
            <ClientSay />
            <Footer />
        </div>
    )
}
