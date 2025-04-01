import {
  FaceBookIcons,
  TelegramIcons,
  TwitterIcons,
  YoutobeIcons
} from "@/components/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Contianer from "../container";
import Link from "next/link";

const navbar = [
  {
    id: 1,
    label: "Проекты",
    link: "/project"
  },
  {
    id: 2,
    label: "Концепция",
    link: "/#Complex"
  },
  {
    id: 3,
    label: "Планировки",
    link: "/#plan"
  },
  {
    id: 4,
    label: "Локация",
    link: "/#About"
  }
];
const navbar1 = [
  {
    id: 1,
    label: "О нас",
    link: "/#About"
  },
  {
    id: 2,
    label: "Галерея",
    link: "/#Phone"
  },
  {
    id: 3,
    label: "Контакты",
    link: "/#About"
  },
  {
    id: 4,
    label: "+998 78 122 22 20",
    link: "tel:+998781222220"
  }
];

export default function Header() {
  const [open,seOpen ] = useState(false)
 
  return (
    <header className="bg-transparent fixed w-full z-40">
      <Contianer className={"flex items-start justify-between pt-[11px] top-0"}>
        <div className="hidden tablet:block">
          <p class="pb-[23px] text-white text-lg font-medium ">г.Ташкент</p>
          <div
            class=" rounded-[3px] backdrop-blur-[74px] flex gap-[20px] py-[10px] px-[15px]"
            style={{ background: "#163B37" }}
          >
            {navbar?.map((e) => (
              <Link
                href={e?.link}
                key={e?.id}
                class="text-white text-[13px]  xl:text-lg font-medium "
              >
                {e?.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p class="text-white text-lg font-medium mb-[23px] tablet:hidden">
            г.Ташкент
          </p>
          <Link href='/'
            class="px-[21px] lg:px-[30px] py-[10px] lg:pb-[18px]  inline-block"
            style={{ background: "#163B37" }}
          >
            <Image
              className="w-[90.97px] h-[79.80px] lg:w-[120px] lg:h-[105px] "
              src={"/logo.svg"}
              width={120}
              height={105}
            />
          </Link>
        </div>
        <div className="flex  flex-col items-end">
          <div className="flex justify-end gap-[4px]  pb-[23px]">
            <div
              class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]"
              style={{ background: "#12121221" }}
            >
              <TwitterIcons />
            </div>
            <div
              class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]"
              style={{ background: "#12121221" }}
            >
              <YoutobeIcons />
            </div>
            <div
              class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]"
              style={{ background: "#12121221" }}
            >
              <FaceBookIcons />
            </div>
            <div
              class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]"
              style={{ background: "#12121221" }}
            >
              <TelegramIcons />
            </div>
          </div>
          <div
            class=" rounded-[3px] backdrop-blur-[74px]  gap-[20px] py-[10px] px-[15px] hidden tablet:flex"
            style={{ background: "#163B37" }}
          >
            {navbar1?.map((e) => (
              <Link
                href={e?.link}
                key={e?.id}
                class="text-white text-[13px]  xl:text-lg font-medium "
              >
                {e?.label}
              </Link>
            ))}
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation()
              seOpen(!open)
            }}
            class="tablet:hidden gap-[4px] rounded-[3px] backdrop-blur-[74px] flex items-center p-[10px] text-center text-white text-[13px] font-extrabold leading-none tracking-wider"
            style={{ background: "#163B37" }}
          >
            <div class={`${open ? "relative":""} gap-[3px] w-4 flex-col justify-start items-start  inline-flex`} >
              <div class={`${open ? "absolute rotate-[45deg]":""} w-4 h-[1px] bg-white`}></div>
              <div class={`${open ? "hidden":""} w-4 h-[1px] bg-white`}></div>
              <div class={`${open ? "absolute rotate-[-45deg]":""} w-4 h-[1px] bg-white`}></div>
            </div>
            МЕНЮ
          </div>
        </div>
      </Contianer>

      <div className="overflow-hidden">
        <div className={`${open ? "translate-x-0" : "-translate-x-96"} pt-[50px] pl-[50px] tablet:hidden  w-8/12 transition duration-300 ease-out  absolute top-0 left-0 h-screen   flex flex-col gap-[20px]   max-w-[300px]`} style={{ background: "#163B37" }}>
          {
            navbar.map(e => (
              <Link
                href={e?.link}
                key={e?.id}
                class="text-loc"
                onClick={()=>seOpen(false)}
              >
                {e?.label}
              </Link>
            ))
          }
      </div>  
     </div>
    </header>
  );
}
