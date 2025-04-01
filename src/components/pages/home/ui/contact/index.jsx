import { BtnIcons } from "@/components/icons";
import Contianer from "@/components/ui/container";
import InputGlobal from "@/components/ui/input";
import React from "react";

export default function ContactsSection() {
  return (
    <Contianer className={"pb-[91px] "} id="Contacts">
      <h3 class="max-w-[643px] w-full text-white text-[28px] md:text-[80px] font-normal leading-[38px] md:leading-[87px] tracking-[4px]  pt-[40px] pb-[20px] md:pt-[196px]">
        Получить консультацию
      </h3>
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-[30px] sm:gap-[78px]">
        <div className="flex flex-wrap md:flex-nowrap gap-5 w-full max-w-[1002px]">
          <InputGlobal
            className={"w-full md:w-1/2"}
            type={"text"}
            placeholder={"Ваше имя"}
          />
          <InputGlobal
            mask="+\9\9\8-99-999-99-99"
            className={"w-full md:w-1/2"}
            type={"tel"}
            placeholder={"номер телефона"}
          />
        </div>

        <div className="cursor-pointer">
          <BtnIcons />
        </div>
      </div>
    </Contianer>
  );
}
