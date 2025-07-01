import Button from "@/components/button";
import Image from "next/image";
import React from "react";
import DoctorCard from "./doctor-card";

const Hero = () => {
  const title = `Klinik 24 is ready to serve the public's concerns 24/7.`;
  const description = `A hospital is an integral part of a social and health organization, with the function of providing comprehensive services.`;

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16 min-h-[500px] lg:min-h-[600px]">
            <div className="w-full lg:w-1/2 lg:flex-1 order-2 lg:order-1 flex items-center">
              <article className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 w-full">
                <h1 className="bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-[1.1] lg:leading-[1.1] mb-4 sm:mb-6 lg:mb-8">
                  {title}
                </h1>
                <p className="text-secondary text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed sm:leading-relaxed max-w-lg sm:max-w-xl lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 lg:mb-12">
                  {description}
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button
                    icon="/assets/pasient.svg"
                    iconPosition="left"
                    variant="gradient"
                    size="lg"
                    radius="full"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4"
                  >
                    View Services
                  </Button>
                </div>
              </article>
            </div>

            <div className="w-full lg:w-1/2 lg:flex-1 order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <Image
                  src="/assets/hero-doctor.svg"
                  alt="Hero Doctor"
                  width={550}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, 45vw"
                />

                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-2 sm:left-4 md:left-6 lg:left-6">
                  <div className="transform scale-75 sm:scale-85 md:scale-95 lg:scale-100 origin-bottom-left">
                    <DoctorCard name="dr. Mr Test" title="Head of Hospital" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
