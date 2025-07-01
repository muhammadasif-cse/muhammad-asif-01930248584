import React from "react";
import Hero from "./components/hero";
import Partner from "./components/partner";
import Services from "./components/services";
import MedicalExperts from "./components/medical-experts";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partner />
      <Services />
      <MedicalExperts />
    </div>
  );
}
