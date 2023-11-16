import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";
import { team } from "@/app/constants/doctors";
import { useEffect, useRef, useState } from "react";

type HandleScrollType = (containerRef: ContainerRefType) => void;
type ContainerRefType = React.RefObject<HTMLDivElement>;

function Doctor({
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
      <div className="w-[150px] sm:w-[166px] md:w-[175px] lg:w-[183px] xl:w-[191px] 2xl:w-[200px] h-[150px] sm:h-[166px] md:h-[175px] lg:h-[183px] xl:h-[191px] 2xl:h-[200px]  relative">
        <Image sizes="" src={src} fill alt={alt} />
      </div>

      <h4 className="text-center text-[14px] sm:text-[14px] text-zinc-700 md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-mont leading-relaxed font-semibold">
        {name}
      </h4>
      <p className="text-center text-[12px] sm:text-[14px] text-zinc-600">
        {desc}
      </p>
    </div>
  );
}

const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll: any = () => {
    const container = containerRef.current;

    if (container) {
      // Adiciona 0.2 ao scroll horizontal
      container.scrollLeft += 0.2;

      // Se chegou ao final, volta ao início
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }

      setScrollPosition(container.scrollLeft);
    }

    requestAnimationFrame(() => handleScroll());
  };

  useEffect(() => {
    handleScroll();

    return () => {
      cancelAnimationFrame(handleScroll);
    };
  }, []);

  return (
    <div className="bg-white pt-10 pb-10 px-4">
      <h3 className="text-center h1-text-color-bold text-zinc-900 max-w-lg leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        Entre na mente Do examinador que elabora a sua prova
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 linear-text mx-auto mt-5"></div>
      <p className="text-center text-zinc-600 max-w-lg mx-auto mt-5 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-mont leading-relaxed">
        São <span className="font-semibold"> + de 115 especialistas</span>{" "}
        comprometidos com sua aprovação! 100% das aulas e questões comentadas
        são produzidas por especialistas específicos de cada área.
      </p>
      <ScrollShadow
      hideScrollBar
        ref={containerRef}
        orientation="horizontal"
        size={30}
        className="mx-auto mt-10 overflow-x-scroll gap-3 pointer-events-none max-w-4xl flex"
      >
        {team.map((doctor) => (
          <Doctor
            key={doctor.name}
            src={doctor.src}
            alt={doctor.alt}
            name={doctor.name}
            desc={doctor.desc}
          />
        ))}
      </ScrollShadow>
    </div>
  );
};

export default Team;
