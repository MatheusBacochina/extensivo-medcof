import { Accordion, AccordionItem } from "@nextui-org/react";
const opitions = [
  {
    label: "EXTENSIVO ANUAL",
    content:
      "O extensivo MedCof é um programa específico e de conteúdo voltado para aprovação nos programas de Residência Médicas mais concorridos do país em 2024. Nele contaremos com um programa de aulas extensivo anual, entrega de simulados, tarefas-mínimas por módulo, além de nosso tradicional QBank para que você atinja seu desempenho máximo neste ano de preparação.",
  },
  {
    label: "INTENSIVO HIIT",
    content:
      "Garanta seu acesso à nossa revisão de 12 semanas – HIIT, 100% baseada em questões e com um método que permite retenção máxima do aprendizado. Para quem procura um método que se preocupa com todas as dificuldades da reta final.",
  },
  {
    label: "MENTORIAS COLETIVAS E DIRECIONAMENTO DE ESTUDO",
    content:
      "Tenha todo o suporte mensal e encorajamento direcionado pelas nossas Mentorias. Gerenciamos seu aprendizado para você maximizar seu potencial, desenvolver suas habilidades e aprimorar sua performance. Atinja o melhor nível que estiver ao seu alcance, torne-se um concorrente de ELITE.",
  },
  {
    label: "ACESSO ANUAL AO QBANK COM MILHARES QUESTÕES",
    content:
      "Tenha acesso ao nosso lendário QBank com questões transformadoras de provas antigas e autorais. Você tem a chance de treinar até a prova com nosso Banco de Questões  inteligente que contém milhares de questões com comentários em texto e vídeo. São milhares de questões autorais, criadas por quem vive a rotina e as condutas das maiores instituições do país. Tenha contato com os temas mais quentes retirados diretamente do campo de Batalha. Essas questões, que podem cair idênticas a qualquer momento na sua prova, são comentadas através do nosso método exclusivo.",
  },
  {
    label: "SISTEMA DE FLASHCARDS EXCLUSIVO COM REVISÃO INTERVALADA INTELIGENTE",
    content:
      "Os Flashcards se tornaram nos últimos anos uma poderosa ferramenta de memorização utilizada mundialmente na medicina. Por isso, preparamos uma seleção exclusiva de flashcards mais frequentes nas provas, onde você revisa os principais temas com o mais sofisticado sistema de revisões espaçadas no mercado. Baseados no método de estudo ativo – aquele que exige maior autonomia do aluno – trata-se de um método mais efetivo, você retém o dobro de conteúdo. Vital para você que não quer esquecer do conteúdo na hora da prova.",
  },
  {
    label: "ACESSO ANTECIPADO AO RAIO-X DA BANCA",
    content:
      "O Raio-X da banca é a forma mais efetiva de estudar as suas principais instituições no 2º semestre. Com a base do HIIT e o refinamento nas aulas do Raio-x qualquer prova será um passeio! Cada raio-x é direcionado para uma instituição específica: ENARE, USP-SP; EINSTEIN; UNIFESP; ABC; USP-RP, FAMEMA; AMRIGS;; HCGO; HCPA; HCUFPR; IAMSPE; PSU-MG; PSU-GO, SCMSP; SES-DF; SES-PE, SES-GO, SURCE; SUS-BA; SUS-SP; UERJ; UFRJ; UNESP; UNICAMP; UNIFESP;, AMP, UFCSPA, PUCRS, SCMBH, UEPA, UEL e PSU-AL.",
  },
  {
    label: "PROGRAMA DE SIMULADOS EXCLUSIVOS",
    content:
      "Participe dos simulados mensais criados por nossos professores com os temas mais debatidos internamente nas grandes instituições do Brasil. Acesse o RANKING geral e o específico da especialidade que você quer prestar. Não se preocupe, caso você prefira aparecerá apenas o seu nickname. Essa é uma ótima oportunidade de avaliação real do seu nível mês a mês.",
  },
  {
    label: "MULTIMÍDIA DOMINADA",
    content:
      "O treinamento imersivo que transformará você em uma máquina de acertar questões nas residências mais concorridas do país. Domine todas as imagens que estarão na primeira fase de suas provas. Esteja preparado para todas as estações multimídia e QUIZ de imagens.",
  },
  {
    label: "FICHAS-RESUMO IMPRESSAS NA SUA CASA",
    content:
      "Nós iremos te enviar o Kit Aprovação. Tenha em mãos os resumos de todas as aulas do extensivo 2024 impresso, para que você possa fazer anotações preciosas enquanto estuda.",
  },
  {
    label: "ACESSO A COMUNIDADE DE DÚVIDAS",
    content:
      "Tenha acesso a maior comunidade de alunos e plantonistas para tirar suas dúvidas e intensificar ainda mais os seus estudos.",
  },
  {
    label: "USO EXCLUSIVO DA ARENA ELITE EM SP",
    content:
      "Já imaginou poder usar uma sala de estudos exclusiva, onde você pode reunir seus amigos do extensivo elite para estudar e ter contato com os coordenadores MedCof? A Arena Elite é nosso espaço de estudos para o aluno elite, com 8 salas de estudos, além de mesas redondas para grupos de estudos pertinho do HC.",
  },
];
const EliteR = () => {
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
          {opitions.map((value, index) => (
            <AccordionItem
            classNames={{title:"font-medium text-zinc-800 font-mont", base:"shadow-none", content:"text-zinc-700"}}
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
        <span className="text-white text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px]  font-normal font-inter leading-normal">
          Quero começar a estudar hoje!
        </span>
      </button>
    </div>
  );
};

export default EliteR;
