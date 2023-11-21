import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    name: "🏅Alexandra Gomes Dos Santos",
    place: "🏅Alexandra Gomes Dos Santos",
    description:
      " Com o Medcof, mudei minha forma de estudar, investindo mais tempo nas questões. O qbank é realmente seu grande diferencial. As questões tinham excelentes comentários, que equivaliam a uma aula. São milhares delas. Minha meta era de 100 questões por dia, e mesmo assim, não concluí nem a metade. Na hora de fazer a prova, deu para reconhecer diversos assuntos comentados nas alternativas. Dessa forma, tive segurança e conhecimento suficientes para sair do 29° para a 1° lugar em Neurocirurgia da USP. Muito obrigada ao Medcof!",
    url: "/alexandra.webp",
  },
  {
    name: "🏅Mariana Correia Moreira Cruz",
    place: "1°lugar Ginecologia e Obstetrícia da USP",
    description:
      " Com o Medcof, mudei minha forma de estudar, investindo mais tempo nas questões. O qbank é realmente seu grande diferencial. As questões tinham excelentes comentários, que equivaliam a uma aula. São milhares delas. Minha meta era de 100 questões por dia, e mesmo assim, não concluí nem a metade. Na hora de fazer a prova, deu para reconhecer diversos assuntos comentados nas alternativas. Dessa forma, tive segurança e conhecimento suficientes para sair do 29° para a 1° lugar em Neurocirurgia da USP. Muito obrigada ao Medcof!",
    url: "/alexandra.webp",
  },
  {
    name: "🏅Alexandra Gomes Dos Santos",
    place: "🏅Alexandra Gomes Dos Santos",
    description:
      " Com o Medcof, mudei minha forma de estudar, investindo mais tempo nas questões. O qbank é realmente seu grande diferencial. As questões tinham excelentes comentários, que equivaliam a uma aula. São milhares delas. Minha meta era de 100 questões por dia, e mesmo assim, não concluí nem a metade. Na hora de fazer a prova, deu para reconhecer diversos assuntos comentados nas alternativas. Dessa forma, tive segurança e conhecimento suficientes para sair do 29° para a 1° lugar em Neurocirurgia da USP. Muito obrigada ao Medcof!",
    url: "/alexandra.webp",
  },
  {
    name: "🏅Alexandra Gomes Dos Santos",
    place: "🏅Alexandra Gomes Dos Santos",
    description:
      " Com o Medcof, mudei minha forma de estudar, investindo mais tempo nas questões. O qbank é realmente seu grande diferencial. As questões tinham excelentes comentários, que equivaliam a uma aula. São milhares delas. Minha meta era de 100 questões por dia, e mesmo assim, não concluí nem a metade. Na hora de fazer a prova, deu para reconhecer diversos assuntos comentados nas alternativas. Dessa forma, tive segurança e conhecimento suficientes para sair do 29° para a 1° lugar em Neurocirurgia da USP. Muito obrigada ao Medcof!",
    url: "/alexandra.webp",
  },
  {
    name: "🏅Alexandra Gomes Dos Santos",
    place: "🏅Alexandra Gomes Dos Santos",
    description:
      " Com o Medcof, mudei minha forma de estudar, investindo mais tempo nas questões. O qbank é realmente seu grande diferencial. As questões tinham excelentes comentários, que equivaliam a uma aula. São milhares delas. Minha meta era de 100 questões por dia, e mesmo assim, não concluí nem a metade. Na hora de fazer a prova, deu para reconhecer diversos assuntos comentados nas alternativas. Dessa forma, tive segurança e conhecimento suficientes para sair do 29° para a 1° lugar em Neurocirurgia da USP. Muito obrigada ao Medcof!",
    url: "/alexandra.webp",
  },
];

const FirstPlaces: React.FC = () => {
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="flex flex-col relative isolate items-center pt-10 pb-20 px-4">
      <h3 className="text-center h1-text-color-bold text-zinc-900 max-w-2xl leading-tight text-[22px] sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] mx-auto font-bold font-mont">
        Garantindo a sua participação agora você vai receber os seguintes bônus
        gratuitos:
      </h3>
      <div className="embla mt-10 w-full">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((value, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="embla__scale"
                  style={{
                    ...(tweenValues.length && {
                      transform: `scale(${tweenValues[index]})`,
                    }),
                  }}
                >
                  <div className="w-[70px] h-[70px] relative overflow-hidden bg-slate-600 rounded-full mx-auto">
                    <Image src={value.url} alt={value.name} fill />
                  </div>
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
