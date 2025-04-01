import Contianer from "@/components/ui/container";
import Image from "next/image";
import React from "react";

export default function PlanForYou() {
  return (
    <Contianer
      className={
        " pt-[50px] pb-[46px] sm:pt-[100px] sm:pb-[100px] xl:pt-[316px] xl:pb-[206px]"
      }
      id="planForYou"
    >
      <h3 class="max-w-[643px] w-full text-white text-[28px] md:text-[80px] font-normal   leading-[38px] md:leading-[87px] tracking-[4px] mb-[10px]  sm:mb-[75px]">
        Планировки для вас{" "}
      </h3>
      <div className="flex flex-col lg:flex-row items-start gap-[50px] xxl:gap-[142px]  mt-[-258px] xxl:mt-[-278px]">
        <div className="max-w-[253px] tablet:max-w-[426px] xxl:max-w-[546px] mt-[278px] aspect-[0.7/1] h-[339px] tablet:h-[560px] xxl:h-[732px] w-full relative">
          <Image
            className="aspect-[0.7/1] w-full z-10 absolute"
            src={"/Rectangle4.png"}
            width={546}
            height={732}
          />
          <Image
            className="w-[60px] sm:w-[132px] absolute top-[-66px] sm:top-[-216px] right-[-16px] sm:right-[-46px] z-1"
            src={"/f1.png"}
            width={152}
            height={413}
          />
          <Image
            className="w-[60px] sm:w-[132px] absolute top-[54px] right-[-42px] sm:right-[-92px]  z-1"
            src={"/f2.png"}
            width={143}
            height={415}
          />
          <Image
            className="absolute top-[55px] right-[-55px] w-[171px]  lg:top-[206px] lg:right-[-246px] lg:w-[369px]  z-30"
            src={"/k1.png"}
            width={369}
            height={254}
          />
          <Image
            className="absolute w-[100px] bottom-[80px] right-[-5px] lg:bottom-[97px] lg:right-[-146px] lg:w-[230px]  z-30"
            src={"/k2.png"}
            width={230}
            height={158}
          />
        </div>
        <div className="max-w-[253px] lg:-translate-y-64 tablet:max-w-[426px] mt-[-160px] mr-[20px] sm:mr-[100px] lg:mr-0 lg:mt-0 self-end xxl:max-w-[546px] aspect-[0.7/1] h-[339px] tablet:h-[560px] xxl:h-[732px] w-full relative">
          <Image
            className="aspect-[0.7/1] w-full z-10 absolute "
            src={"/Rectangle5.png"}
            width={546}
            height={732}
          />
          <Image
            className="w-[60px] sm:w-[132px] absolute  top-[-160px] left-[-90px] z-1"
            src={"/f3.png"}
            width={132}
            height={162}
          />
          <Image
            className="w-[60px] sm:w-[143px] absolute top-[-46px] sm:top-[-126px] right-[-16px]  sm:right-[-66px] z-1"
            src={"/f1.png"}
            width={143}
            height={413}
          />
          <Image
            className="w-[60px] sm:w-[143px] absolute bottom-[11px] right-[-16px]  sm:right-[-92px] rotate-6 z-1"
            src={"/f2.png"}
            width={143}
            height={415}
          />
        </div>
      </div>
    </Contianer>
  );
}
