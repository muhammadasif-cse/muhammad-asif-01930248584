import Image from "next/image";
import React from "react";
import Logo from "./logo";

const Footer = () => {
  const companyLinks = [
    { name: "Tentang Kami", href: "/about" },
    { name: "Tour", href: "/tour" },
    { name: "Blog", href: "/blog" },
    { name: "Info Layanan", href: "/services" },
  ];

  const locationLinks = [
    { name: "Tangerang", href: "/locations/tangerang" },
    { name: "Jakarta", href: "/locations/jakarta" },
    { name: "Surabaya", href: "/locations/surabaya" },
    { name: "Bekasi", href: "/locations/bekasi" },
  ];

  const socialLinks = [
    { name: "Youtube", icon: "/assets/social/youtube.svg", href: "#" },
    { name: "Facebook", icon: "/assets/social/facebook.svg", href: "#" },
    { name: "WhatsApp", icon: "/assets/social/whatsapp.svg", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0A0E31] text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
               <Logo version="white"/>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="text-sm">Jl. Lebak Bulus I Mey. 20 Cilandak</p>
                <p className="text-sm">
                  Jakarta Selatan, DKI Jakarta, Indonesia 12440
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company Info</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Cabang</h4>
            <ul className="space-y-3">
              {locationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak Kami</h4>
            <div className="space-y-3">
              <div>
                <a
                  href="tel:+626664664565"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  +626664664565
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@klinik24.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  info@klinik24.com
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Telp: +626664664564</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Copyright © Klinik24 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
