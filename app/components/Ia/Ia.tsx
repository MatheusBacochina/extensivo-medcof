import Image from "next/image";
import Bg from "../Bg";
const Ia = () => {
  return (
    <div className="bg-black flex flex-col relative isolate background-header-ia items-center pt-10 pb-20 px-4">
      <Bg
        logo={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M28 12.4445V9.33333H24.8889V6.2222C24.8864 5.39784 24.5579 4.60797 23.9749 4.02509C23.392 3.44213 22.6022 3.11358 21.7778 3.11111H18.6667V0H15.5555V3.11111H12.4445V0H9.33333V3.11111H6.2222C5.39784 3.11358 4.60797 3.44213 4.02509 4.02509C3.44213 4.60797 3.11358 5.39784 3.11111 6.2222V9.33333H0V12.4445H3.11111V15.5555H0V18.6667H3.11111V21.7778C3.11358 22.6022 3.44213 23.392 4.02509 23.9749C4.60797 24.5579 5.39784 24.8864 6.2222 24.8889H9.33333V28H12.4445V24.8889H15.5555V28H18.6667V24.8889H21.7778C22.6022 24.8864 23.392 24.5579 23.9749 23.9749C24.5579 23.392 24.8864 22.6022 24.8889 21.7778V18.6667H28V15.5555H24.8889V12.4445H28ZM21.7778 21.7778H6.2222V6.2222H21.7778V21.7778Z"
              fill="white"
            />
            <path
              d="M13.004 7.77734H10.9119L7.78516 20.2218H9.38271L10.1045 17.3051H13.7072L14.4103 20.2218H16.0623L13.004 7.77734ZM10.3145 16.0591L11.8981 9.25511H11.9697L13.4987 16.0591H10.3145ZM17.4887 7.77734H19.0443V20.2218H17.4887V7.77734Z"
              fill="white"
            />
          </svg>
        }
      />
      <h3 className="text-center h1-text-color-bold text-zinc-900 max-w-md leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        A Única Plataforma Com Inteligência Artificial Generativa.
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 bg-red-600 mx-auto mt-5"></div>
      <p className="text-center text-[#d7d7d7] max-w-md mx-auto mt-5 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-mont leading-relaxed">
        Feita sob medida para concursos de
        <span className="font-semibold"> residência médica</span> e atualizada
        diariamente.
      </p>

      <div className="w-full max-w-[1024px] mt-10 grid justify-center lg:grid-cols-[300px_1fr_300px] gap-y-8 grid-cols-[1fr] justify-items-center  grid-rows-[auto_auto_360px_auto_auto] lg:grid-rows-[360px_360px] gap-4 md:grid-cols-[300px_300px] md:grid-rows-[360px_360px_360px]">
        <div className="card w-full max-w-[300px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"icon-piscando.svg"}
            alt="icon piscando"
            className="opacity-70"
          />
          <h1 className="mt-5 text-[20px] sm:text-[21px] md:text-[22px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px] text-center leading-tight font-semibold text-neutral-50">
            Tire suas dúvidas instantaneamente
          </h1>
          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Com nossa IA basta perguntar qualquer dúvida e nosso CofBot irá
            oferecer a resposta através do momento exato em que o especialista
            explica o conceito. Isso é possível graças ao sistema de vetorização
            de aulas personalizado para residência médica.
          </p>
        </div>
        <div className="card w-full relative row-start-3 md:row-start-2 md:col-span-2 lg:col-span-1  lg:row-span-2">
          <Image
            src={"/cofbot.png"}
            fill
            alt=""
            sizes="100vw"
            style={{ objectFit: "contain" }}
            className="astronauta"
          />
        </div>
        <div className="card w-full max-w-[300px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"aviao.svg"}
            alt="icon aviao"
            className="opacity-70"
            style={{ objectFit: "cover" }}
          />
          <h1 className="mt-5 text-[20px] sm:text-[21px] md:text-[22px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px] text-center leading-tight font-semibold text-neutral-50">
            Revisão espaçada automática
          </h1>
          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Está com dúvida de quando revisar? Os temas aparecerão
            automaticamente no seu calendário com base na sua eficiência em cada
            bloco de questões.{" "}
          </p>
        </div>
        <div className="card w-full max-w-[300px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"brain.svg"}
            alt="icon brain"
            className="opacity-70"
          />
          <h1 className="mt-5 text-[20px] sm:text-[21px] md:text-[22px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px] text-center leading-tight font-semibold text-neutral-50">
            Busque questões de modo inteligente
          </h1>
          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Além de pesquisar por temas pré definidos, nossa plataforma permite
            a busca de questões por meio de IA. Basta escrever sua dúvida e
            buscaremos para você um bloco de questões personalizadas.
          </p>
        </div>
        <div className="card w-full max-w-[300px] rounded-[10px] p-5 shadow border-2 border-white bg-[#FFFFFF1A] flex flex-col items-center  border-opacity-10">
          <Image
            width={50}
            height={50}
            src={"graph.svg"}
            alt="icon graph"
            className="opacity-70"
          />
          <h1 className="mt-5 text-[20px] sm:text-[21px] md:text-[22px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px] text-center leading-tight font-semibold text-neutral-50">
            Painel de estatísticas avançadas
          </h1>
          <p className="mt-4 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  text-neutral-200">
            Oferecemos o mais avançado painel de estatísticas, onde você verá o
            seu progresso de acertos em cada tema, poderá comparar suas notas e
            estudar os temas que você tem mais dificuldade à distância de um
            clique.
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
export default Ia;
