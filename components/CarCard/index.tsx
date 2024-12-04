"use client";

import Image from "next/image";
import { useState } from "react";
import { CarProps } from "@/types";
import { calculateServiceCost } from "@/utils";

interface CarCarProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCarProps) => {
  const [test, setTest] = useState("");

  const {
    city_mpg,
    year,
    make,
    model,
    transmission,
    drive,
    cylinders,
    fuel_type,
  } = car;

  const carRent = calculateServiceCost(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make}
          {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">N</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/Service</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex-w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-50">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
                {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
