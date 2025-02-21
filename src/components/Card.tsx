import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, desc }) => {
  return (
    <div className="border-[#E8E7E3] border-2 rounded-3xl p-8 shadow-sm w-">
      <Image
        src={src}
        width={60}
        height={60}
        alt={alt}
        className="bg-black rounded-full p-4 flex items-center justify-center mb-6 h-20 w-20"
      />

      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default Card;
