"use client";

import { CarProps } from "@/types";
import { CarDetails, CustomButton } from ".";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { GiCarWheel, GiGasPump, GiSteeringWheel } from "react-icons/gi";
import { useState } from "react";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-500">
          <div className="flex flex-col justify-center items-center gap-2">
            <GiSteeringWheel
              className="w-5 h-5 text-indigo-900"
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automático" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiCarWheel
              className="w-5 h-5 text-orange-500"
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {drive.toUpperCase() === "FWD" && "Trac. Delant."}
              {drive.toUpperCase() === "RWD" && "Trac. Tras."}
              {drive.toUpperCase() === "4WD" && "4x4 Man."}
              {drive.toUpperCase() === "AWD" && "4x4 Aut."}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiGasPump
              className="w-5 h-5 text-green-600"
              alt="steering wheel"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Ver más"
            containerStyles="w-full pt-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="rightArrow"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
