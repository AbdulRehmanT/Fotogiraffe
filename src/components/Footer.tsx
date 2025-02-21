import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  LucideFacebook,
  LucideInstagram,
  LucideTwitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  const social = [
    {
      socialmedia: LucideFacebook,
    },
    {
      socialmedia: LucideInstagram,
    },
    {
      socialmedia: LucideTwitter,
    },
  ];

  const navLink = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/faqs",
      label: "FAQs",
    },
    {
      href: "/refund-policy",
      label: "Refund Policy",
    },
    {
      href: "/shipping-policy",
      label: "Shipping Policy",
    },
    {
      href: "/blogs",
      label: "Blogs",
    },
  ];
  return (
    <footer className="bg-[#1C1C1C] text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center space-y-12">
          <Image
            alt="FotoGiraffe"
            width={180}
            height={50}
            className="h-16 w-auto"
            src={"/assets/whiteLogo.svg"}
          />
          <div className="flex items-center gap-6">
            {social.map((social) => (
              <Link
                className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                href="/"
              >
                {React.createElement(social.socialmedia)}
                fotogiraffe
                <ArrowUpRight />
              </Link>
            ))}
          </div>
          <div className="text-center">
            <p className="mb-4">
              Contact us at
              <Link href="#" className="underline">
                support@fotogiraffe.co.uk
              </Link>
              if you have any questions.
            </p>
            <p>
              Address: C/O Golder Bags Ground Floor, 1 Baker's Row, London,
              United Kingdom, EC1R 3DB
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
            {navLink.map((nav) => (
              <Link className="hover:text-white transition-colors" href={nav.href}>
                {nav.label}
              </Link>
            ))}
            
          </div>
          <div className="w-full pt-8 mt-8 border-t border-gray-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-white">Copyright © 2024 Fotogiraffe</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white">
                <Link className="hover:text-white transition-colors" href="/terms">
                  Terms
                </Link>
                <span>|</span>
                <Link className="hover:text-white transition-colors" href="/priavcy">
                  Privacy
                </Link>
                <span>|</span>
                <Link className="hover:text-white transition-colors" href="/cookie-notice">
                  Cookie Notice
                </Link>
                <span>|</span>
                <Link className="hover:text-white transition-colors" href="/reason-to-buy">
                  Reason To Buy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
