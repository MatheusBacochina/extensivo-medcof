import Image from "next/image";

const Card = ({
  last = false,
  title,
  descriptionTrue,
  descriptionFalse,
}: {
  last?: boolean;
  title: string;
  descriptionTrue: string;
  descriptionFalse: string;
}) => {
  return (
    <div
      className={`mx-auto  border-t ${
        !last ? "" : "border-b"
      } border-zinc-500 border-opacity-40 py-10`}
    >
      <h3 className="text-center px-4 text-zinc-700 max-w-sm leading-tight text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] mx-auto font-semibold font-mont">
        {title}
      </h3>
      <div className="mx-auto flex-col sm:flex-row mt-5 px-4 flex max-w-[1024px] gap-7 justify-between">
        <div>
          <h1 className="text-green-600 flex gap-2 text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]  font-bold font-mont">
            MedCof{" "}
            <Image alt="svg verde" src="/svgverde.svg" width={25} height={25} />
          </h1>
          <p className="text-zinc-900 text-base font-normal max-w-sm mt-1 font-mont leading-normal">
            {descriptionTrue}
          </p>
        </div>
        <div>
          <h1 className="text-red-500 justify-end flex gap-2 text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold font-mont">
            Outros Métodos
            <Image alt="svg x" src="/x.svg" width={25} height={25} />{" "}
          </h1>
          <p className="text-zinc-900 ml-auto text-right text-base font-normal max-w-sm mt-1 font-mont leading-normal">
            {descriptionFalse}
          </p>
        </div>
      </div>
    </div>
  );
};

const ChoiseMedcof = () => {
  return (
    <div className="pt-10 bg-white">
      <h3 className="text-center px-4 h1-text-color-bold text-zinc-900 max-w-md leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        Quem compara, <br />escolhe <span className="h1-text-color">MedCof</span>
      </h3>
      <div className="w-[100px] h-[2px] opacity-80 bg-red-600 mx-auto mt-5"></div>
      <p className="text-center px-4 mb-10 text-zinc-800 max-w-md mx-auto mt-5 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-mont leading-relaxed">
        9 motivos para você se tornar um medcofer.
      </p>
      <Card
        title={"Material de Estudo"}
        descriptionTrue={
          "Criamos o sistema de fichas-resumos que revolucionou a preparação dos nossos alunos. Com apenas 3 volumes (R1) você tem um conteúdo 100% atualizado, e acompanha as suas aulas fazendo anotações. E o mais legal: a partir do plano Elite, você recebe em casa o Kit Aprovação com a versão impressa!"
        }
        descriptionFalse={
          "Usam centenas de apostilas que geram ansiedade e matéria acumulada.​"
        }
      />
      <Card
        title={"Professores​"}
        descriptionTrue={
          "+115 especialistas que te colocam na mente do examinador e fazem você acertar muito além do básico.​"
        }
        descriptionFalse={
          "Professores sem formação específica. Não sabem como o especialista que prepara a sua prova pensa.​"
        }
      />
      <Card
        title={"Método​​"}
        descriptionTrue={
          "Direcionado para as suas instituições de preferência, com a profundidade necessária para obter níveis de acertos acima de 85%."
        }
        descriptionFalse={
          "Aulas longas, superficiais e genéricas. Insuficiente para a aprovação.​​​"
        }
      />
      <Card
        title={"Inteligência Artificial​​"}
        descriptionTrue={
          "A única com inteligência artificial generativa integrada ao nosso conteúdo. Tecnologia que otimiza seus estudos, planeja suas revisões e fortalece suas fraquezas.​"
        }
        descriptionFalse={
          "Aplicativos fora do ar, sem atualização e trilhas que não levam a lugar nenhum.​​​​"
        }
      />
      <Card
        title={"Flexibilidade​​"}
        descriptionTrue={
          "Aulas curtas e direto ao ponto Cronograma flexível por prioridade Qbank imbatível Fichas-resumo em PDF Fichas-resumo impressas* FlashCards com revisão espaçada Inteligência Artificial Mentorias*​.​"
        }
        descriptionFalse={
          "Só existem duas formas de estudo: apostilas gigantes ou videoaulas longas​​​​.​"
        }
      />
      <Card
        title={"Retenção​​"}
        descriptionTrue={
          "Com a nossa revisão intervalada nossos alunos obtiveram até 97% de acerto na prova da USP e as maiores notas no ENARE, PSU-MG, SURCE, SUS, entre outras.​​"
        }
        descriptionFalse={
          "Você esquece a maior parte do que estudou em 24 horas.​​"
        }
      />
       <Card
        title={"Conteúdo​​"}
        descriptionTrue={
          "Atualizado anualmente conforme os últimos guidelines e atualizações de cada sociedade.​​​"
        }
        descriptionFalse={
          "Desatualizado, engessado e na maioria das vezes incompleto.​​​"
        }
      />
       <Card
        title={"Questões​​​"}
        descriptionTrue={
          "Temos milhares de questões comentadas em alto nível, em vídeo e texto por cada subespecialista para você testar seus conhecimentos e tirar todas as dúvidas.​​"
        }
        descriptionFalse={
          "Comentários incompletos, feitos por médicos sem especialidades ou até mesmo estudantes!​​"
        }
      />
    </div>
  );
};

export default ChoiseMedcof;
