import Button from "@/components/button";
import Image from "next/image";
import React from "react";

const MedicalExperts = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 order-1">
            <div className="relative max-w-md sm:max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/clinic.svg"
                  alt="Medical Building"
                  width={500}
                  height={400}
                  className="w-full  rounded-3xl object-cover "
                  priority
                />

                <div className="absolute bottom-28 right-0 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Image
                        src="/assets/exparts.svg"
                        alt="Quality Icon"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        Quality over Quantity
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/assets/star.svg"
                            alt="Star"
                            width={12}
                            height={12}
                            className="w-3 h-3"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute top-12 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-2">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark leading-tight mb-6 sm:mb-8">
                The best care from medical experts.
              </h2>

              <p className="text-secondary text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                A hospital is an integral part of a social and health
                organization, functioning to provide comprehensive (holistic)
                services.
              </p>

              <Button
                icon="/assets/whatsapp.svg"
                iconPosition="left"
                variant="gradient"
                size="lg"
                radius="full"
                className="w-full sm:w-auto"
              >
                Reservasi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalExperts;
