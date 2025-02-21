"use client";

import { TabsContent, Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import ThemeForCard from "./ThemeForCard";

const tabContent: {
  [key: string]: { src: string; alt: string; title: string }[];
} = {
  "Valentine's Day": [
    {
      src: "/assets/frame_theme.webp",
      alt: "Valentine's Day image 1",
      title: "Valentine's Day 1",
    },
    {
      src: "/assets/frame_theme.webp",
      alt: "Valentine's Day image 2",
      title: "Valentine's Day 2",
    },
    {
      src: "/assets/frame_theme.webp",
      alt: "Valentine's Day image 2",
      title: "Valentine's Day 2",
    },
  ],
  Travel: [
    {
      src: "/assets/frame_theme.webp",
      alt: "Travel image",
      title: "Travel",
    },
  ],
  Marriage: [
    {
      src: "/assets/frame_theme.webp",
      alt: "Marriage theme image",
      title: "Marriage",
    },
  ],
  "Year in Review": [
    {
      src: "/assets/frame_theme.webp",
      alt: "Year in Review theme image",
      title: "Year in Review",
    },
  ],
  Wedding: [
    {
      src: "/assets/frame_theme.webp",
      alt: "Wedding theme image",
      title: "Wedding",
    },
  ],
  Family: [
    {
      src: "/assets/frame_theme.webp",
      alt: "Family theme image",
      title: "Family",
    },
  ],
};

const ThemeForSection = () => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(tabContent)[0]);

  return (
    <section className="py-16 bg-[#F8F7F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium mb-8 md:text-5xl">
          Themes for all your favorite memories 😱
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="space-x-4">
              {Object.keys(tabContent).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={`px-4 py-2 text-sm md:text-[18px] transition-colors ${
                    selectedTab === tab
                      ? "text-[#212121] font-medium border-b-4 border-gray-900"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {tabContent[selectedTab].map((item, index) => (
                <ThemeForCard
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                />
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ThemeForSection;
