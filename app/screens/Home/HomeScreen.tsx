"use client";
import Header from "@/app/components/Header/Header";
import Numbers from "@/app/components/Numbers/Numbers";
import Team from "@/app/components/Team/Team";
import Students from "@/app/components/Students/Students";
import Ia from "@/app/components/Ia/Ia";
import ChoiseMedcof from "@/app/components/ChoiseMedcof/ChoiseMedcof";
import Details from "@/app/components/Details/Details";
import EliteR from "@/app/components/EliteR/EliteR";
import EliteProgram from "@/app/components/EliteProgram/EliteProgram";
import Arena from "@/app/components/Arena/Arena";
import Bonus from "@/app/components/Bonus/Bonus";
import FirstPlaces from "@/app/components/FirstPlaces/FirstPlaces";
import Cards from "@/app/components/Cards/Cards";
import { pages } from "@/app/constants/pages";
import Answers from "@/app/components/Answers/Answers";
import Aqfm from "@/app/components/Aqfm/Aqfm";
import Doubt from "@/app/components/Doubt/Doubt";
import Footer from "@/app/components/Footer/Footer";
import Whats from "@/app/components/Whats/Whats";
import TDC from "@/app/components/TDC/TDC";
import CofExpress from "@/app/components/CofExpress/CofExpress";
import localFont from "next/font/local";
const mona600 = localFont({ src: "../../../fonts/MonaSans-SemiBold.ttf" });
export default function HomeScreen({ id }: { id?: string }) {
  let data = pages[id || "extensivo-r1-2024"];
  const r = data.name.includes("R1") ? "R1" : "R+";

  return (
    <>
      {id?.includes("tdc") && <TDC />}
      <Header />
      <Numbers />
      <div className="bg-red-600 flex justify-center py-6 gap-4 items-center px-4 md:px-8">
        <span className="text-stone-100 font-medium text-2xl animate-bounce">
          ↓
        </span>
        <span style={{ fontFamily: mona600.style.fontFamily }} className=" text-white font-bold text-2xl text-center animate-pulse">
          Alerta novidade extensivo 2024{" "}
        </span>
        <span className="text-stone-100 font-medium text-2xl animate-bounce">
          ↓
        </span>
      </div>
      <Aqfm />
      <CofExpress />
      <div className="bg-red-600 flex justify-center py-6 gap-4 items-center px-4 md:px-8">
        <span className="text-stone-100 font-medium text-2xl animate-bounce">
          ↑
        </span>
        <span style={{ fontFamily: mona600.style.fontFamily }} className=" text-white font-bold text-2xl text-center animate-pulse">
          Alerta novidade extensivo 2024{" "}
        </span>
        <span className="text-stone-100 font-medium text-2xl animate-bounce">
          ↑
        </span>
      </div>
      <Team />
      <Students />
      <Ia />
      <ChoiseMedcof />
      <Details />
      <EliteR r={r} elements={data.accordionElite} />
      <EliteProgram r={r} />
      <Arena />
      <Bonus />
      <FirstPlaces />
      <Cards elements={data.cards} />
      <Answers elements={data.accordionAnswersElite} />
      <Doubt />
      <Footer />
      <Whats />
    </>
  );
}
