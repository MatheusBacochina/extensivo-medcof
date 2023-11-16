"use client";
import Logo from "@/app/components/Logo";
import Image from "next/image";
import { useState } from "react";
import Bg from "../Bg";
const vimeoUrl = "https://player.vimeo.com/video/865690031?h=2678665bdb";
const Header = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <header className="overflow-hidden pb-20 relative px-4 background-header h-fit flex flex-col items-center pt-[20px] isolate">
      <Bg />
      <Logo />
      <h1 className="text-white animation-h1 max-w-[816px] mt-7 text-center text-3xl font-normal font-inter text-[24px] sm:text-[26px] md:text-[28px] ">
        Comece a estudar <span className="font-semibold">6 meses antes</span>{" "}
        dos seus concorrentes e{" "}
        <span className="h1-text-color font-semibold">
          seja aprovado na residência médica que você quiser!
        </span>
      </h1>
      <div className="max-w-[700px] animation-h1 bg-black items-baseline isolate group overflow-hidden w-full relative aspect-video mt-4 grid">
        {!videoLoaded && (
          <div
            role="status"
            className="absolute top-1/2 left-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2"
          >
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-fuchsia-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
        <iframe
          onLoad={() => {
            setVideoLoaded(true);
          }}
          title="Vimeo Video"
          src={vimeoUrl}
          allow="fullscreen"
          width="100%"
          height={"100%"}
          allowFullScreen
          className="rounded-sm col-span-full"
        />
      </div>
      <button className="bg-gradient-to-b cursor-pointer from-fuchsia-400 to-violet-500 hover:bg-gradient-to-l rounded-lg mt-10 shadow px-6 py-3 hover:scale-105 transition-all">
        <span className="text-white text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px]  font-normal font-inter leading-normal">
          Quero começar a estudar hoje!
        </span>
      </button>
      <div className="max-w-[855px] bg-white bg-opacity-10 rounded-xl shadow border-2 border-white border-opacity-10  px-4 mask w-full pt-10 pb-8 mt-[96px] sm:mt-[106px]">
        <h1 className="text-center text-[#fcf3ff] text-[20px] lg:text-[21px] xl:text-[22px] 2xl:text-[23px] font-semibold font-inter">
          Tenha acesso antecipado:
        </h1>
        <div className="flex justify-center gap-6 flex-wrap mt-1">
          <div className="basis-[200px] items-center mt-4 flex flex-col">
            <Image width={50} height={50} src={"/ia.svg"} alt="ia logo" />
            <h5 className="text-[#fcf3ff] text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  mt-1 font-inter text-center font-thin">
              Único QBank com{" "}
              <span className="font-semibold">I.A generativa</span> <br /> (o
              melhor do país!)
            </h5>
          </div>
          <div className="basis-[200px] items-center mt-4 flex flex-col">
            <Image
              width={50}
              height={50}
              src={"/cards.svg"}
              alt="cartas logo"
            />
            <h5 className="text-[#f8eafc] text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  mt-1 font-inter font-thin text-center">
              Milhares de flashcards com{" "}
              <span className="font-semibold"> revisões espaçadas</span>
            </h5>
          </div>
          <div className="basis-[200px] items-center mt-4 flex flex-col">
            <Image
              width={50}
              height={50}
              src={"/chapeu.svg"}
              alt="chapeu logo"
            />
            <h5 className="text-[#fcf3ff] text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  mt-1 font-inter font-thin text-center">
              Aulas com <span className="font-semibold">especialistas</span>
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
