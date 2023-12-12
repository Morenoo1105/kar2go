"use client";

import Image from "next/image";
import React from "react";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Buscar, reservar o alquilar un coche — ¡fácil y rápido!
        </h1>
        <p className="hero__subtitle">
          Agiliza tu experiencia de alquiler de coches con nuestro sencillo
          sencillo proceso de reserva.
        </p>

        <CustomButton
          title="Explorar"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
