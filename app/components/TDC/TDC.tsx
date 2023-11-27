'use client'
import Image from "next/image";
import PointsTdc1 from "../Svg/PointsTdc1";
import PointsTdc2 from "../Svg/PointsTdc2";
import { use, useEffect, useState } from "react";
const TDC = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  },[])
  return domLoaded && (
    <div className="md:flex-row flex-col flex bg-[#E3F2F9]">
      <div className="flex-1 isolate relative flex md:py-28 py-16 items-center md:pl-16 px-6">
      <PointsTdc2 />
        <h1 className=" font-poppins leading-none text-[24px] sm:text-[26px] md:text-[28px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] font-semibold">
          <span className="text-blue-800">MedCof Elite </span> +{" "}
          <span className="text-[#FF5500]">TDC</span>
          <h6 className="leading-none mt-2 text-black text-opacity-80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-normal font-sora">
            Quer ter seu acesso ao Tdc por um ano gratuitamente?{" "}
          </h6>
          <p className="max-w-[340px] mt-4 text-gray-600 text-sm font-normal font-mont leading-snug">
            Adquirindo o pacote elite você ganha acesso ao Tá de Clinicagem
            durante um ano na faixa 🎁
          </p>
        </h1>
      </div>
      <div className="basis-[345px] lg:basis-[445px] relative flex md:rounded-tl-[100px] items-center justify-center md:py-28 bg-[#FF5500]">
        <Image src={"/tdc.png"} width={170} height={170} alt="TDC logo" />
        <PointsTdc1 />
      </div>
    </div>
  );
};

export default TDC;
