"use client";
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight, Expand, Folder, StretchHorizontal } from "lucide-react";
import Button from "./Button";

const BookSection = () => {
  return (
    <section className="py-16 bg-[#F8F7F3]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-center space-y-1 mx-auto">
          <h2 className="text-5xl font-medium">We have variety of books!🤩</h2>
          <p className="text-[#4D4D4D]">
            We have different sizes, covers and shapes to preserve your memories
          </p>
        </div>
        <div className="my-8 flex flex-wrap justify-center">
          <Tabs defaultValue="large">
            <TabsList className="">
              <TabsTrigger
                value="large"
                className="px-8 py-2 text-md text-black bg-[#eae9e5] rounded-none rounded-l-lg data-[state=active]:bg-[#70fac3] "
              >
                Large
              </TabsTrigger>
              <TabsTrigger
                value="medium"
                className="px-8 py-2 text-md text-black bg-[#eae9e5] rounded-none   data-[state=active]:bg-[#70fac3]"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                value="small"
                className="px-8 py-2 text-md text-black bg-[#eae9e5] rounded-none rounded-r-lg  data-[state=active]:bg-[#70fac3]"
              >
                Small
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <Expand className="w-4 h-4" />
            29×22cm (A4)
          </span>
          <span>|</span>
          <span className="flex items-center gap-2">
            <StretchHorizontal className="w-4 h-4" />
            Landscape and portrait
          </span>
          <span>|</span>
          <span className="flex items-center gap-2">
            <Folder className="w-4 h-4" />
            Hard and soft covers
          </span>
          <span>|</span>
          <span className="flex items-center gap-2">
            24 pages included in standard price (upto 140 pages)
          </span>
        </div>
        <div className="relative max-w-4xl mx-auto my-6">
          <Tabs defaultValue="large">
            <TabsContent value="large">
              <Carousel
                className="w-full max-w-4xl px-4"
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Image
                        className="w-full"
                        src={"/assets/frame1.webp"}
                        alt={"frame-pic"}
                        width={400}
                        height={400}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-black text-white h-12 w-12" />
                <CarouselNext className="bg-black text-white h-12 w-12" />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex item-center justify-center w-full">
          <Button
            title="Start your album"
            href="/"
            icon={<ArrowUpRight size={20} />}
          />
        </div>
      </div>
    </section>
  );
};

export default BookSection;
