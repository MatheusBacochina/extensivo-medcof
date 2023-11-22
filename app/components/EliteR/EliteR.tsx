import { Accordion, AccordionItem } from "@nextui-org/react";

const EliteR = ({elements}: any) => {
  return (
    <div className="flex flex-col relative isolate items-center pt-10 pb-20 px-4">
      <h3 className="text-center h1-text-color-bold text-zinc-900 max-w-md leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        Confira agora tudo o que você vai ter acesso no plano Elite R1:
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 bg-red-600 mx-auto mt-5"></div>
      <p className="text-center text-zinc-800 max-w-xl mx-auto mt-5 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-mont leading-relaxed">
        Esse plano foi responsável por 27 primeiros colocados na USP em 2023,
        além de centenas primeiros lugares espalhados nas residências médicas
        mais concorridas do Brasil
      </p>
      <div className="mt-10 flex gap-5 justify-center flex-wrap w-full max-w-4xl">
        <Accordion  motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }} >
          {elements.map((value: { label: string; content: JSX.Element }, index: number) => (
            <AccordionItem
            classNames={{title:"font-medium text-zinc-800 font-mont", base:"shadow-none", content:"text-zinc-600"}}
              key={index}
              aria-label={value.label}
              title={value.label}
            >
              {value.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <button className="cursor-pointer button rounded-lg mt-14 shadow px-6 py-3 hover:scale-105 transition-all">
        <span className="text-white text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] font-normal font-inter leading-normal">
          Quero começar a estudar hoje!
        </span>
      </button>
    </div>
  );
};

export default EliteR;