import Contianer from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <Contianer className={"mb-[154px] z-20"} id="About">
      <div
        className={
          "bg-[url('/Rectangle11001449.png')] pl-[41px] pr-[30px] pb-[18px] pt-[26px] flex flex-col  md:flex-row  items-end justify-between relative"
        }
      >
        <div class="w-full max-w-[497px] bg-emerald-900 shadow border border-orange-200 px-[23px] sm:px-[70px] pt-[7px] pb-[38px] sm:pt-[74px] sm:pb-[190px]">
          <h3 class="text-white text-[32px] sm:text-[44px] font-bold  leading-[38px] sm:leading-[58px] tracking-widest">
            Istanbul City
          </h3>
          <p class="w-full max-w-[343px] text-white text-[13px] sm:text-base font-normal mt-[20px] leading-[13px] sm:leading-7">
            c.Tashkent Uzbekistan Abdulla Qodiriy ko’chasi 65 A
          </p>
        </div>
        <Image
          className="absolute right-[360px] top-[160px] center"
          src={"/icons.svg"}
          width={77}
          height={94}
        />
        <button class="bg-emerald-900 rounded-[50px] border border-orange-200 text-white text-lg font-semibold px-[29px] py-[17px] hidden sm:block">
          Создать маршрут
        </button>
      </div>
    </Contianer>
  );
};

export default AboutUs;
