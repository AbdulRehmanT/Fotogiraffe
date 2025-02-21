import {BookSection, FeaturePart, HeroSection, QuesSection, StepsSection, TestimonialSection, ThemeForSection} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturePart />
      <BookSection />
      <StepsSection />
      <ThemeForSection />
      <TestimonialSection />
      <QuesSection />
    </div>
  );
}
