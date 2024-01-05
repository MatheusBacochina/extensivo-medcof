import { Accordion, AccordionItem } from "@nextui-org/react";
const opitions = [
  {
    label: "O que é o programa ELITE MedCof?",
    content: (
      <>
       <p>O Elite MedCof é o programa do Grupo MedCof voltado para aprovação em R1
        para o ano de 2024 que engloba todos os cursos que você precisa para
        passar na residência médica dos seus sonhos.</p> 
    
       <p className="mt-4"> Nele contaremos com um programa de aulas extensivo anual, entrega de
        simulados, além de nosso tradicional QBank, programa HIIT, e o curso
        Multimídia Dominada.</p>

        <p className="mt-4">É um programa completo para que você atinja seu desempenho máximo
        neste ano de preparação. Tudo em um só lugar, com todos os recursos que
        você precisa para uma preparação segura ao longo de 2024.</p>
      </>
    ),
  },
  {
    label: "Os temas abordam quais exames?",
    content: (
      <>
        Revisamos as provas do SUS-SP, USP-SP, UNICAMP, SUS-BA, SURCE, AMRIGS,
        IAMSPE, SMS-SP, HSL, UFRJ, UERJ, ISCMSP, FAMERP, SES-DF, USP-RP,
        UNIFESP, AMRGS, PSU-MG, SURCE, SES-PE, AMP, HCPA, SES-RJ, UNB, HIAE,
        ENARE, e diversas outras!
      </>
    ),
  },
  {
    label: "O que acompanha o MedCof ELITE R1?",
    content: (
      <>
        – Extensivo anual – Intensivo HIIT – Multimídia Dominada – Mentorias
        Coletivas – QBank – Sistema de Flashcards – Acesso antecipado às lives
        de véspera – Programa de simulados exclusivos – Acesso a Arena Elite, em
        São Paulo – Fichas-Resumo impressas
      </>
    ),
  },
  {
    label: "O que é o Seguro Aprovação, do plano Premium Elite?",
    content:
     <> Nós confiamos e validamos 100% do nosso método. Então se você não passar nas provas de 2024 você terá acesso no ano seguinte ao Plano Elite de 2025 sem pagar nada. Isso mesmo. Nós entendemos que você só não será aprovado se acontecer alguma particularidade, e por isso iremos te dar o acesso no ano seguinte para conquistar a sua tão sonhada aprovação.</>
  },
  {
    label:
      "SISTEMA DE FLASHCARDS EXCLUSIVO COM REVISÃO INTERVALADA INTELIGENTE",
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
const Answers = ({elements} : any) => {
  return (
    <div className="flex flex-col relative isolate items-center pt-10 pb-20 px-4">
      <h3 className="text-center TextTitleBlack max-w-2xl leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        Aqui estão respostas para as dúvidas mais frequentes que recebemos sobre
        o Elite:
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 bg-red-600 mx-auto mt-5"></div>
      <div className="mt-8 flex gap-5 justify-center flex-wrap w-full max-w-4xl">
        <Accordion
          variant="light"
          motionProps={{
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
          }}
        >
          {elements.map((value: any, index: number) => (
            <AccordionItem
              classNames={{
                title: "font-medium text-zinc-800 font-mont",
                base: "shadow-none",
                content: "text-zinc-700",
              }}
              key={index}
              aria-label={value.label}
              title={value.label}
            >
              {value.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  );
};

export default Answers;
