import Button from "@/components/button";
import Image from "next/image";
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "24-Hour Pharmacy",
      description:
        "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
      icon: "/assets/services/icon-1 (2).svg",
      bgColor: "bg-white hover:bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      id: 2,
      title: "Medical Check Up",
      description:
        "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
      icon: "/assets/services/icon-1 (3).svg",
      bgColor: "bg-white hover:bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      id: 3,
      title: "Professional Doctor",
      description:
        "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
      icon: "/assets/services/icon-1 (1).svg",
      bgColor: "bg-white hover:bg-blue-50",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark leading-tight">
              List of Services
            </h2>
          </div>

          <div className="lg:w-2/3">
            <p className="text-secondary text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              A hospital is an integral part of a social and health
              organization, serving the function of providing comprehensive
              (holistic) care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`${service.iconBg} w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-6 sm:mb-8`}
              >
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <Button
                icon="/assets/whatsapp.svg"
                iconPosition="left"
                variant="gradient"
                size="lg"
                radius="full"
                className="w-full"
              >
                Reservasi
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
