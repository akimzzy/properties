"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SvgAccord from "@/components/svgs/SvgAccord";
import SvgLocation from "@/components/svgs/SvgLocation";
import SvgSearch from "@/components/svgs/SvgSearch";
import SvgHeadphone from "@/components/svgs/SvgHeadphone";
import SvgNotification from "@/components/svgs/SvgNotification";
import SvgPerson from "@/components/svgs/SvgPerson";
import SolidAccord from "@/components/svgs/SolidAccord";
import SvgBack from "@/components/svgs/SvgBack";
import SvgArrow from "@/components/svgs/SvgArrow";
import FeaturedApartmentsList from "@/components/FeaturedApartmentsList";
import Image from "next/image"; // Keep Image import as it's used for propertyTabs icons
import { Fragment } from "react";

const propertyTabs = [
  {
    name: "Rent Apartment",
    color: "bg-[#F1A5C233]",
    icon: (
      <Image
        src="/apartment.svg"
        width={100}
        height={100}
        alt="Picture of an apartment"
      />
    ),
    query: "rent-apartment",
  },
  {
    name: "Lands for sale",
    color: "bg-[#3D79EF1A]",
    // Image is used here
    icon: (
      <Image src="/land.svg" width={100} height={100} alt="Picture of a land" />
    ),
    query: "lands-for-sale",
  },

  {
    name: "Properties for sale",
    color: "bg-[#35A1621A]",
    // Image is used here
    icon: (
      <Image
        src="/house-sale.svg"
        width={100}
        height={100}
        alt="Picture of a property for sale"
      />
    ),
    query: "property-for-sale",
  },
];

const propertyTypeTabs = [
  { name: "Self Contained", query: "self-contained" },
  { name: "Mini flat", query: "mini-flat" },
  { name: "2 Bedroom flat", query: "2-bedroom-flat" },
  { name: "3 Bedroom flat", query: "3-bedroom-flat" },
  { name: "4 Bedroom flat", query: "4-bedroom-flat" },
  { name: "5 Bedroom flat", query: "5-bedroom-flat" },
  { name: "3 Bedroom terrace duplex", query: "3-bedroom-terrace-duplex" },
  {
    name: "3 Bedroom semi-detached duplex",
    query: "3-bedroom-semi-detached-duplex",
  },
  { name: "4 Bedroom terrace duplex", query: "4-bedroom-terrace-duplex" },
  { name: "7 Bedroom terrace duplex", query: "7-bedroom-terrace-duplex" },
  { name: "8 Bedroom terrace duplex", query: "8-bedroom-terrace-duplex" },
];

const featuredApartments = [
  {
    name: "Mini flat",
    location: "Ogba",
    price: "₦500,000",
    image: "/self-contain.png",
  },
  {
    name: "2 Bedroom flat",
    location: "Ikeja",
    price: "₦1,800,000",
    image: "/2-bedroom.png",
  },
  {
    name: "4 Bedroom Terrace Flat",
    location: "Berger",
    price: "₦3,400,000",
    image: "/4-bedroom.png",
  },
  {
    name: "3 Bedroom Flat",
    location: "V.I",
    price: "₦2,600,000",
    image: "/new-one.png",
  },
  {
    name: "Self Contained",
    location: "Ojota",
    price: "₦400,000",
    image: "/3-bedroom-flat.png",
  },
  {
    name: "4 Bedroom Terrace Flat",
    location: "Berger",
    price: "₦3,400,000",
    image: "/rp.jpg",
  },
  {
    name: "3 Bedroom  Flat",
    location: "V.I",
    price: "₦2,600,000",
    image: "/rp.jpg",
  },
  {
    name: "3 Bedroom Flat",
    location: "V.I",
    price: "₦2,600,000",
    image: "/rp.jpg",
  },
];

const fastestSellingProperties = [
  {
    name: "4 Bedroom Duplex",
    location: "Omole Estate",
    price: "₦28,000,000",
    image: "/fs1.png",
  },
  {
    name: "5 Bedroom Terrace",
    location: "Ikeja",
    price: "₦32,000,000",
    image: "/fs2.jpg",
  },
  {
    name: "4 Bedroom Duplex",
    location: "Berger",
    price: "₦28,000,000",
    image: "/fs3.jpg",
  },
  {
    name: "5 Bedroom Terrace",
    location: "Oke-ira",
    price: "₦32,000,000",
    image: "/fs4.jpg",
  },
  {
    name: "4 Bedroom Duplex",
    location: "Berger",
    price: "₦28,000,000",
    image: "/fs5.jpg",
  },
  {
    name: "5 Bedroom Terrace",
    location: "Oke-iraI",
    price: "₦₦32,000,000",
    image: "/fs6.jpg",
  },
];

const fastestSellingLands = [
  {
    name: "Shimawa, Ikotun",
    location: "Ikotun",
    price: "450,000",
    sqm: 500,
    image: "/l1.png",
  },
  {
    name: "The Premium",
    location: "Epe",
    price: "₦32,000,000",
    sqm: 500,
    image: "/l2.jpg",
  },
  {
    name: "Eleko beachfront",
    location: "Eleko",
    price: "₦2,300,000",
    sqm: 300,
    image: "/l3.jpg",
  },
  {
    name: "Epe Coastal land",
    location: "Epe",
    price: "₦2,500,000",
    sqm: 600,
    image: "/l4.jpg",
  },
  {
    name: "Ibeju Lekki beachfront",
    location: "Ibeju Lekki",
    price: "₦3,000,000",
    sqm: 250,
    image: "/l5.jpg",
  },
];

export default function Home() {
  const searchParams = useSearchParams();
  const homeTab = searchParams.get("home-tab") ?? "rent-apartment";
  const activePropertyTypeTab =
    searchParams.get("property-type-tab") ?? "self-contained";

  return (
    <Fragment>
      {/* header */}
      <div className="p-2 pt-4 px-8 border-b border-gray-200 w-full hidden md:flex md:items-center text-xs md:justify-between ">
        <ul className="flex gap-4 text-xs">
          {propertyTabs.map((tab) => (
            <li key={tab.name}>
              <Link
                className="gap-2 flex flex-col justify-center items-center"
                href={"/"}
              >
                <div className="w-14  h-12 flex justify-center items-center">
                  {tab.icon}
                </div>
                <span
                  className={`font-semibold mx-2 ${
                    homeTab === tab.query ? "text-black" : "text-gray-500"
                  }`}
                >
                  {tab.name}
                </span>
                {homeTab === tab.query && (
                  <div className="h-[3px] bg-black rounded-full w-full"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-gray-500 bg-white p-2 py-3 divide-x divide-gray-200 rounded-full shadow-xl border border-gray-50 flex relative pr-10 text-xs">
          <button className="flex gap-1 cursor-pointer items-center px-2 py-1">
            <span className="text-nowrap">Property type</span>
            <SvgAccord />
          </button>
          <button className="flex gap-1 cursor-pointer items-center px-2 py-1">
            <span className="text-nowrap">Minimun price</span>
            <SvgAccord />
          </button>
          <button className="flex gap-1 cursor-pointer items-center px-2 py-1">
            <span className="text-nowrap">Maximun price</span>
            <SvgAccord />
          </button>
          <button className="flex gap-1 cursor-pointer items-center p-1 pr-4">
            <SvgLocation />
            <span className="text-nowrap">Location</span>
          </button>
          <div className=" flex justify-center items-center absolute left-[91%] h-full top-0">
            <button className="size-12 bg-blue-500 rounded-full flex justify-center text-white items-center cursor-pointer">
              <SvgSearch />
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="cursor-pointer rounded-full bg-white hover:bg-gray-200 size-9 flex items-center justify-center ">
            <SvgHeadphone />
          </button>
          <button className="size-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center relative cursor-pointer">
            <span className="size-2.5 rounded-full bg-red-500 absolute top-[2%] right-[1%]"></span>
            <SvgNotification />
          </button>
          <button className="flex gap-2 items-center p-2 py-1 pr-4 cursor-pointer text-gray-500">
            <SvgPerson />

            <span>Bright Coker</span>
            <SolidAccord />
          </button>
        </div>
      </div>
      {/* main scrollable content */}
      <div className="sm:p-7 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:pt-7">
        <div className="mb-4 w-full pt-8 sm:pt-0 flex justify-between px-4 sm:px-0 sticky top-0 z-50 bg-white pb-4">
          <button className="flex items-center gap-1 hover:text-gray-500 transition-all text-xs font-medium cursor-pointer">
            <SvgBack />
            <span>Marketplace</span>
          </button>

          <div className="sm:hidden flex gap-4">
            <button>
              <SvgHeadphone />
            </button>
            <button className="text-gray-500">
              <SvgSearch className="size-5" />
            </button>
          </div>
        </div>
        <div className="flex gap-6 mb-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full  px-4 sm:px-0">
          <div className="p-4 bg-gradient-to-r from-[#3D79EF] to-[#35A162] sm:from-[#3D79EF] sm:to-[#3D79EF] w-78 rounded-xl flex-shrink-0">
            <h3 className="text-sm font-semibold text-white">
              Real estate goal
            </h3>
            <p className="text-[11px] text-white mb-2 mt-1">
              Tell us your goal and our <b>Ai</b> recommend properties that
              aligns with it
            </p>
            <div className="flex justify-end">
              <button className="text-[11px] border border-black px-3 bg-[#F1A5C2] text-blue-500 font-semibold py-1 rounded-lg relative z-30 cursor-pointer">
                Explore
                <div className="absolute w-full h-full rounded-lg bg-white -top-0.5 left-0.5 text-[11px] border border-black flex justify-center items-center">
                  Explore
                </div>
              </button>
            </div>
          </div>

          <div className="p-4  bg-gradient-to-b from-[#F1A5C2] to-[#8B5F70] sm:bg-green-600 sm:from-[#35A162] sm:to-[#35A162] w-78 rounded-xl flex-shrink-0">
            <div className="flex mb-2">
              <button className="text-[11px] border border-black px-3 bg-[#F1A5C2] text-blue-500 font-semibold py-1 rounded-lg relative z-30 cursor-pointer">
                8% per annum
                <div className="absolute w-full h-full rounded-lg bg-white -top-0.5 left-0.5 text-[11px] border border-black flex justify-center items-center">
                  8% per annum
                </div>
              </button>
            </div>
            <h3 className="text-sm font-semibold text-white">Prop safe</h3>
            <p className="text-[11px] text-white mb-2 mt-1">
              Save towards your real estate goals
            </p>
          </div>
        </div>
        <ul className="flex gap-2 text-[10px] sm:text-xs sm:hidden justify-between -mt-2 border-gray-200  px-4 sm:px-0 border-b-6 pb-8">
          {propertyTabs.map((tab) => (
            <li className="flex-1" key={tab.name}>
              <Link
                className={`gap-2 flex flex-col justify-center items-center rounded-lg p-2 py-6 ${tab.color}`}
                href={tab.query}
              >
                <div className="w-10 h-8 flex justify-center items-center">
                  {tab.icon}
                </div>
                <span className={`font-medium mx-2 text-black`}>
                  {tab.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full hidden sm:block">
          <ul className="flex gap-6 text-sm text-gray-500 font-medium">
            {propertyTypeTabs.map((item) => (
              <li
                className={`whitespace-nowrap flex-shrink-0 cursor-pointer hover:text-gray-700 ${
                  activePropertyTypeTab === item.query
                    ? "text-black font-semibold"
                    : ""
                }`}
                key={item.name}
              >
                {item.name}
                {activePropertyTypeTab === item.query && (
                  <div className="h-[3px] bg-black rounded-full w-full mt-1.5"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 border-b-6 pb-8 pt-2 sm:pt-0 sm:pb-0 border-gray-200 sm:border-0">
          <div className="flex justify-between mb-4 px-4 sm:px-0">
            <h2 className="font-semibold text-lg block sm:hidden">
              Apartment for rent
            </h2>
            <h2 className="font-semibold text-lg hidden sm:block">
              Top featured apartments for rent
            </h2>

            <button className="text-xs py-1 px-2 rounded-xl cursor-pointer bg-pink-50 text-pink-500 sm:hidden">
              See more
            </button>

            <div className="gap-3 hidden sm:flex">
              <button className="size-8 flex justify-center items-center rounded-full border text-gray-200 rotate-180  cursor-pointer hover:text-black transition-all">
                <SvgArrow />
              </button>
              <button className="size-8 flex justify-center items-center rounded-full border  text-gray-200 hover:text-black cursor-pointer transition-all">
                <SvgArrow className="text-black" />
              </button>
            </div>
          </div>
          <FeaturedApartmentsList apartments={featuredApartments} />
        </div>
        <div className="py-8 sm:hidden border-b-6 border-gray-200">
          <div className="flex justify-between mb-4 px-4 sm:px-0">
            <h2 className="font-semibold text-lg block sm:hidden">
              Fastest selling properties
            </h2>

            <button className="text-xs py-1 px-2 rounded-xl cursor-pointer bg-pink-50 text-pink-500 sm:hidden">
              See more
            </button>
          </div>
          <FeaturedApartmentsList apartments={fastestSellingProperties} />
        </div>
        <div className="py-8 mb-56 sm:hidden">
          <div className="flex justify-between mb-4 px-4 sm:px-0">
            <h2 className="font-semibold text-lg block sm:hidden">
              Fastest selling lands
            </h2>

            <button className="text-xs py-1 px-2 rounded-xl cursor-pointer bg-pink-50 text-pink-500 sm:hidden">
              See more
            </button>
          </div>
          <FeaturedApartmentsList apartments={fastestSellingLands} />
        </div>
      </div>
    </Fragment>
  );
}
