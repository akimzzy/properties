import React from "react";
import SvgHeart from "@/components/svgs/SvgHeart";

interface Apartment {
  name: string;
  location: string;
  price: string;
  image: string;
  sqm?: number;
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
        {apartments.map((item, index) => (
          <li key={item.name + index}>
            <div
              className={`rounded-2xl w-66 h-52 bg-[length:160%] bg-center bg-no-repeat bg-black overflow-hidden relative`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <button className="absolute right-3 top-3 size-8 bg-black/10 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-black/70 hover:text-pink-500 transition-all">
                <SvgHeart className="size-4" />
              </button>
            </div>
            <div className="flex divide-x mt-3 divide-gray-200">
              <h4 className="font-medium pr-3">{item.name}</h4>
              <p className="pl-3 text-xs">{item.location}</p>
            </div>
            <div className="flex divide-x divide-gray-200 mt-1">
              <span className="font-semibold text-sm pr-3">{item.price}</span>
              {item.sqm && <span className="pl-3 text-xs">{item.sqm}sqm</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
