import Image from "next/image";
import React from "react";

const Partner = () => {
  const partners = [
    {
      name: "Karmen Pet Hospital",
      logo: "/assets/partner/image-1.svg",
    },
    {
      name: "Ciputra",
      logo: "/assets/partner/image-2.svg",
    },
    {
      name: "St. Jude Children's Research Hospital",
      logo: "/assets/partner/image-3.svg",
    },
    {
      name: "Mayapada Hospital",
      logo: "/assets/partner/image-4.svg",
    },
    {
      name: "Siloam Hospitals",
      logo: "/assets/partner/image-5.svg",
    },
  ];

  return (
    <section className="w-full bg-[#E2EDFF] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Partner & Friend
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 sm:h-24 lg:h-28 rounded-lg"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={200}
                  height={120}
                  className="max-h-full max-w-full object-contain"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
