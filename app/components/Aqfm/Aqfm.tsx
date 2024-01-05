"use client";
import { useState } from "react";
import localFont from "next/font/local";
const mona600 = localFont({ src: "../../../fonts/MonaSans-SemiBold.ttf" });
import AqfmCard from "./components/AqfmCard";

const Aqfm = () => {
  const [isCardOpen, setIsCardOpen] = useState<number | null>(null);
  function handleRemoveOpenCard() {
    setIsCardOpen(null);
  }
  function handleSetOpenCard(id: number | null) {
    setIsCardOpen(id);
  }

  console.log(isCardOpen);
  return (
    <div className="bg-[#14110F] pt-16 lg:pb-0 sm:px-4 md:px-6">
      <div className="px-4 md:px-6">
        <h3
          style={mona600.style}
          className="text-center max-w-2xl mx-auto leading-tight text-[24px] sm:text-[25px] md:text-[26px] lg:text-[27px] xl:text-[28px] aqfmTextTitle"
        >
          Domine o método AQFM: seja aprovado na Residência Médica do seus
          sonhos
        </h3>
      </div>
      <div className={`container mx-auto flex mt-20 flex-col lg:flex-row`}>
        <AqfmCard
          activated={isCardOpen === 1}
          removeOpenCard={handleRemoveOpenCard}
          setCardOpen={() => handleSetOpenCard(1)}
          letter="A"
          paragraph="👨‍🏫 As aulas do Método AQFM são o alicerce para sua preparação. Produzidas por especialistas alinhados com o que há de mais atual nos conteúdos para residências médicas, elas são dinâmicas, esclarecedoras e focadas no que realmente importa para sua aprovação. 
          "
          icon="/align-left.svg"
          title="Aulas"
        />
        <AqfmCard
          activated={isCardOpen === 2}
          removeOpenCard={handleRemoveOpenCard}
          setCardOpen={() => handleSetOpenCard(2)}
          letter="Q"
          title="Questões"
          paragraph="📝 As questões do AQFM são o combustível do aprendizado. Elas vão muito além de meros exercícios. São cuidadosamente selecionadas para desafiar seus conhecimentos, identificar lacunas e proporcionar a consolidação do aprendizado. Com uma vasta base de dados e questões direcionadas para cada especialidade.
            "
          icon="/book-icon.svg"
        />
        <AqfmCard
          activated={isCardOpen === 3}
          removeOpenCard={handleRemoveOpenCard}
          setCardOpen={() => handleSetOpenCard(3)}
          letter="F"
          title="Flashcards"
          paragraph="📌 Memorização Rápida e Eficiente!
         Os Flashcards do AQFM são a chave para a memorização fácil e duradoura. O método comprovado de repetição espaçada em formato digital facilita a memorização de informações cruciais. Com eles, você condensa conhecimentos, revisa e reforça conceitos essenciais de forma rápida e prática, ideal para a assimilação de informações em períodos curtos de estudo.
         "
          icon="/card-icon.svg"
        />
        <AqfmCard
          activated={isCardOpen === 4}
          removeOpenCard={handleRemoveOpenCard}
          setCardOpen={() => handleSetOpenCard(4)}
          title="Material Didático"
          letter="M"
          paragraph="📘 Tudo que Você Precisa, na Palma da Mão!
         O Material Didático do AQFM é uma verdadeira biblioteca de referência para sua aprovação. Composto por livros digitais, resumos e guias especializados, oferece uma base completa para seus estudos. É uma fonte confiável e abrangente, organizada de forma didática e prática para que você tenha tudo o que precisa ao alcance das mãos."
          icon="/folders.svg"
        />
      </div>
      <div className=" justify-center gap-3 mt-12 pb-11 hidden lg:flex ">
        <div
          onClick={() =>
            isCardOpen === 1 ? handleSetOpenCard(null) : handleSetOpenCard(1)
          }
          className={`w-4 h-4 rounded-full cursor-pointer ${
            isCardOpen === 1 ? "bg-[#F60000]" : "bg-[#2D2D2D]"
          }`}
        ></div>
        <div
          onClick={() =>
            isCardOpen === 2 ? handleSetOpenCard(null) : handleSetOpenCard(2)
          }
          className={`w-4 h-4 rounded-full cursor-pointer ${
            isCardOpen === 2 ? "bg-[#F60000]" : "bg-[#2D2D2D]"
          }`}
        ></div>
        <div
          onClick={() =>
            isCardOpen === 3 ? handleSetOpenCard(null) : handleSetOpenCard(3)
          }
          className={`w-4 h-4 rounded-full cursor-pointer ${
            isCardOpen === 3 ? "bg-[#F60000]" : "bg-[#2D2D2D]"
          }`}
        ></div>
        <div
          onClick={() =>
            isCardOpen === 4 ? handleSetOpenCard(null) : handleSetOpenCard(4)
          }
          className={`w-4 h-4 rounded-full cursor-pointer ${
            isCardOpen === 4 ? "bg-[#F60000]" : "bg-[#2D2D2D]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Aqfm;
