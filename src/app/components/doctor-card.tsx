import Image from "next/image";
import React from "react";

interface DoctorCardProps {
  name: string;
  title: string;
  homeIcon?: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  title,
  homeIcon = "/assets/home.svg",
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg px-4 py-3.5 flex items-center gap-4 max-w-sm">
      <div className="bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] rounded-full p-2 flex-shrink-0">
        <Image
          src={homeIcon}
          alt="Home Icon"
          width={24}
          height={24}
          className="w-6 h-6 text-white"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-dark font-semibold text-lg mb-1">{name}</h3>
        <p className="text-secondary text-sm">{title}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
