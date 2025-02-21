import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  occupation: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  testimonial,
  name,
  occupation,
}) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);
  return (
    <div className="w-full md:w-1/2 lg:w-1/4  flex-shrink-0 px-4 transition-transform duration-500 ease-in-out">
      <div className="bg-[#F8F9FA] rounded-xs px-8 py-10 shadow-sm h-full">
        <div className="flex gap-1 mb-4">
          {stars.map((isFilled, index) => (
            <Star
              key={index}
              size={24}
              fill={isFilled ? "black" : "none"}
              stroke={isFilled ? "none" : "currentColor"}
            />
          ))}
        </div>
        <p className="text-gray-600 font-medium italic pb-4 border-b-2 text-sm mb-4">
          "{testimonial}"
        </p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{occupation}</p>
        </div>
      </div>
    </div>
     
  );
};

export default TestimonialCard;
