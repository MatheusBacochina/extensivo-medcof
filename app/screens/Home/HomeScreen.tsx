'use client'
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "@/public/logo.json";
export default function HomeScreen() {
  return (
    <>
      <header className="overflow-hidden h-fit flex flex-col items-center pt-[20px] isolate">
      <Image  src="/background.png" fill alt="Medcof background header" className="-z-10" style={{ objectFit: "cover" }} />
      <Lottie
        animationData={animationData}
        className="max-w-[300px] h-[186px]"
        loop={false}
      />
        <h1 className="text-white  max-w-[840px] mt-7 text-center text-3xl font-normal font-sora ">
          Comece a estudar <span className="font-bold">6 meses antes</span> dos seus concorrentes e seja aprovado
          na <span className="font-bold">residência médica que você quiser!</span> 
        </h1>
      </header>
    </>
  );
}
