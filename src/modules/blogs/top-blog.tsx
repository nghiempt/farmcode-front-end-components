'use client'

import { Separator } from "@radix-ui/react-separator"
import { UserRound } from "lucide-react"


export function TopBlog() {
    return (
        <div className="w-full hidden lg:flex flex-col justify-start items-center text-[#6D758F]">
            <div className="flex flex-col justify-center items-stretch grid grid-cols-7">
                <div className="col-span-3 flex justify-center items-center bg-gray-200 rounded-l-lg p-10 text-center flex-grow">
                    <div className="border-2 border-gray-300 p-4 rounded-sm inline-flex mb-2">
                        <UserRound />
                    </div>
                </div>
                <div className="col-span-4 p-8 border border-t-gray-300 border-r-gray-300 border-b-gray-300 rounded-r-lg">
                    <div className="text-center md:text-start lg:text-start text-lg font-bold mb-2">Web design best practices: Optimizing speed</div>
                    <div className="text-center md:text-start lg:text-start text-xs font-medium mb-3">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
                    </div>
                    <Separator className="bg-[#E1E4ED] w-full h-[1px] mb-3" />
                    <div className="flex items-center gap-4 relative">
                        <div className="text-center p-1 border border-gray-300 rounded-sm text-xs font-semibold">Category</div>

                        <div className="text-center text-xs absolute right-3">Jan 24, 2024</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
