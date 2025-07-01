import React from "react";
import Hero from "./components/hero";
import Partner from "./components/partner";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partner />
      <Services />
    </div>
  );
}
