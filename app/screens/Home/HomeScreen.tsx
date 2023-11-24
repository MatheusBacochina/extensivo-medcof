'use client';
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
import BnNav from "@/app/components/BnNav/BnNav";
import Doubt from "@/app/components/Doubt/Doubt";
import Footer from "@/app/components/Footer/Footer";
import Whats from "@/app/components/Whats/Whats";
import TDC from "@/app/components/TDC/TDC";
export default function HomeScreen({ id }: { id?: string }) {
  let data = pages[id || "extensivo-r1-2024"];


  return (
    <>
      <BnNav />
      <Header />
      <Numbers />
      <Team />
      <Students />
     {id === "extensivor1-tdc" || id === "extensivo-2024-r-clinica-medica-tdc" &&  <TDC /> }
      <Ia />
      <ChoiseMedcof />
      <Details />
      <EliteR elements={data.accordionElite} />
      <EliteProgram />
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
