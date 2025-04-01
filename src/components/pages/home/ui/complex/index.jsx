import Contianer from "@/components/ui/container";
import Image from "next/image";
import React, { useState } from "react";
const data = [
  {
    id: 1,
    label: "Двор"
  },
  {
    id: 2,
    label: "Hall"
  },
  {
    id: 3,
    label: "Площадки"
  }
];
export default function Complex() {
  const [id, setId] = useState(1);
  return (
    <div
      className="w-full pt-[10px]  pb-[58px] md:pt-[100px] md:pb-[246px]"
      id="Complex"
    >
      <Contianer>
        <h3 class="w-full max-w-[650px] text-white text-[28px] md:text-5xl font-nurmal md:font-medium  uppercase leading-[38px] md:leading-[58px] tracking-widest">
          КонЦЕПЦИЯ ЖИЛОГО КОМПЛЕКСА
        </h3>
        <div className="flex items-center gap-[3px] md:gap-[50px] mb-[22px] md:mb-[46px] mt-[30px] md:mt-[52px]">
          {data?.map((e) => (
            <div
              className="flex items-center gap-[6px] cursor-pointer"
              key={e?.id}
              onClick={() => setId(e?.id)}
            >
              <div
                class={`relative ${
                  id == e?.id ? "w-[52px]" : "w-[30px]"
                } h-[52px]`}
              >
                {id == e?.id ? (
                  <>
                    <div class="w-[52px] h-[52px] left-0 top-0 absolute opacity-40 rounded-full border border-orange-200"></div>
                    <div class="w-[34px] h-[34px] left-[9px] top-[9px] absolute rounded-full border border-orange-200"></div>
                  </>
                ) : (
                  ""
                )}
                <div class="w-3 h-3 left-[20px] top-[20px] absolute bg-orange-200 rounded-full"></div>
              </div>
              <div class="text-white sm:text-[18px] text-[22px] font-normal ]">
                {e?.label}
              </div>
            </div>
          ))}
        </div>
      </Contianer>

      <Image
        className={"w-full min-h-[249px] object-cover"}
        width={1900}
        height={400}
        src="/busket.jpg"
      />

      <Contianer
        className={
          "flex flex-wrap md:flex-nowrap  w-full mt-[40px] md:mt-[110px] text-center md:text-start"
        }
      >
        <div className="w-1/2 md:w-full sm:pl-[42px] md:border-l-[1px] border-orange-200 mb-[20px]">
          <p class="text-orange-200 text-[44px] lg:text-[64px] font-medium">
            8 га
          </p>
          <p class="text-orange-200 text-xs md:text-lg font-normal ">
            ПЛОЩАДЬ ОБЪЕКТА
          </p>
        </div>
        <div className="w-1/2 md:w-full sm:pl-[42px] border-l-[1px] border-orange-200 mb-[20px]">
          <p class="text-orange-200 text-[44px] lg:text-[64px] font-medium">
            1
          </p>
          <p class="text-orange-200 text-xs md:text-lg font-normal ">ОЧЕРЕДИ</p>
        </div>
        <div className="w-1/2 md:w-full sm:pl-[42px] md:border-l-[1px] border-orange-200">
          <p class="text-orange-200 text-[44px] lg:text-[64px] font-medium">
            200
          </p>
          <p class="text-orange-200 text-xs md:text-lg font-normal ">
            КОЛ-ВО КВАРТИР
          </p>
        </div>
        <div className="w-1/2 md:w-full sm:pl-[42px] border-l-[1px] border-orange-200">
          <p class="text-orange-200 text-[44px] lg:text-[64px] font-medium">
            5-7-20
          </p>
          <p class="text-orange-200 text-xs md:text-lg font-normal ">
            ПЛОЩАДЬ ОБЪЕКТА
          </p>
        </div>
      </Contianer>
    </div>
  );
}
