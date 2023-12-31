import { globalElite, answersElite } from "./global";

function CheckIcon() {
  return (
    <svg
      className="flex-shrink-0 flex-grow-0"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 23 17"
      fill="none"
    >
      <path
        d="M7.79248 16.6127L0.642481 9.46275C0.212923 9.03319 0.212923 8.33671 0.642481 7.90711L2.19808 6.35147C2.62764 5.92186 3.32416 5.92186 3.75372 6.35147L8.5703 11.168L18.8869 0.851466C19.3164 0.421907 20.013 0.421907 20.4425 0.851466L21.9981 2.40711C22.4277 2.83667 22.4277 3.53315 21.9981 3.96275L9.34812 16.6128C8.91852 17.0423 8.22204 17.0423 7.79248 16.6127Z"
        fill="#34D399"
      />
    </svg>
  );
}
const extensivor1tdc = {
  ["extensivo-r1-tdc"]: {
    name: "Extensivo 2024 - R1 Acesso Direto - Grupo MedCof",
    accordionElite: [...globalElite],
    accordionAnswersElite: [
      ...answersElite,
      {
        label:
          "Não tenho condições de arcar com os preços dos cursos. existe algum programa de financiamento?",
        content: (
          <>
            <p className="">
              Sim. Acesse a página e saiba mais: {" "}
              <a className="text-sky-600" href="https://www.grupomedcof.com.br/hipossuficiencia/">https://www.grupomedcof.com.br/hipossuficiencia/</a>
            </p>
          </>
        ),
      },
    ],
    cards: [
      {
        avista: "R$5.397,00",
        price: "R$539,88",
        de: "R$12.327,00",
        order: "leftCard",
        name: (
          <>
            EXTENSIVO
            <br />
            R1 ACESSO DIRETO
          </>
        ),
        url: "https://vendas.grupomedcof.com.br/pay/2024-ext-r1-acesso-direto",
        steps: [
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Extensivo Anual 2024
              <s className="ml-2 text-[13px]">R$5.797,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Acesso Anual ao qBank com Milhares questões
              <s className="ml-2 text-[13px]">R$2.297,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Programa de Simulados Exclusivos Mensais
              <s className="ml-2 text-[13px]">R$547,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Sistema de Flashcards exclusivo com Revisão Intervalada
              inteligente
              <s className="ml-2 text-[13px]">R$527,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Cof Express
              <s className="ml-2 text-[13px]">R$1.789,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              MEDCOF PLUS
              <s className="ml-2 text-[13px]">R$970,00</s>
            </p>
          </p>,
            <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
            Fichas resumos - PDF 

              <s className="ml-2 text-[13px]">R$400,00</s>
            </p>
          </p>,
        ],
      },
      {
        avista: "R$8.897,00",
        price: "R$889,11",
        de: "R$24.962,00",

        order: "centerCard",
        name: (
          <>
            EXTENSIVO ELITE
            <br />
            R1 ACESSO DIRETO
          </>
        ),
        url: "https://vendas.grupomedcof.com.br/pay/extensivo-r1-acesso-direto-elite",
        steps: [
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Acesso antecipado a partir de hoje ao plano extensivo de 2023
              <s className="ml-2 text-[13px]">R$3.497,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Extensivo Anual 2024
              <s className="ml-2 text-[13px]">R$5.797,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Intensivo HIIT
              <s className="ml-2 text-[13px]">R$4.497,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Mentorias Coletivas e direcionamento de estudo
              <s className="ml-2 text-[13px]">R$3.997,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Acesso Anual ao qBank com Milhares questões
              <s className="ml-2 text-[13px]">R$2.297,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Sistema de Flashcards exclusivo com Revisão Intervalada
              inteligente
              <s className="ml-2 text-[13px]">R$527,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Acesso antecipado ao Raio-X da banca de + 30 Insitituições (lives
              de revisão direcionadas)
              <s className="ml-2 text-[13px]">R$1.797,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Programa de Simulados Exclusivos
              <s className="ml-2 text-[13px]">R$547,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Fichas-resumo impressas na sua casa
              <s className="ml-2 text-[13px]">R$747,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            Bônus: Acesso a Arena Elite em SP
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Multimídia Dominada
              <s className="ml-2 text-[13px]">R$1.997,00</s>
            </p>
          </p>,
        ],
      },
      {
        avista: "R$18.897,00",
        price: "R$1.888,44",
        de: "R$27.582,00",
        order: "rightCard",

        name: (
          <>
            EXTENSIVO PREMIUM
            <br />
            R1 ACESSO DIRETO
          </>
        ),
        url: "https://vendas.grupomedcof.com.br/pay/extensivo-r1-acesso-direto-premium",
        steps: [
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Acesso antecipado a partir de hoje ao plano extensivo de 2023
              <s className="ml-2 text-[13px]">R$3.497,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Plano Elite 2024
              <s className="ml-2 text-[13px]">R$8.897,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Seguro Aprovação
              <s className="ml-2 text-[13px]">R$7.997,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Imersão Hands On (Curso prático presencial de 2 dias em SP)
              <s className="ml-2 text-[13px]">R$5.397,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              OSCE Dominado
              <s className="ml-2 text-[13px]">R$1.997,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              1 sessão mentoria Individual com Coordenador MedCof
              <s className="ml-2 text-[13px]">R$2.000,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p className="inline">
              Simulado Tendências Presencial em SP
              <s className="ml-2 text-[13px]">R$297,00</s>
            </p>
          </p>,
          <p
            key={1}
            className="text-white flex items-center gap-2 text-left mt-4 font-normal grow-0 text-sm font-sora"
          >
            <CheckIcon />
            <p>
              CofCards físicos
              <s className="ml-2 text-[13px]">R$997,00</s>
            </p>
          </p>,
        ],
      },
    ],
  },
};


export default extensivor1tdc;
