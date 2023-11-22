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
export default function HomeScreen({ id }: { id?: string }) {
  const data = pages[id || "extensivo-2024-rendoscopia"];
  return (
    <>
      <BnNav />
      <Header />
      <Numbers />
      <Team />
      <Students />
      <Ia />
      <ChoiseMedcof />
      <Details />
      <EliteR elements={data.accordionElite} />
      <EliteProgram />
      <Arena />
      <Bonus />
      <FirstPlaces />
      <Cards elements={data.cards} />
      <Answers />
    </>
  );
}
