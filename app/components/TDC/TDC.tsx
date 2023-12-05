"use client";
import Image from "next/image";
import PointsTdc1 from "../Svg/PointsTdc1";
import PointsTdc2 from "../Svg/PointsTdc2";
import { use, useEffect, useState } from "react";
const TDC = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    domLoaded && (
      <div className="flex bg-[#E3F2F9]">
        <div className="flex-1 bg-[#E3F2F9] md:px-6" />
        <div className="basis-[1024px] flex md:flex-row flex-col">
          <div className="flex-1 relative isolate flex py-10 md:py-0 items-center">
            <PointsTdc2 />
            <h1 className="ml-4 font-poppins leading-none text-[24px] sm:text-[26px] md:text-[28px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] font-semibold">
              <span className="text-blue-800">MedCof Elite </span> +{" "}
              <span className="text-[#FF5500]">TDC</span>
              <h6 className="leading-none mt-2 text-black text-opacity-80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-normal font-sora">
              Quer ter seu acesso ao Tdc por <span className="font-medium">seis meses ou um ano gratuitamente?</span>
              </h6>
              <p className="max-w-[360px] mt-4 text-gray-600 text-sm font-normal font-mont leading-snug">
              Adquirindo o pacote extensivo normal ou elite você ganha acesso ao Tá de Clinicagem 🎁
              </p>
            </h1>
          </div>
          <div className="md:basis-[345px] md:h-[345px] h-[300px] items-center md:rounded-tl-[60px] justify-center flex relative bg-[#FF5500]">
            <Image src={"/tdc.png"} width={170} height={170} alt="TDC logo" />
            <PointsTdc1 />
          </div>
        </div>
        <div className="flex-1 bg-[#FF5500]" />
      </div>
    )
  );
};

export default TDC;
