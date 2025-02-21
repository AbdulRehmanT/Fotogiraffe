"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [isLeft, setIsLeft] = useState(true);
  const review = [
    {
      testimonial:
        "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
      name: "Jennifer Austin",
      occupation: "Local business owner",
      rating: 4,
    },
    {
      testimonial:
        "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
      name: "Jennifer Austin",
      occupation: "Local business owner",
      rating: 5,
    },
    {
      testimonial:
        "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
      name: "Jennifer Austin",
      occupation: "Local business owner",
      rating: 2,
    },
    {
      testimonial:
        "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
      name: "Jennifer Austin",
      occupation: "Local business owner",
      rating: 3,
    },
    {
      testimonial:
        "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
      name: "Jennifer Austin",
      occupation: "Local business owner",
      rating: 4,
    },
  ];

  const handlePrev = () => setIsLeft(true);
  const handleNext = () => setIsLeft(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLeft((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 mt-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-medium cabin-font md:text-5xl">
              What our clients think about us? ⭐
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              We have different sizes, covers and shapes to preserve your
              memories
            </p>
          </div>

          <div className="flex gap-2">
            <button
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white"
              onClick={handlePrev} 
            >
              <ChevronLeft />
            </button>
            <button
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white"
              onClick={handleNext} 
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isLeft ? "translate-x-0" : "translate-x-[-25%]" 
            }`}
          >
            {review.map((review, index) => (
              <TestimonialCard
                key={index}
                testimonial={review.testimonial}
                name={review.name}
                occupation={review.occupation}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
