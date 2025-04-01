import Contianer from "@/components/ui/container";
import Image from "next/image";
import React from "react";

export default function Plan() {
  return (
    <div className="w-full" id="plan">
      <Contianer className="w-full pb-[38px] md:pb-[68px] //bg-[url('/Group48098590.svg')]  bg-right-bottom bg-no-repeat">
        <h3 class="w-full max-w-[821px] text-white text-[28px] md:text-5xl font-medium  uppercase leading-[38px] md:leading-[58px] tracking-widest">
          Планировки для вашего удобство
        </h3>
      </Contianer>
      <div className=" w-full bg-white relative">
        <Image
          src={"/Rectangle1.jpg"}
          width={1066}
          height={690}
          objectFit={"cover"}
          className={
            "xl:absolute right-0 top-0 w-full xl:w-7/12 object-cover xl:h-[690px]"
          }
        />
        <Contianer className={"pt-[67px] pb-[72px]"}>
          <div className="w-full max-w-[375px] md:ml-[48px]">
            <Image
              src={"/Rectangle.jpg"}
              width={375}
              height={337}
              className="mb-[61px]"
            />
            <div className="w-full flex flex-wrap ">
              <div className="w-1/2 text-center mb-[25px]">
                <p class="text-center text-neutral-800 text-[22px] font-normal ">
                  89 кв/м
                </p>
                <p class="opacity-60 text-center text-neutral-800 text-[15px] font-normal mt-[8px]">
                  Общая площадь{" "}
                </p>
              </div>
              <div className="w-1/2 text-center mb-[25px]">
                <p class="text-center text-neutral-800 text-[22px] font-normal ">
                  89 кв/м
                </p>
                <p class="opacity-60 text-center text-neutral-800 text-[15px] font-normal mt-[8px]">
                  Общая площадь{" "}
                </p>
              </div>
              <div className="w-1/2 text-center">
                <p class="text-center text-neutral-800 text-[22px] font-normal ">
                  89 кв/м
                </p>
                <p class="opacity-60 text-center text-neutral-800 text-[15px] font-normal mt-[8px]">
                  Общая площадь{" "}
                </p>
              </div>
              <div className="w-1/2 text-center">
                <p class="text-center text-neutral-800 text-[22px] font-normal ">
                  89 кв/м
                </p>
                <p class="opacity-60 text-center text-neutral-800 text-[15px] font-normal mt-[8px]">
                  Общая площадь{" "}
                </p>
              </div>
            </div>
          </div>
        </Contianer>
      </div>
    </div>
  );
}
