import Image from "next/image";
const EliteProgram = ({r}: {r: string}) => {
  return (
    <div className="flex flex-col bg-black background-header relative isolate items-center pt-10 pb-20 px-4">
      <h3 className="text-center h1-text-color-bold text-zinc-900 max-w-lg leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        Confira agora tudo o que você vai ter acesso no plano Elite {r}
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 bg-red-600 mx-auto mt-5"></div>
      <p className="text-center text-[#d7d7d7] max-w-xl mx-auto mt-5 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-mont leading-relaxed">
        Esse plano foi responsável por 27 primeiros colocados na USP em 2023,
        além de centenas primeiros lugares espalhados nas residências médicas
        mais concorridas do Brasil
      </p>
      <div className="mt-10 flex gap-5 justify-center flex-wrap w-full max-w-5xl">
        <div className="card w-full self-stretch basis-[328px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/card1.svg"}
            alt="card1"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Considera importante ter o acompanhamento de professores
            especialistas para aprender com quem já passou nas melhores
            residências médicas do Brasil.
          </p>
        </div>
        <div className="card w-full self-stretch basis-[328px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/card2.svg"}
            alt="card2"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Está no Ciclo Clínico ou no último ano do Internato e deseja ser
            aprovado na residência dos sonhos o quanto antes.
          </p>
        </div>
        <div className="card w-full self-stretch basis-[328px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/card3.svg"}
            alt="card3"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Já é Médico e busca garantir uma carreira de sucesso através da
            aprovação nas melhores Residências Médicas do Brasil.
          </p>
        </div>
        <div className="card w-full self-stretch basis-[328px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/cards4.svg"}
            alt="card4"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Quer buscar um método completo, validado e seguro para se
            diferenciar e garantir a aprovação em 2024.
          </p>
        </div>
        <div className="card w-full self-stretch basis-[328px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/cards5.svg"}
            alt="card5"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Precisa de um direcionamento nos estudos por meio das nossas
            mentorias mensais coletivas.
          </p>
        </div>
        <div className="card w-full self-stretch basis-[328px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={40}
            src={"/cards6.svg"}
            alt="card6"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Quer dormir com a consciência tranquila de que está com o material
            completo para fazer o seu programa de preparação.
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          const element = document.getElementById("prices");
          if (element) {
            const boundingBox = element;
            boundingBox.scrollIntoView();
          }
        }}
        className="cursor-pointer button rounded-lg mt-10 shadow px-6 py-3 hover:scale-105 transition-all"
      >
        <span className="text-white text-[18px] font-normal font-inter leading-normal">
          Quero começar a estudar hoje!
        </span>
      </button>
    </div>
  );
};

export default EliteProgram;
