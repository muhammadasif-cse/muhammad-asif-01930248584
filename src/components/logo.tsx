import Image from "next/image";
import React from "react";

export default function Logo({
  version,
  className,
}: {
  version?: "original" | "white";
  className?: string;
}) {
  return (
    <>
      {version === "white" ? (
        <Image
          src="/assets/logo-white.svg"
          alt="Logo"
          width={172}
          height={49}
          priority
          className={className}
        />
      ) : (
        <Image
          src="/assets/logo-klinik.svg"
          alt="Logo"
          width={172}
          height={49}
          priority
          className={className}
        />
      )}
    </>
  );
}
