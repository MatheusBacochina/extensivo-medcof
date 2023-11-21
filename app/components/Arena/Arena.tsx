import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";
import { arena } from "@/app/constants/doctors";
import { useEffect, useRef, useState } from "react";

type HandleScrollType = (containerRef: ContainerRefType) => void;
type ContainerRefType = React.RefObject<HTMLDivElement>;

function Photo({
  src,

}: {
  src: string;

}) {
  return (
    <div className="basis-full rounded-lg max-h-[300px] overflow-hidden relative sm:basis-1/2 md:basis-1/3 aspect-[5/6] bg-slate-400 flex-shrink-0">
      <Image src={src} fill alt="arena photo" style={{ objectFit: "cover" }} />
    </div>
  );
}

const Arena = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  
    function handleScroll() {
      if (containerRef.current) {
        if (containerRef.current.scrollLeft >= (containerRef.current.scrollWidth / 2 - containerRef.current.offsetWidth)) {
          containerRef.current.scrollLeft -= 0.74;
        } else {
          containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
      }
    }
  
    // Start the interval loop
    const scrollInterval = setInterval(() => {
      handleScroll();
    }, 22); // Adjust the interval as needed for your desired scroll speed
  
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
  return (
    <div className="bg-white pt-10 pb-20 px-4">
      <h3 className="text-center h1-text-color-bold text-zinc-900 leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
      Arena Elite no Coração de São Paulo ♥
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 bg-red-600 mx-auto mt-5"></div>
      <p className="text-center text-zinc-600 max-w-lg mx-auto mt-5 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-mont leading-relaxed">
      Já imaginou poder usar uma sala de estudos exclusiva, onde você pode reunir seus amigos do extensivo elite para estudar e ter contato com os coordenadores MedCof? A Arena Elite é nosso espaço de estudos para o aluno elite, com 8 salas de estudos, além de mesas redondas para grupos de estudos pertinho do HC.
      </p>
      <ScrollShadow
        hideScrollBar
        ref={containerRef}
        orientation="horizontal"
        size={10}
        className="mx-auto mt-10 overflow-x-scroll gap-5 max-w-3xl flex"
      >
    
        {[...arena, ...arena].map((src, index) => (
          <Photo
            key={index}
            src={src}
           
          />
        ))}
      </ScrollShadow>

      <Image src={'/selo.png'} width={400} height={200} alt="selo 7 dias"  className="mx-auto mt-14"/>
      <h3 className="text-center h1-text-color-bold text-zinc-900 leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
      Você terá acesso a uma Garantia Incondicional.
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 bg-red-600 mx-auto mt-5"></div>
      <p className="text-center text-zinc-600 max-w-3xl mx-auto mt-5 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-mont leading-relaxed">
      Durante os próximos sete (07) dias, você terá acesso completo a todo o conteúdo do Elite para testar e aprovar – sem nenhum risco financeiro. Caso depois desse período você não considere o Elite MedCof a solução ideal para a sua preparação, você poderá solicitar e receber todo o seu dinheiro de volta.
      </p>
    </div>
  );
};

export default Arena;
