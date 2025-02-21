import Image from "next/image";
import Link from "next/link";
import { Button } from "./";

const Header = () => {
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/photo-books",
      label: "Photo Books",
    },
    {
      href: "/faqs",
      label: "FAQs",
    },

    {
      href: "/sign-in",
      label: "Sign in",
    },
  ];

  return (
    <div className="border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Image src={'/assets/logo_black.svg'} width={140} height={40} alt="black_logo" className="w-auto h-10 " />

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 font-medium text-sm md:hidden">
            {navLinks.map((link) => (
              <Link href={link.href}>{link.label}</Link>
            ))}
          </div>
          <Button href="/" title="Get Started" className={""} />
        </div>
      </div>
    </div>
  );
};

export default Header;
