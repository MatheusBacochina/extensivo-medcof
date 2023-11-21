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
export default function HomeScreen() {
  return (
    <>
      <Header />
      <Numbers />
      <Team />
      <Students />
      <Ia />
      <ChoiseMedcof />
      <Details />
      <EliteR />
      <EliteProgram />
      <Arena />
      <Bonus />
      <FirstPlaces  />
    </>
  );
}
