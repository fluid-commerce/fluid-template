/* eslint-disable @next/next/no-img-element */
"use client";

import facebook from "@/svgs/facebook.svg";
import instagram from "@/svgs/instagram.svg";
import linkedin from "@/svgs/linkedin-in.svg";
import x from "@/svgs/x-twitter.svg";
import youtube from "@/svgs/youtube.svg";
import { Company } from "@/types/company";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  company: Company;
  params: Record<string, string>;
};

const Footer = ({ company, params }: FooterProps) => {
  const affiliateSlug = params.affiliateSlug;

  const socialIcons = [
    { icon: facebook, href: "#" },
    { icon: instagram, href: "#" },
    { icon: x, href: "#" },
    { icon: linkedin, href: "#" },
    { icon: youtube, href: "#" },
  ];

  const navLinks = [
    { label: "Shop", href: `/${affiliateSlug || "home"}/shop/` },
    { label: "Account", href: `/${affiliateSlug || "home"}/` },
    { label: "Cart", href: `/${affiliateSlug || "home"}/cart/` },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ];

  return (
    <footer className="container py-16 md:py-28">
      {/* Logo */}
      <div className="text-center mb-12">
        <Link href={`/${affiliateSlug || "home"}/`}>
          <img
            src={company.logo_url || "/placeholder-logo.png"}
            alt={`${company.name}'s logo`}
            className="h-8 md:h-11 object-contain inline-block"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center mb-16">
        <ul className="flex gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-base hover:underline font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Divider */}
      <div className="border-t border-black mb-8 md:mb-16" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Legal Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          <span className="text-sm">
            © 2024 {company.name}. All rights reserved.
          </span>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm underline text-center md:text-left"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-black hover:text-gray-600 transition-colors"
              aria-label={`Visit our ${social.icon.iconName}`}
            >
              <Image
                alt={social.icon.iconName || "social icon"}
                height={20}
                width={20}
                src={social.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
