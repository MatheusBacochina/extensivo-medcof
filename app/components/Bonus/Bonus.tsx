import Image from "next/image";
const Bonus = () => {
  return (
    <div className="flex flex-col bg-bonus relative isolate items-center pt-10 pb-20 px-4">
      <h3 className="text-center h1-text-color-bold text-zinc-900 max-w-2xl leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        Garantindo a sua participação agora você vai receber os seguintes bônus
        gratuitos:
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 bg-red-600 mx-auto mt-5"></div>

      <div className="mt-10 flex gap-5 justify-center flex-wrap w-full max-w-6xl">
        <div className="card w-full self-stretch basis-[200px] sm:basis-[216px] md:basis-[225px] lg:basis-[233px] xl:basis-[241px] 2xl:basis-[250px]  rounded-[10px] p-5  flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/bonus1.svg"}
            alt="bonus1"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  font-sora font-semibold text-neutral-200">
            Raio-X de +30 bancas (revisões focadas por instituições)
          </p>
        </div>
        <div className="card w-full self-stretch basis-[200px] sm:basis-[216px] md:basis-[225px] lg:basis-[233px] xl:basis-[241px] 2xl:basis-[250px]  rounded-[10px] p-5  flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/bonus2.svg"}
            alt="bonus2"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  font-sora font-semibold text-neutral-200">
            Curso de Radiologia (com imagens)
          </p>
        </div>
        <div className="card w-full self-stretch basis-[200px] sm:basis-[216px] md:basis-[225px] lg:basis-[233px] xl:basis-[241px] 2xl:basis-[250px]  rounded-[10px] p-5  flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/bonus3.svg"}
            alt="bonus3"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  font-sora font-semibold text-neutral-200">
            Curso de ECG
          </p>
        </div>
        <div className="card w-full self-stretch basis-[200px] sm:basis-[216px] md:basis-[225px] lg:basis-[233px] xl:basis-[241px] 2xl:basis-[250px]  rounded-[10px] p-5  flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/bonus4.svg"}
            alt="bonus4"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  font-sora font-semibold text-neutral-200">
            Curso de Antibioticoterapia
          </p>
        </div>
        <div className="card w-full self-stretch basis-[200px] sm:basis-[216px] md:basis-[225px] lg:basis-[233px] xl:basis-[241px] 2xl:basis-[250px]  rounded-[10px] p-5  flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"/bonus5.svg"}
            alt="bonus5"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  font-sora font-semibold text-neutral-200">
            Curso de Ventilação Mecânica
          </p>
        </div>
        <div className="card w-full self-stretch basis-[200px] sm:basis-[216px] md:basis-[225px] lg:basis-[233px] xl:basis-[241px] 2xl:basis-[250px]  rounded-[10px] p-5  flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={40}
            src={"/bonus6.svg"}
            alt="bonus6"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  font-sora font-semibold text-neutral-200">
            Curso de Dermatologia (com imagens)
          </p>
        </div>
        <div className="card w-full self-stretch basis-[200px] sm:basis-[216px] md:basis-[225px] lg:basis-[233px] xl:basis-[241px] 2xl:basis-[250px]  rounded-[10px] p-5  flex flex-col items-center  border-opacity-10">
          <Image
            width={30}
            height={20}
            src={"/bonus7.svg"}
            alt="bonus7"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  font-sora font-semibold text-neutral-200">
            Curso de Tomboelastograma
          </p>
        </div>
        <div className="card w-full self-stretch basis-[200px] sm:basis-[216px] md:basis-[225px] lg:basis-[233px] xl:basis-[241px] 2xl:basis-[250px]  rounded-[10px] p-5  flex flex-col items-center  border-opacity-10">
          <Image
            width={40}
            height={20}
            src={"/bonus8.svg"}
            alt="bonus8"
            className="opacity-70"
          />

          <p className="mt-4 text-center text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]  font-sora font-semibold text-neutral-200">
            Fichas resumo em PDF de todas as aulas
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          const element = document.getElementById("prices");
          if (element) {
            const boundingBox = element
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

export default Bonus;
