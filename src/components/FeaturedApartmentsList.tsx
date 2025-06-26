import React from "react";
import Image from "next/image";
import SvgHeart from "@/components/svgs/SvgHeart";

interface Apartment {
  name: string;
  location: string;
  price: string;
  image: string;
}

interface FeaturedApartmentsListProps {
  apartments: Apartment[];
}

export default function FeaturedApartmentsList({
  apartments,
}: Readonly<FeaturedApartmentsListProps>) {
  return (
    <div className="text-sm overflow-x-auto">
      <ul className="flex gap-4 w-full px-4 sm:px-0">
        {apartments.map((item) => (
          <li key={item.name}>
            <div className="rounded-2xl w-66 overflow-hidden relative">
              <Image
                src={item.image}
                width={300}
                height={300}
                alt="Picture of a self contain"
              />
              <button className="absolute right-3 top-3 size-8 bg-black/10 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-black/70 hover:text-pink-500 transition-all">
                <SvgHeart className="size-4" />
              </button>
            </div>
            <div className="flex divide-x mt-3 divide-gray-200">
              <h4 className="font-medium pr-3">{item.name}</h4>
              <p className="pl-3 text-xs">{item.location}</p>
            </div>
            <span className="font-semibold text-base">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
