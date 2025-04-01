import Contianer from "@/components/ui/container";
import Image from "next/image";
import React from "react";

export default function HomeSity() {
  return (
    <div className="w-full bg-[url('/Click.png')]" id="project">
      <Contianer className={"mt-[-250px] md:mt-[-100px]"}>
        <div className="flex flex-wrap  md:flex-nowrap justify-between gap-[10px] items-center pb-[40px]">
          <div className="w-full max-w-[350px]  tablet:max-w-[500px] xl:max-w-[690px]">
            <h2 class="text-white font-extrabold text-[70px] tablet:text-[100px] xl:text-[140px]">
              ISTANBUL
            </h2>
            <h2 class="text-white text-end  font-extrabold mt-[-50px] tablet:mt-[-70px] xl:mt-[-90px] text-[80px] tablet:text-[100px] xl:text-[140px]">
              CITY
            </h2>
          </div>
          <div class="w-full max-w-[538px] bg-white/opacity-10 backdrop-blur-[144px]">
            <p class="w-full max-w-[479px] text-white text-[22px] font-bold  uppercase leading-[30px] p-[35px] pb-[70px]">
              Современное жилье в сердце города: жилой комплекс новостроек с
              удобствами и стилем для вашей идеальной жизни.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-[10px] ">
          <div class="w-full max-w-[650px] pl-[29px] md:pl-[65px] px-[65px] md:pt-[62px] pt-[38px] md:pb-[103px] pb-[204px] sm:mt-[53px] bg-white">
            <h4 class="w-full max-w-[496px] text-neutral-800 text-[32px] sm:text-[44px] font-semibold pb-[17px]">
              О жилой комплексе
            </h4>
            <p class="w-full max-w-[496px] text-neutral-800 text-base  sm:text-lg font-normal  leading-tight sm:leading-[27px]">
              Расположенный в живописном пригороде, наш жилой комплекс
              предлагает современные апартаменты с изысканным дизайном и
              удобствами для комфортной жизни. Открытые пространства, бассейн,
              фитнес-центр и детские площадки создают идеальное окружение для
              семей и молодых профессионалов.{" "}
            </p>
          </div>
          <div className="w-full max-w-[600px]  px-[20px]">
            <Image
              src="/Group48098623.png"
              width={602}
              height={650}
            />
         
          </div>
        </div>
      </Contianer>
    </div>
  );
}
