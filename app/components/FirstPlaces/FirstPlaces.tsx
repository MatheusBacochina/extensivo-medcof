import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    name: "🏅Alexandra Gomes Dos Santos",
    place: "1° lugar Neurocirurgia USP",
    description:
      " Com o Medcof, mudei minha forma de estudar, investindo mais tempo nas questões. O qbank é realmente seu grande diferencial. As questões tinham excelentes comentários, que equivaliam a uma aula. São milhares delas. Minha meta era de 100 questões por dia, e mesmo assim, não concluí nem a metade. Na hora de fazer a prova, deu para reconhecer diversos assuntos comentados nas alternativas. Dessa forma, tive segurança e conhecimento suficientes para sair do 29° para a 1° lugar em Neurocirurgia da USP. Muito obrigada ao Medcof!",
    url: "/alexandra.webp",
  },
  {
    name: "🏅Mariana Correia Moreira Cruz",
    place: "1° lugar Ginecologia e Obstetrícia da USP",
    description:
      "Sem dúvidas, o grande diferencial do MedCof é o fato deles prezarem por um aprendizado de excelência quando te fornecem aulas e comentários de questões feitos apenas por especialistas. Aulas completas e o QBank, um banco de questões extremamente diferenciado, que discute alternativa por alternativa, explica tudo por trás da pergunta, destrincha os conceitos e te faz entender exatamente o que o examinador quer saber. Confiei 100% na metodologia deles, segui o ranking com os assuntos mais prevalentes em cada instituição para fazer um estudo direcionado e dediquei grande parte do meu tempo em resolução de questões e provas na íntegra e assim cheguei no resultado que sempre sonhei!",
    url: "/mariana.webp",
  },
  {
    name: "🏅Samuel Roque Alves",
    place: "1°lugar Cirurgia Torácica USP",
    description:
      "Medcof conseguiu otimizar meu tempo de estudo com aulas rápidas e focadas no que cai. Além disso, o Qbank tem questões atuais e bem comentadas que ajudam na revisão.",
    url: "/samuel.webp",
  },
  {
    name: "🏅Vitor Iglesias Mangolini ",
    place: "1° lugar Clínica Médica USP",
    description:
      "Olhando para trás, só tenho a agradecer e reconhecer o Medcof pelo auxílio nesse caminho. Com certeza vale a pena estar acompanhado de um bom cursinho nesse ano de preparação e considero que este foi o melhor que conheci até hoje. Na minha opinião, os principais diferenciais foram o Qbank e as aulas de cirurgia. Vi muitos cursinhos que só empurravam bancos enormes e com comentários repetidos. O diferencial do Qbank foi que a escolha das questões era muito boa e os comentários muito bem feitos. Sem dúvida esse foi o ponto alto e foi central para a preparação. Da minha parte, recomendo para todos que me perguntarem. Obrigado Medcof!",
    url: "/vitor.webp",
  },
  {
    name: "🏅Willian Da Cunha Gripp",
    place: "1° lugar Medicina Legal e Perícia Médica USP",
    description:
      "Olhando para trás, só tenho a agradecer e reconhecer o Medcof pelo auxílio nesse caminho. Com certeza vale a pena estar acompanhado de um bom cursinho nesse ano de preparação e considero que este foi o melhor que conheci até hoje. Na minha opinião, os principais diferenciais foram o Qbank e as aulas de cirurgia. Vi muitos cursinhos que só empurravam bancos enormes e com comentários repetidos. O diferencial do Qbank foi que a escolha das questões era muito boa e os comentários muito bem feitos. Sem dúvida esse foi o ponto alto e foi central para a preparação. Da minha parte, recomendo para todos que me perguntarem. Obrigado Medcof!",
    url: "/willian.webp",
  },
];

const FirstPlaces: React.FC = () => {
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="flex flex-col relative isolate items-center pt-10 pb-12 px-4">
      <h3 className="text-center h1-text-color-bold text-zinc-900 max-w-2xl leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
      Confira o depoimento de alguns dos nossos primeiros lugares
      </h3>
      <div className="embla mt-10 w-full">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((value, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="embla__scale relative"
                  style={{
                    ...(tweenValues.length && {
                      transform: `scale(${tweenValues[index]})`,
                    }),
                  }}
                >
                  <Image src="/aspas.png" alt="aspas" className="absolute opacity-30 right-0 -scale-x-100" width={30} height={30} />
                  <div className="w-[70px] h-[70px] shadow relative overflow-hidden rounded-full mx-auto">
                    <Image src={value.url} alt={value.name} fill />
                  </div>
                  <h1 className="mt-2 text-center text-black text-opacity-90 text-[22px] font-medium font-sora">{value.name}</h1>
                  <p className="text-center text-black text-opacity-70 text-[13px] font-normal font-sora leading-tight">{value.place}</p>
                  <p className="text-center italic text-black text-opacity-50 text-[13px] mt-4 font-normal font-sora px-6 leading-tight">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPlaces;
