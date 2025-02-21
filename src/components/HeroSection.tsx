import { Button } from ".";
import { ArrowUpRight } from "lucide-react";
import Image     from "next/image";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-16 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl lg:text-6xl tracking-tight leading-tight font-bold">
            Where Memories Come Alive
          </h1>
          <em className="text-xl text-gray-600">
            ~FotoGiraffe's Video Photo Books~
          </em>
          <p className="text-gray-600 max-w-[540px]">
            Turn your memories into a beautifully printed album with scannable
            QR codes that bring your videos to life. Simply upload, customize,
            and order—your Interactive album is on its way!
          </p>
          <p className="text-gray-600">
            Creating amazing video books for as little as £17.99!
          </p>
          <Button
            title="Start your album"
            href="/"
            icon={<ArrowUpRight size={20} />}
          />
        </div>
        <div className="relative mb-4 0">
          <div className="md:mb-40 gap-4 max-w-[fit-content] mx-auto">
            <div className="space-y-4 gap-6 flex">
              <div className="bg-[#70FAC333] rounded-lg p-4 md:w-[160px] md:h-[230px]"></div>
              <Image src={'/assets/pic-02.webp'} alt={'pic-02'} width={350} height={350} className="w-[350px] h-full" />
            </div>
            <div className="pt-8 space-y-4 relative flex gap-6">
              <Image src={'/assets/pic-01.webp'} alt={'pic-01'} width={250} height={250} className="absolute -top-24" />
              <Image src={'/assets/pic-03.webp'} alt={'pic-03'} width={250} height={265} className="absolute top-2 right-0"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
