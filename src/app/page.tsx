"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// font-[family-name:var(--font-poppins)]
// font-[family-name:var(--font-dm-sans)]

const tabs = [
  {
    name: "Home",
    icon: (
      <svg
        className="size-5"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.70217 0.34079L18.43 8.30013L17.4557 9.27447L16.0696 8.01744V16.9731L15.3835 17.6592H11.2666L10.5804 16.9731V12.17H7.83584V16.9731L7.14969 17.6592H3.03278L2.34663 16.9731V8.02842L0.974334 9.27447L0 8.30013L8.71411 0.34079H9.70217ZM3.71894 6.781V16.2869H6.46354V11.4839L7.14969 10.7977H11.2666L11.9527 11.4839V16.2869H14.6973V6.77276L9.20814 1.79543L3.71894 6.781Z"
          fill="currentColor"
        />
      </svg>
    ),
    path: "/",
  },
  {
    name: "Leisure",
    icon: (
      <svg
        className="size-5"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.37403 11.7914H5.65196V17.3747H9.37403V11.7914Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.75 17.375H1M13.0971 17.375H1.93041V5.01707C1.91961 4.81411 1.97567 4.6132 2.08999 4.44515C2.20431 4.27709 2.37059 4.15117 2.56333 4.08667L13.0971 0.625V17.375ZM13.0971 17.375V6.20833H15.8887C16.011 6.20827 16.132 6.2323 16.2449 6.27903C16.3579 6.32576 16.4605 6.39428 16.5469 6.48069C16.6334 6.56709 16.7019 6.66967 16.7487 6.78259C16.7955 6.8955 16.8196 7.01652 16.8196 7.13874V17.375H13.0971Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    path: "/leisure",
  },

  {
    name: "Saves",
    icon: (
      <svg
        className="size-5"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1699 2.27271C12.9036 0.910338 15.016 1.15048 16.4453 2.33423C17.8631 3.5085 18.6163 5.62834 17.5146 8.07544L17.5098 8.08521L17.5059 8.09595C16.0295 11.7944 12.4453 14.6659 9.99512 16.2629L9.52148 16.5647C9.33482 16.6803 9.11971 16.6819 8.95312 16.5842H8.95215C7.72781 15.8622 5.97574 14.4848 4.41211 12.9338C2.83302 11.3675 1.52436 9.70012 1.0957 8.4104L1.09082 8.39478L1.08398 8.37915C0.473493 6.88253 0.388018 5.6297 0.614258 4.6311C0.840186 3.63417 1.38463 2.85664 2.09277 2.31372C3.4387 1.28204 5.35947 1.1066 6.7959 1.90161L7.07715 2.07446C7.50813 2.36654 8.19061 3.00848 8.62695 3.46899L8.63965 3.48169C8.72122 3.56161 8.81846 3.62464 8.9248 3.66626C9.03129 3.70787 9.1455 3.72732 9.25977 3.72388C9.37405 3.72043 9.48701 3.69469 9.59082 3.64673C9.69451 3.59878 9.78763 3.53026 9.86426 3.44556C10.2019 3.0724 10.7515 2.60147 11.1699 2.27271Z"
          stroke="currentColor"
        />
      </svg>
    ),
    path: "/saves",
  },
  {
    name: "Chats",
    icon: (
      <svg
        className="size-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.25 9.41797C6.25 9.74949 6.1183 10.0674 5.88388 10.3019C5.64946 10.5363 5.33152 10.668 5 10.668C4.66848 10.668 4.35054 10.5363 4.11612 10.3019C3.8817 10.0674 3.75 9.74949 3.75 9.41797C3.75 9.08645 3.8817 8.76851 4.11612 8.53409C4.35054 8.29967 4.66848 8.16797 5 8.16797C5.33152 8.16797 5.64946 8.29967 5.88388 8.53409C6.1183 8.76851 6.25 9.08645 6.25 9.41797ZM11.25 9.41797C11.25 9.74949 11.1183 10.0674 10.8839 10.3019C10.6495 10.5363 10.3315 10.668 10 10.668C9.66848 10.668 9.35054 10.5363 9.11612 10.3019C8.8817 10.0674 8.75 9.74949 8.75 9.41797C8.75 9.08645 8.8817 8.76851 9.11612 8.53409C9.35054 8.29967 9.66848 8.16797 10 8.16797C10.3315 8.16797 10.6495 8.29967 10.8839 8.53409C11.1183 8.76851 11.25 9.08645 11.25 9.41797ZM15 10.668C15.3315 10.668 15.6495 10.5363 15.8839 10.3019C16.1183 10.0674 16.25 9.74949 16.25 9.41797C16.25 9.08645 16.1183 8.76851 15.8839 8.53409C15.6495 8.29967 15.3315 8.16797 15 8.16797C14.6685 8.16797 14.3505 8.29967 14.1161 8.53409C13.8817 8.76851 13.75 9.08645 13.75 9.41797C13.75 9.74949 13.8817 10.0674 14.1161 10.3019C14.3505 10.5363 14.6685 10.668 15 10.668Z"
          fill="currentColor"
        />
        <path
          d="M2.70625 19.1717L2.73125 19.1667C5.01875 18.713 6.41625 18.1142 7.06625 17.7855C8.02323 18.0407 9.00956 18.1693 10 18.168C15.5225 18.168 20 14.2505 20 9.41797C20 4.58547 15.5225 0.667969 10 0.667969C4.4775 0.667969 0 4.58547 0 9.41797C0 11.618 0.92875 13.6305 2.4625 15.168C2.3552 16.1556 2.13544 17.1277 1.8075 18.0655L1.80375 18.0792C1.71055 18.3478 1.60884 18.6134 1.49875 18.8755C1.4 19.108 1.59125 19.368 1.84 19.328C2.12958 19.2806 2.41837 19.2285 2.70625 19.1717ZM3.70625 15.2867C3.72376 15.1037 3.70069 14.9191 3.63868 14.746C3.57667 14.573 3.47725 14.4157 3.3475 14.2855C2.0225 12.9555 1.25 11.253 1.25 9.41797C1.25 5.42797 5.005 1.91797 10 1.91797C14.995 1.91797 18.75 5.42797 18.75 9.41797C18.75 13.4092 14.995 16.918 10 16.918C9.11888 16.9193 8.24139 16.8049 7.39 16.578C7.09247 16.4982 6.77598 16.5312 6.50125 16.6705C6.0175 16.9155 4.95125 17.383 3.20875 17.7867C3.45185 16.9706 3.6184 16.1337 3.70625 15.2867Z"
          fill="currentColor"
        />
      </svg>
    ),
    path: "/chats",
    tag: 10,
  },
  {
    name: "Account",
    icon: (
      <span className="size-6 overflow-hidden bg-pink-200 block rounded-full">
        <Image
          src="/avatar.png"
          width={150}
          height={150}
          alt="Picture of an avatar"
        />
      </span>
    ),
    path: "/accounts",
  },
];
const propertyTabs = [
  {
    name: "Rent Apartment",
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
    icon: (
      <Image src="/land.svg" width={100} height={100} alt="Picture of a land" />
    ),
    query: "lands-for-sale",
  },

  {
    name: "Property for sale",
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

const propertyTypesTab = [
  { name: "Self Contained", query: "self-contained" },
  { name: "Mini flat", query: "mini-flat" },
  { name: "2 Bedroom flat", query: "2-bedroom-flat" },
  { name: "3 Bedroom flat", query: "3-bedroom-flat" },
  { name: "4 Bedroom flat", query: "4-bedroom-flat" },
  { name: "4 Bedroom flat", query: "4-bedroom-flat" },
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
    price: "N500,000",
    image: "/self-contain.png",
  },
  {
    name: "2 Bedroom flat",
    location: "Ikeja",
    price: "N1,800,000",
    image: "/2-bedroom.png",
  },
  {
    name: "4 Bedroom Terrace Flat",
    location: "Berger",
    price: "N3,400,000",
    image: "/4-bedroom.png",
  },
  {
    name: "3 Bedroom Flat",
    location: "Berger",
    price: "N2,600,000",
    image: "/new-one.png",
  },
];

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const homeTab = searchParams.get("home-tab") ?? "rent-apartment";

  return (
    <div className="flex font-[family-name:var(--font-poppins)] bg-white h-screen min-h-screen w-full">
      <div className="w-66 bg-gray-50  h-full border-r border-r-gray-200 flex flex-col">
        <div className="p-3 py-5 font-semibold text-2xl border-b border-b-gray-200 relative">
          sases
          <button className=" w-7 flex items-center justify-center  absolute -right-3.5 top-0 h-full cursor-pointer">
            <span className="size-6 rounded-full flex justify-center items-center border border-gray-200 bg-white">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9L1 5L5 1"
                  stroke="#021B33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <ul className="flex flex-col gap-1 text-xs p-3 py-5 flex-1">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link
                href={tab.path}
                className={`flex gap-4 items-center px-5 py-3 rounded-lg ${
                  pathname === tab.path
                    ? " bg-blue-500 text-white font-semibold"
                    : " hover:bg-gray-100 text-gray-500"
                }`}
              >
                <span className="relative">
                  {tab.icon}

                  {tab.tag && (
                    <span className="absolute left-1 py-0.5 px-1 bg-blue-500 rounded-full text-white text-[9px] -top-1.5 font-semibold">
                      {tab.tag}
                    </span>
                  )}
                </span>
                <span>{tab.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center text-xs p-3 px-6 mb-6">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
              stroke="#707070"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 9.65995V8.33995C1.5 7.55995 2.1375 6.91495 2.925 6.91495C4.2825 6.91495 4.8375 5.95495 4.155 4.77745C3.765 4.10245 3.9975 3.22495 4.68 2.83495L5.9775 2.09245C6.57 1.73995 7.335 1.94995 7.6875 2.54245L7.77 2.68495C8.445 3.86245 9.555 3.86245 10.2375 2.68495L10.32 2.54245C10.6725 1.94995 11.4375 1.73995 12.03 2.09245L13.3275 2.83495C14.01 3.22495 14.2425 4.10245 13.8525 4.77745C13.17 5.95495 13.725 6.91495 15.0825 6.91495C15.8625 6.91495 16.5075 7.55245 16.5075 8.33995V9.65995C16.5075 10.44 15.87 11.085 15.0825 11.085C13.725 11.085 13.17 12.045 13.8525 13.2225C14.2425 13.905 14.01 14.775 13.3275 15.165L12.03 15.9075C11.4375 16.26 10.6725 16.05 10.32 15.4575L10.2375 15.315C9.5625 14.1375 8.4525 14.1375 7.77 15.315L7.6875 15.4575C7.335 16.05 6.57 16.26 5.9775 15.9075L4.68 15.165C3.9975 14.775 3.765 13.8975 4.155 13.2225C4.8375 12.045 4.2825 11.085 2.925 11.085C2.1375 11.085 1.5 10.44 1.5 9.65995Z"
              stroke="#707070"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>System configuration</span>
        </div>
      </div>
      <main className="flex-1">
        <div className="p-2 pt-4 px-8 border-b border-gray-200 w-full flex items-center text-xs justify-between">
          <ul className="flex gap-4 text-xs">
            {propertyTabs.map((tab) => (
              <li key={tab.name}>
                <Link
                  className="gap-2 flex flex-col justify-center items-center"
                  href={tab.query}
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
          <div className="text-gray-500 bg-white p-4 divide-x divide-gray-200 rounded-full shadow-xl border border-gray-50 flex mx-8 relative pr-10">
            <button className="flex gap-2 cursor-pointer items-center px-3 py-1 ">
              <span>Property type</span>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#262C55"
                  strokeOpacity="0.7"
                  strokeWidth="0.5"
                />
              </svg>
            </button>
            <button className="flex gap-2 cursor-pointer items-center px-3 py-1">
              <span>Minimun price</span>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#262C55"
                  strokeOpacity="0.7"
                  strokeWidth="0.5"
                />
              </svg>
            </button>
            <button className="flex gap-2 cursor-pointer items-center px-3 py-1">
              <span>Maximun price</span>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#262C55"
                  strokeOpacity="0.7"
                  strokeWidth="0.5"
                />
              </svg>
            </button>
            <button className="flex gap-2 cursor-pointer items-center px-3 py-1 pr-4">
              <svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99929 8.34227C4.54979 8.34227 4.11038 8.20348 3.73663 7.94345C3.36288 7.68342 3.07158 7.31383 2.89956 6.88142C2.72755 6.44901 2.68254 5.9732 2.77023 5.51415C2.85793 5.05511 3.07438 4.63345 3.39223 4.30249C3.71008 3.97154 4.11504 3.74616 4.5559 3.65485C4.99677 3.56354 5.45374 3.6104 5.86902 3.78951C6.28431 3.96862 6.63926 4.27194 6.88899 4.6611C7.13872 5.05026 7.27201 5.50778 7.27201 5.97582C7.27129 6.60321 7.03161 7.20469 6.60555 7.64832C6.17949 8.09195 5.60183 8.34152 4.99929 8.34227ZM4.99929 4.55595C4.72959 4.55595 4.46594 4.63923 4.24169 4.79525C4.01745 4.95126 3.84266 5.17302 3.73945 5.43246C3.63624 5.69191 3.60924 5.9774 3.66186 6.25282C3.71447 6.52825 3.84435 6.78125 4.03505 6.97982C4.22576 7.17839 4.46874 7.31362 4.73326 7.36841C4.99778 7.42319 5.27196 7.39508 5.52113 7.28761C5.7703 7.18014 5.98327 6.99815 6.13311 6.76466C6.28295 6.53116 6.36292 6.25665 6.36292 5.97582C6.36256 5.59937 6.21878 5.23843 5.96313 4.97224C5.70747 4.70604 5.36084 4.55633 4.99929 4.55595Z"
                  fill="#35A162"
                />
                <path
                  d="M5 14.0216L1.16546 9.31287C1.11218 9.24217 1.05945 9.17101 1.00728 9.09942C0.352269 8.20101 -0.00158236 7.10366 5.31949e-06 5.97571C5.31949e-06 4.59495 0.526789 3.27073 1.46447 2.29439C2.40215 1.31804 3.67392 0.769531 5 0.769531C6.32608 0.769531 7.59785 1.31804 8.53553 2.29439C9.47321 3.27073 10 4.59495 10 5.97571C10.0016 7.10315 9.64789 8.2 8.99318 9.098L8.99272 9.09942C8.99272 9.09942 8.85636 9.28589 8.83591 9.31098L5 14.0216ZM1.73273 8.52911C1.73364 8.52911 1.83909 8.67488 1.86319 8.70611L5 12.5582L8.14091 8.70091C8.16091 8.67488 8.26727 8.52816 8.26772 8.52769C8.80279 7.79367 9.09196 6.89722 9.09091 5.97571C9.09091 4.84599 8.6599 3.76255 7.89271 2.96372C7.12551 2.16489 6.08498 1.71611 5 1.71611C3.91502 1.71611 2.87449 2.16489 2.10729 2.96372C1.3401 3.76255 0.909095 4.84599 0.909095 5.97571C0.908142 6.89779 1.19763 7.79475 1.73319 8.52911H1.73273Z"
                  fill="#35A162"
                />
              </svg>
              <span>Location</span>
            </button>
            <div className=" flex justify-center items-center absolute left-[91%] h-full top-0">
              <button className="size-15 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.38635 1.2148e-08C4.52737 7.31919e-05 3.68087 0.205563 2.91745 0.599326C2.15404 0.993089 1.49587 1.56371 0.997836 2.26357C0.499805 2.96344 0.176362 3.77225 0.0544925 4.62254C-0.0673772 5.47283 0.0158602 6.33994 0.29726 7.15152C0.57866 7.9631 1.05006 8.69561 1.67214 9.28795C2.29421 9.88029 3.04892 10.3153 3.8733 10.5566C4.69768 10.798 5.56782 10.8387 6.41113 10.6753C7.84727 10.3972 9.50027 10.3968 10.5346 11.4312L11.0355 11.9321C11.1551 12.0475 11.3151 12.1114 11.4813 12.11C11.6475 12.1085 11.8064 12.0419 11.9239 11.9244C12.0414 11.8069 12.1081 11.6479 12.1095 11.4818C12.111 11.3156 12.0471 11.1555 11.9316 11.036L11.7487 10.8531C10.533 9.63737 10.5569 7.67641 10.7422 5.96714C10.8511 4.9616 10.6748 3.94569 10.2334 3.03569C9.79191 2.12568 9.10318 1.35834 8.24599 0.821477C7.3888 0.284618 6.39778 -6.79013e-05 5.38635 1.2148e-08ZM1.26703 5.38681C1.26703 4.2943 1.70103 3.24653 2.47355 2.47401C3.24607 1.70148 4.29384 1.26748 5.38635 1.26748C6.47886 1.26748 7.52663 1.70148 8.29915 2.47401C9.07168 3.24653 9.50568 4.2943 9.50568 5.38681C9.50568 6.47932 9.07168 7.52709 8.29915 8.29961C7.52663 9.07214 6.47886 9.50613 5.38635 9.50613C4.29384 9.50613 3.24607 9.07214 2.47355 8.29961C1.70103 7.52709 1.26703 6.47932 1.26703 5.38681Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="cursor-pointer rounded-full bg-white hover:bg-gray-200 size-11 flex items-center justify-center ">
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5001 11.1484C20.5001 10.6987 20.5001 10.4738 20.5677 10.2736C20.764 9.69117 21.2827 9.46628 21.8027 9.22968C22.3851 8.96319 22.6763 8.83059 22.9662 8.80719C23.2938 8.78119 23.6227 8.85139 23.9035 9.00869C24.2753 9.21668 24.5352 9.61447 24.8004 9.93687C26.0263 11.4266 26.6399 12.1715 26.8635 12.9918C27.0455 13.6548 27.0455 14.349 26.8635 15.0107C26.5372 16.2092 25.5037 17.2128 24.738 18.1436C24.3468 18.6181 24.1505 18.856 23.9035 18.9951C23.6178 19.1535 23.2917 19.2236 22.9662 19.1966C22.6763 19.1732 22.3851 19.0406 21.8014 18.7741C21.2814 18.5375 20.764 18.3126 20.5677 17.7302C20.5001 17.53 20.5001 17.3051 20.5001 16.8553V11.1484ZM7.50039 11.1484C7.50039 10.5817 7.48479 10.0734 7.0272 9.67557C6.8608 9.53127 6.6398 9.43118 6.19911 9.22968C5.61542 8.96449 5.32423 8.83059 5.03434 8.80719C4.16725 8.73699 3.70056 9.32978 3.20137 9.93817C1.9742 11.4266 1.36061 12.1715 1.13571 12.9931C0.954762 13.6539 0.954762 14.3512 1.13571 15.012C1.46331 16.2092 2.49809 17.2141 3.26247 18.1436C3.74476 18.7286 4.20625 19.2629 5.03434 19.1966C5.32423 19.1732 5.61542 19.0406 6.19911 18.7741C6.6411 18.5739 6.8608 18.4725 7.0272 18.3282C7.48479 17.9304 7.50039 17.4221 7.50039 16.8566V11.1484Z"
                  stroke="#262C55"
                  strokeOpacity="0.54"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.91199 8.79985C4.91199 4.49173 8.98611 1 14.0118 1C19.0375 1 23.1116 4.49173 23.1116 8.79985M23.1116 19.1996V20.2396C23.1116 22.5367 20.7847 24.3995 17.9117 24.3995H15.3118"
                  stroke="#262C55"
                  strokeOpacity="0.54"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="size-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center relative cursor-pointer">
              <span className="size-2.5 rounded-full bg-red-500 absolute top-[5%] right-[2%]"></span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.01417 2.56125C6.66958 2.56125 4.76417 4.46667 4.76417 6.81125V8.85833C4.76417 9.29042 4.58 9.94917 4.36042 10.3175L3.54583 11.6704C3.04292 12.5062 3.39 13.4342 4.31083 13.7458C7.36375 14.7658 10.6575 14.7658 13.7104 13.7458C14.5675 13.4625 14.9429 12.4496 14.4754 11.6704L13.6608 10.3175C13.4483 9.94917 13.2642 9.29042 13.2642 8.85833V6.81125C13.2642 4.47375 11.3517 2.56125 9.01417 2.56125Z"
                  stroke="#292D32"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M10.3246 2.76668C10.105 2.70293 9.87832 2.65334 9.64457 2.62501C8.96457 2.54001 8.3129 2.58959 7.70374 2.76668C7.90915 2.24251 8.41915 1.87418 9.01415 1.87418C9.60915 1.87418 10.1192 2.24251 10.3246 2.76668Z"
                  stroke="#292D32"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.1392 14.0008C11.1392 15.1696 10.1829 16.1258 9.01416 16.1258C8.43333 16.1258 7.89499 15.885 7.51249 15.5025C7.12999 15.12 6.88916 14.5817 6.88916 14.0008"
                  stroke="#292D32"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                />
              </svg>
            </button>
            <button className="flex gap-2 items-center p-2 py-1 pr-4 cursor-pointer">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.61331 8.19957C8.54248 8.19249 8.45748 8.19249 8.37956 8.19957C6.69373 8.14291 5.35498 6.76166 5.35498 5.06166C5.35498 3.32624 6.75748 1.91666 8.49998 1.91666C10.2354 1.91666 11.645 3.32624 11.645 5.06166C11.6379 6.76166 10.2991 8.14291 8.61331 8.19957Z"
                  stroke="#9A9EA6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.07164 10.8133C3.35747 11.9608 3.35747 13.8308 5.07164 14.9713C7.01955 16.2746 10.2141 16.2746 12.1621 14.9713C13.8762 13.8238 13.8762 11.9538 12.1621 10.8133C10.2212 9.51709 7.02664 9.51709 5.07164 10.8133Z"
                  stroke="#9A9EA6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Bright Coker</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9467 6.25333H7.79341H4.05341C3.41341 6.25333 3.09341 7.02666 3.54674 7.47999L7.00008 10.9333C7.55341 11.4867 8.45341 11.4867 9.00674 10.9333L10.3201 9.61999L12.4601 7.47999C12.9067 7.02666 12.5867 6.25333 11.9467 6.25333Z"
                  fill="#9A9EA6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-8 w-full">
          <div className="mb-4 w-full">
            <button className="flex items-center gap-3 hover:text-gray-500 transition-all text-sm  cursor-pointer">
              <svg
                width="8"
                height="17"
                viewBox="0 0 8 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.12535 15.3576L1.42035 9.37429C0.746602 8.66767 0.746602 7.51139 1.42035 6.80477L7.12535 0.821472"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Marketplace</span>
            </button>
          </div>
          <div className="flex gap-8 mb-8 w-full">
            <div className="p-4 bg-blue-500 w-90 rounded-xl">
              <h3 className="text-sm font-semibold text-white">
                Real estate goal
              </h3>
              <p className="text-xs text-white mb-2 mt-1">
                Tell us your goal and our <b>Ai</b> recommend properties that
                aligns with it
              </p>
              <div className="flex justify-end">
                <button className="text-xs border border-black px-3 bg-white text-blue-500 font-semibold py-1.5 rounded-lg">
                  Explore
                </button>
              </div>
            </div>

            <div className="p-4 bg-green-600 w-90 rounded-xl">
              <div className="flex mb-2">
                <button className="text-xs border border-black px-3 bg-white text-blue-500 font-semibold py-1.5 rounded-lg">
                  8% per annum
                </button>
              </div>
              <h3 className="text-sm font-semibold text-white">Prop safe</h3>
              <p className="text-xs text-white mt-1">
                Save towards your real estate goals
              </p>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <ul className="flex gap-6 text-sm text-gray-500 font-medium">
              {propertyTypesTab.map((item, index) => (
                <li className="" key={item.name}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold text-lg mb-4">
              Top featured apartments for rent
            </h2>
            <div className="text-sm nw-full overflow-x-auto">
              <ul className="flex gap-4 w-full">
                {featuredApartments.map((item, index) => (
                  <li key={item.name}>
                    <div className="rounded-2xl w-66 overflow-hidden">
                      <Image
                        src={item.image}
                        width={300}
                        height={300}
                        alt="Picture of a self contain"
                      />
                    </div>
                    <div className="flex divide-x mt-3 divide-gray-200">
                      <h4 className="font-medium pr-4">{item.name}</h4>
                      <p className="pl-4 text-gray-500">{item.location}</p>
                    </div>
                    <span className="font-semibold text-lg">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
