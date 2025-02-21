import React from "react";
import Image from "next/image";

interface StepsCardProps {
  alt: string;
  src: string;
  title: string;
  desc: string;
  width: number;
  height: number;
  arrowSrc?: string | null;
  arrowAlt: string;
  arrowClasses: string | undefined;
  baseClasses: string | undefined;
  alt2: string;
  src2: string;
  title2: string;
  desc2: string;
  width2: number;
  height2: number;
  arrowSrc2?: string | null;
  arrowAlt2: string;
  arrowClasses2: string | undefined;
  baseClasses2: string | undefined;
}

const StepsCard: React.FC<StepsCardProps> = ({
  alt,
  src,
  title,
  desc,
  width,
  height,
  arrowSrc,
  arrowAlt,
  arrowClasses,
  baseClasses,
  alt2,
  src2,
  title2,
  desc2,
  width2,
  height2,
  arrowSrc2,
  arrowAlt2,
  arrowClasses2,
  baseClasses2,
}) => {
  return (
    <>
      <div className="relative">
        {arrowSrc && (
          <div className={`absolute z-10 hidden lg:block ${arrowClasses}`}>
            <Image
              src={arrowSrc}
              alt={arrowAlt}
              width={100}
              height={100}
              className="w-full opacity-50"
            />
          </div>
        )}
        <div
          className={`py-12 px-16 h-full flex flex-col gap-4 ${baseClasses}`}
        >
          <Image
            alt={alt}
            width={width}
            height={height}
            className="opacity-50"
            src={src}
          />
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
      </div>
      <div className="relative">
        {arrowSrc2 && (
          <div className={`absolute z-10 hidden lg:block ${arrowClasses2}`}>
            <Image
              src={arrowSrc2}
              alt={arrowAlt2}
              width={100}
              height={100}
              className="w-full opacity-50"
            />
          </div>
        )}
        <div
          className={`py-12 px-16 h-full flex flex-col gap-4 ${baseClasses2}`}
        >
          <h3 className="text-xl font-medium">{title2}</h3>
          <p className="text-gray-600 text-sm">{desc2}</p>
          <Image
            alt={alt2}
            width={width2}
            height={height2}
            className="opacity-50"
            src={src2}
          />
        </div>
      </div>
    </>
  );
};

export default StepsCard;
