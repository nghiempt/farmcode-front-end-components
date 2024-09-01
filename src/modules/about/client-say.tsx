'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Star, UserRound } from "lucide-react";

export function ClientSay() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-sm text-2xl font-extrabold mb-1 text-center">What our clients have to say</div>
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-sm text-xs font-medium text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
        </div>
      </div>
      <div>
        <Carousel className="w-full max-w-xs md:max-w-4xl lg:max-w-4xl">
          <CarouselContent>
            <CarouselItem>
              <div className="p-8">
                <div className="flex flex-col justify-center md:items-stretch lg:items-stretch md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-8">
                  <div className="flex justify-center items-center bg-gray-100 p-10 rounded-lg text-center md:flex-grow lg:flex-grow">
                    <div className="border-2 border-gray-300 p-4 rounded-sm inline-flex mb-2">
                      <UserRound />
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-2 bg-gray-100 p-8">
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-1 mb-8">
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                    </div>
                    <div className="text-center md:text-start lg:text-start text-lg font-bold mb-4">"Revitalized my work approach"</div>
                    <div className="text-center md:text-start lg:text-start text-xs font-medium mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-4">
                      <div className="text-center md:text-start lg:text-start text-xs font-bold">Stephanie Powell</div>
                      <Separator orientation="vertical" className="h-4 bg-[#B4B9C9]" />
                      <div className="text-center md:text-start lg:text-start text-xs font-semibold">VP of Sales at SalesForce</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-8">
                <div className="flex flex-col justify-center md:items-stretch lg:items-stretch md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-8">
                  <div className="flex justify-center items-center bg-gray-100 p-10 rounded-lg text-center md:flex-grow lg:flex-grow">
                    <div className="border-2 border-gray-300 p-4 rounded-sm inline-flex mb-2">
                      <UserRound />
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-2 bg-gray-100 p-8">
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-1 mb-8">
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                    </div>
                    <div className="text-center md:text-start lg:text-start text-lg font-bold mb-4">"Revitalized my work approach"</div>
                    <div className="text-center md:text-start lg:text-start text-xs font-medium mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-4">
                      <div className="text-center md:text-start lg:text-start text-xs font-bold">Stephanie Powell</div>
                      <Separator orientation="vertical" className="h-4 bg-[#B4B9C9]" />
                      <div className="text-center md:text-start lg:text-start text-xs font-semibold">VP of Sales at SalesForce</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-8">
                <div className="flex flex-col justify-center md:items-stretch lg:items-stretch md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-8">
                  <div className="flex justify-center items-center bg-gray-100 p-10 rounded-lg text-center md:flex-grow lg:flex-grow">
                    <div className="border-2 border-gray-300 p-4 rounded-sm inline-flex mb-2">
                      <UserRound />
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-2 bg-gray-100 p-8">
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-1 mb-8">
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                    </div>
                    <div className="text-center md:text-start lg:text-start text-lg font-bold mb-4">"Revitalized my work approach"</div>
                    <div className="text-center md:text-start lg:text-start text-xs font-medium mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-4">
                      <div className="text-center md:text-start lg:text-start text-xs font-bold">Stephanie Powell</div>
                      <Separator orientation="vertical" className="h-4 bg-[#B4B9C9]" />
                      <div className="text-center md:text-start lg:text-start text-xs font-semibold">VP of Sales at SalesForce</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-8">
                <div className="flex flex-col justify-center md:items-stretch lg:items-stretch md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-8">
                  <div className="flex justify-center items-center bg-gray-100 p-10 rounded-lg text-center md:flex-grow lg:flex-grow">
                    <div className="border-2 border-gray-300 p-4 rounded-sm inline-flex mb-2">
                      <UserRound />
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-2 bg-gray-100 p-8">
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-1 mb-8">
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                    </div>
                    <div className="text-center md:text-start lg:text-start text-lg font-bold mb-4">"Revitalized my work approach"</div>
                    <div className="text-center md:text-start lg:text-start text-xs font-medium mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-4">
                      <div className="text-center md:text-start lg:text-start text-xs font-bold">Stephanie Powell</div>
                      <Separator orientation="vertical" className="h-4 bg-[#B4B9C9]" />
                      <div className="text-center md:text-start lg:text-start text-xs font-semibold">VP of Sales at SalesForce</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-8">
                <div className="flex flex-col justify-center md:items-stretch lg:items-stretch md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-8">
                  <div className="flex justify-center items-center bg-gray-100 p-10 rounded-lg text-center md:flex-grow lg:flex-grow">
                    <div className="border-2 border-gray-300 p-4 rounded-sm inline-flex mb-2">
                      <UserRound />
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-2 bg-gray-100 p-8">
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-1 mb-8">
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                      <Star className="h-5" color="#B4B9C9" fill="#B4B9C9" />
                    </div>
                    <div className="text-center md:text-start lg:text-start text-lg font-bold mb-4">"Revitalized my work approach"</div>
                    <div className="text-center md:text-start lg:text-start text-xs font-medium mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex justify-center md:justify-start lg:justify-start items-center gap-4">
                      <div className="text-center md:text-start lg:text-start text-xs font-bold">Stephanie Powell</div>
                      <Separator orientation="vertical" className="h-4 bg-[#B4B9C9]" />
                      <div className="text-center md:text-start lg:text-start text-xs font-semibold">VP of Sales at SalesForce</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div >
            <CarouselPrevious className="p-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              <ArrowLeft className="w-4 h-4 text-gray-500" />
            </CarouselPrevious>
          </div>
          <div >
            <CarouselNext className="p-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
