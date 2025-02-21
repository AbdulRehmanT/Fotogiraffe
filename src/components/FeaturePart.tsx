import { Card } from ".";

const FeaturePart = () => {
  const feature = [
    {
      src: "/assets/player.svg",
      title: "Videos in Your Photo Books",
      desc: "Your photo album isn't just printed pictures—it comes alive with QR codes that play your videos instantly when scanned.",
      alt: "photo-books",
    },
    {
        src: "/assets/laptop.svg",
        title: "Easy-to-Use Software",
        desc: "Our intuitive platform makes designing your photo book simple and hassle-free—no tech skills required!",
        alt: "software",
      },
      {
        src: "/assets/custom-size.svg",
        title: "Customization & Size Options",
        desc: "Choose from a variety of sizes, styles, and layouts to create an album that is unique and fits your style.",
        alt: "customize-size-options",
      },
  ];

  return (
    <section className="container mx-auto py-16">
      <div className="space-y-4 text-left mb-12 md:pr-10">
        <h1 className="text-5xl font-semibold">What sets us apart? 🤔</h1>
        <p className="text-gray-600 text-xl">
          Our albums feature QR codes that let you scan and watch your videos,
          bringing your memories to life
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {feature.map((feature) => (
          <Card
            src={feature.src}
            alt={feature.alt}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturePart;
