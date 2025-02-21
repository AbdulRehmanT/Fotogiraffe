import Image from "next/image";

interface ThemeForCardProps {
  src: string;
  alt: string;
  title: string;
}

const ThemeForCard: React.FC<ThemeForCardProps> = ({ src, alt, title }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          alt={alt}
          width={400}
          height={500}
          className="w-full object-cover aspect-[3/4]"
          src={src}
        />
      </div>
      <div className="absolute -bottom-20 left-1/2 drop-shadow-md -translate-x-1/2 w-4/5 bg-white z-10 p-2">
        <div className="w-5 bg-gradient-to-r from-[#FFFFFF] via-[#F7F7F7] to-[#ADADAD] h-full absolute -left-6 top-0"></div>
        <div className="w-2.5 bg-gradient-to-r from-[#FFFFFF] to-[#C9C9C9] h-full absolute -left-2 top-0"></div>
        <Image
          alt={alt}
          width={200}
          height={150}
          className="w-full h-44 object-cover rounded-xs"
          src={src}
        />
        <p className="text-center mt-2 text-sm font-medium">{title}</p>
      </div>
    </div>
  );
};

export default ThemeForCard;
