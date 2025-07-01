import React from "react";
import Logo from "../logo";
import { navigation_data } from "./data";
import Link from "next/link";
import Button from "../button";

export default function Navigation() {
  return (
    <nav className="container mx-auto my-9 md:p-0 p-4">
      <section className="flex items-center md:gap-[170px] md:justify-normal justify-between py-4">
        <div className="flex items-center gap-16">
          <Logo className="-mt-4 shrink-0" />
          <div className="md:flex items-center justify-center gap-10 hidden">
            {navigation_data.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary text-center hover:text-primary text-base transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <Button
          icon="/assets/pasient.svg"
          iconPosition="left"
          variant="gradient"
          size="md"
          radius="full"
        >
          Register/Login
        </Button>
      </section>
    </nav>
  );
}
