import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";
import { alunos } from "@/app/constants/doctors";
import { useEffect, useRef, useState } from "react";

function Student({
  src,
  alt,
  name,
  desc,
}: {
  src: string;
  alt: string;
  name: string;
  desc: string;
}) {
  return (
    <div className="basis-[150px] sm:basis-[166px] md:basis-[175px] lg:basis-[183px] xl:basis-[191px] 2xl:basis-[200px]  flex-shrink-0">
      <div className="w-[150px] sm:w-[166px] border rounded-sm border-[#ffffff60] md:w-[175px] lg:w-[183px] xl:w-[191px] 2xl:w-[200px] h-[150px] sm:h-[166px] md:h-[175px] lg:h-[183px] xl:h-[191px] 2xl:h-[200px]  relative">
        <Image sizes="" src={src} fill alt={alt} />
      </div>
      <h1 className="text-center text-[14px] sm:text-[14px] mt-3 text-[#ffffff] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-mont leading-none font-bold">
        1° Lugar🏅
      </h1>
      <h4 className="text-center text-[14px] sm:text-[14px] mt-3 text-[#d7d7d7] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-mont leading-none font-semibold">
        {name}
      </h4>
      <p className="text-center text-[12px] sm:text-[14px] mt-1 leading-none text-[#d7d7d7e2]">
        {desc}
      </p>
    </div>
  );
}

const Students = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [totalScrollWidth, setTotalScrollWidth] = useState<number>(0);

  // Tipando a função handleScroll
  const handleScroll: any = () => {
    const container = containerRef.current;

    if (container) {
      // Diminui 0.2 do scroll horizontal
      container.scrollLeft -= 0.1;

      // Se chegou ao início, volta ao final
      if (container.scrollLeft <= 0) {
        container.scrollLeft = totalScrollWidth;
      }

      setScrollPosition(container.scrollLeft);
    }

    requestAnimationFrame(handleScroll);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      // Calcula o totalScrollWidth com base no conteúdo real
      setTotalScrollWidth(container.scrollWidth);
    }

    // Inicia com o scroll total disponível
    if (containerRef.current) {
      containerRef.current.scrollLeft = totalScrollWidth;
    }

    handleScroll();

    return () => {
      // Limpar o requestAnimationFrame ao desmontar o componente
      cancelAnimationFrame(handleScroll);
    };
  }, [totalScrollWidth]);

  return (
    <div className="bg-black flex flex-col items-center pt-8 pb-20 px-4">
      <h3 className="text-center h1-text-color-bold text-zinc-900 max-w-sm leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        Os Primeiros Lugares Fazem MedCof
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 linear-text mx-auto mt-5"></div>
      <p className="text-center text-[#d7d7d7] max-w-lg mx-auto mt-5 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-mont leading-relaxed">
        O único curso{" "}
        <span className="font-semibold"> verificado com 100% de aprovação</span>{" "}
        em 16 residências médicas e 50% dos aprovados em 48 residências.
      </p>
      <ScrollShadow
        hideScrollBar
        ref={containerRef}
        orientation="horizontal"
        size={20}
        className="mx-auto mt-10 overflow-x-scroll w-full gap-3 pointer-events-none max-w-4xl flex"
      >
        {alunos.map((student) => (
          <Student
            key={student.name}
            src={student.src}
            alt={student.alt}
            name={student.name}
            desc={student.desc}
          />
        ))}
      </ScrollShadow>
      <p className="text-center font-sora text-[#d7d7d74e] mt-6">São <span className="font-semibold text-[#d7d7d767]">+10 mil aprovações</span> e centenas de primeiros lugares comprovados – Do Norte ao Sul do Brasil.</p>
      <button className="bg-gradient-to-b cursor-pointer from-fuchsia-400 to-violet-500 hover:bg-gradient-to-l rounded-lg mt-10 shadow px-6 py-3 hover:scale-105 transition-all">
        <span className="text-white text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px]  font-normal font-inter leading-normal">
          Quero começar a estudar hoje!
        </span>
      </button>
    </div>
  );
};

export default Students;
