"use client";
import Logo from "@/app/components/Logo";
import Image from "next/image";
import { useRef, useState } from "react";
import Bg from "../Bg";
const vimeoUrl = "https://player.vimeo.com/video/865690031?h=2678665bdb";
const Header = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const refVideo = useRef<HTMLIFrameElement>(null);
  return (
    <header className="overflow-hidden pb-20 relative px-4 background-header h-fit flex flex-col items-center pt-[20px] isolate">
      <Bg
        logo={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
          >
            <path
              d="M17.3898 9.26451C17.2846 8.99762 17.074 8.86548 16.7706 8.86548H10.88L13.8069 0.908325C13.9344 0.563715 13.8237 0.302021 13.5398 0.107687C13.289 -0.0633123 12.9218 -0.0244513 12.714 0.180243L0.750529 11.9748C0.542724 12.1795 0.493502 12.436 0.604919 12.7262C0.712196 13.006 0.920779 13.1408 1.22417 13.1408H7.11472L4.18783 21.1083C4.06061 21.4529 4.16891 21.7068 4.45497 21.896C4.64283 22.0229 5.02294 22.0773 5.30508 21.8001L17.2442 10.0056C17.4518 9.80087 17.5033 9.55473 17.3898 9.26451ZM6.49544 18.7401L8.70588 12.7029C8.79035 12.4723 8.76652 12.2521 8.63308 12.0706C8.49938 11.8893 8.31721 11.8038 8.08635 11.8038H2.8638L11.4993 3.26621L9.27666 9.31376C9.19971 9.52365 9.23366 9.72315 9.36166 9.9097C9.50107 10.1118 9.67752 10.2129 9.90841 10.2129H15.131L6.49544 18.7401Z"
              fill="white"
            />
          </svg>
        }
      />
      <Logo />
      <h1 className="text-white animation-h1 max-w-[816px] mt-7 text-center text-3xl font-normal font-inter text-[24px] sm:text-[26px] md:text-[28px] ">
        Comece a estudar <span className="font-semibold">6 meses antes</span>{" "}
        dos seus concorrentes e{" "}
        <span className="h1-hero font-semibold">
          seja aprovado na residência médica que você quiser!
        </span>
      </h1>
      <div className="max-w-[700px] animation-h1 bg-white bg-opacity-10 rounded-xl isolate group overflow-hidden w-full relative aspect-video mt-6 grid">
        <iframe
        
          ref={refVideo}
          title="Vimeo Video"
          src={vimeoUrl}
          allow="fullscreen; accelerometer; autoplay"
          width="100%"
          height="100%"
          allowFullScreen
          className="rounded-sm"
        />
        {!videoLoaded && (
          <div
            onClick={() => {
              setVideoLoaded(true);
              if (refVideo.current) {
                console.log("here");
                var url = refVideo.current.src;
                refVideo.current.src = url + "&autoplay=1";
              }
            }}
            className="absolute hover:scale-105 cursor-pointer transition-transform top-0 left-0 bg-slate-600 z-50 w-full h-full"
          >
            <Image
              fill
              src={"/bg_video.png"}
              alt="Coelho medcof"
              priority={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        )}
      </div>
      <button className="cursor-pointer button rounded-lg mt-10 shadow px-6 py-3 hover:scale-105 transition-all">
        <span className="text-white text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px]  font-normal font-inter leading-normal">
          Quero começar a estudar hoje!
        </span>
      </button>
      <div className="max-w-[855px] relative mt-[96px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 11"
          width="16"
          height="11"
          className="absolute -z-10 left-1/2 transform -translate-x-1/2 opacity-80"
        >
          <path d="M8 11l8-9H0z" fill="#ffffff" fill-opacity=".54" />
        </svg>

        <div className="w-full bg-white bg-opacity-10 rounded-xl shadow border-2 border-white border-opacity-10 px-4 mask pt-10 pb-8">
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
      </div>
    </header>
  );
};

export default Header;
