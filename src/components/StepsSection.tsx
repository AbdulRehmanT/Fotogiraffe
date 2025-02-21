import StepsCard from "./StepsCard";

const StepsSection = () => {
  const cardData = [
    {
      arrowSrc: "assets/arrow_line.svg",
      arrowAlt: "Arrow-line",
      alt: "style",
      width: 64,
      height: 64,
      src: "/assets/style.svg",
      title: "Choose a book style",
      desc: "Choose from a range of size options in hard and soft cover and select a layout",
      baseClasses: "rounded-l-2xl bg-[#FEF6EF]",
      arrowClasses: "-right-8 w-[72%] top-10",
      arrowSrc2: "assets/arrow_line_up.svg",
      arrowAlt2: "Arrow-line-up",
      alt2: "style",
      width2: 64,
      height2: 64,
      src2: "/assets/gallery.svg",
      title2: "Upload your media",
      desc2:
        " Upload your photos and videos to create a custom album with scannable QR codes",
      arrowClasses2: "-right-10 w-[67%] top-3 transistion-transform translate-y-[80%]",
      baseClasses2: "bg-[#F2FBFF]",
    },
    {
      arrowSrc: "assets/arrow_line.svg",
      arrowAlt: "Arrow-line",
      alt: "book",
      width: 64,
      height: 64,
      src: "/assets/book.svg",
      title: "Generate photo book",
      desc: "With the click of a button, Fotogiraffe's smart software generates your photo book",
      baseClasses: "bg-[#FFFDED]",
      arrowClasses: "top-10 -right-8 -translate-y-3",
      arrowSrc2: null,
      arrowAlt2: "Arrow-line-up",
      alt2: "review",
      width2: 64,
      height2: 64,
      src2: "/assets/review.svg",
      title2: "Review and purchase",
      desc2:
        "Preview your book, use online editor to add text, emojis, backgrounds and edit photos",
      arrowClasses2: "",
      baseClasses2: "rounded-r-2xl bg-[#F1FBEF]",
    },
  ];
  return (
    <section className="py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-[56px] font-medium mb-16">
          Get your photo book in 4 easy steps 😮
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((data, index) => (
            <StepsCard
              key={index}
              alt={data.alt}
              arrowAlt={data.arrowAlt}
              arrowClasses={data.arrowClasses}
              desc={data.desc}
              height={64}
              width={64}
              src={data.src}
              title={data.title}
              arrowSrc={data.arrowSrc}
              baseClasses={data.baseClasses}
              alt2={data.alt2}
              arrowAlt2={data.arrowAlt2}
              arrowClasses2={data.arrowClasses2}
              desc2={data.desc2}
              height2={64}
              width2={64}
              src2={data.src2}
              title2={data.title2}
              arrowSrc2={data.arrowSrc2}
              baseClasses2={data.baseClasses2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
