import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const mona700 = localFont({ src: "../../../fonts/MonaSans-Bold.ttf" });
const mona400 = localFont({ src: "../../../fonts/MonaSans-Regular.ttf" });
const mona600 = localFont({ src: "../../../fonts/MonaSans-SemiBold.ttf" });
const mona500 = localFont({ src: "../../../fonts/MonaSans-Medium.otf" });
const CofExpress = () => {
  return (
    <div className="bg-[#14110F] py-24 md:py-32 overflow-hidden px-4 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[1035px]  mx-auto flex flex-col gap-6 relative">
            <Image width={290} height={290} alt="cofexpress" src="/cof-es.svg" className="absolute bottom-0 -ml-40 mix-blend-overlay" />
          <div className="w-[290px] h-[909px] absolute md:-top-32 -right-44">
            <Image
              fill
              alt="cofexpress"
              src="/cof-right.svg"
              className="mix-blend-overlay z-50 relative"
            />
            <div className="w-[724px] h-[724px] absolute shadow-red -right-52" />
          </div>
          <div className="flex flex-col md:flex-row relative z-50 md:gap-8">
            <div className="md:basis-[580px] py-8 flex flex-col justify-center">
              <h3
                style={{ fontFamily: mona600.style.fontFamily }}
                className="text-white text-[28px] md:text-[32px] font-semibold leading-none"
              >
                Conquiste mais, em menos tempo, com o Cof Express
              </h3>
              <p
                style={{ fontFamily: mona400.style.fontFamily }}
                className="text-neutral-200 max-w-[555px] text-base md:text-lg font-normal mt-7 leading-snug"
              >
                Vivemos em um mundo onde cada minuto conta, e seu tempo é um
                recurso valioso. Imagina revisar todo um assunto em apenas 05
                minutos (isso mesmo!!), sem perder a essência e os detalhes. Com
                o Cof Express, é possível!
              </p>
              <Link href={"#prices"}>
              <button  className="max-w-[345px] py-3 mt-5 bg-[#FF0000] rounded-[100px] px-5 hover:scale-105 transition-all ">
                <span
                  style={{ fontFamily: mona500.style.fontFamily }}
                  className="text-white text-base font-medium "
                >
                  Não sacrifique mais seu tempo valioso! 
                </span>
              </button>
              </Link>
              <p
                style={{ fontFamily: mona400.style.fontFamily }}
                className="text-[#DEDEDE] max-w-[555px] leading-snug text-base md:text-lg font-normal mt-7"
              >
                Otimize sua preparação, seja eficiente e vá direto ao ponto com
                o CoF Express. Chegue ao ápice da sua preparação com cada minuto
                de estudo aproveitado ao máximo.
              </p>
            </div>
            <div className="md:basis-[420px] flex-shrink-[1.3] flex flex-col gap-7">
              <div className="md:min-h-[244px] flex-shrink-[2] card_cof_plus px-5 py-7">
                <div className="flex items-center gap-3">
                  <Image
                    width={42}
                    height={42}
                    alt=""
                    src={"rocket-logo.svg"}
                  />
                  <span
                    style={{ fontFamily: mona700.style.fontFamily }}
                    className="text-white text-base font-bold"
                  >
                    Agilidade e Foco
                  </span>
                </div>
                <p
                  style={{ fontFamily: mona500.style.fontFamily }}
                  className="text-[#d6d6d6] text-xs font-normal leading-relaxed pt-5 max-w-[360px]"
                >
                  Seu dia a dia é acelerado, mas a sua preparação não precisa
                  ser sacrificada por isso. Ative o CoF Express para revisar
                  tópicos fundamentais em aulas de revisão concisas de até 5
                  minutos, permitindo que você revise tudo que é vital sobre
                  cada assunto de forma rápida e eficaz.
                </p>
              </div>
              <div className="md:min-h-[244px] card_cof_plus px-5 py-7">
                <div className="flex items-center gap-3">
                  <Image
                    width={42}
                    height={42}
                    alt=""
                    src={"rocket-logo.svg"}
                  />
                  <span
                    style={{ fontFamily: mona700.style.fontFamily }}
                    className="text-white text-base font-bold"
                  >
                    Praticidade Sem Igual
                  </span>
                </div>
                <p
                  style={{ fontFamily: mona500.style.fontFamily }}
                  className="text-[#d6d6d6] text-xs font-normal leading-relaxed pt-5 max-w-[360px]"
                >
                  Quando o tempo é escasso, cada minuto vale ouro. Tenha acesso
                  aos principais conceitos de cada aula em vídeos de 5 minutos,
                  proporcionando revisões pontuais e direcionadas ao que você
                  mais precisa.
                </p>
              </div>
            </div>
          </div>
          <div className="md:pl-[158px] flex flex-col md:flex-row w-full gap-7 z-50">
            {" "}
            <div className="md:min-h-[244px] card_cof_plus  basis-1/2 px-5 py-7">
              <div className="flex items-center gap-3">
                <Image width={42} height={42} alt="" src={"rocket-logo.svg"} />
                <span
                  style={{ fontFamily: mona700.style.fontFamily }}
                  className="text-white text-base font-bold"
                >
                  Revisão Sob Demanda
                </span>
              </div>
              <p
                style={{ fontFamily: mona500.style.fontFamily }}
                className="text-[#d6d6d6] text-xs font-normal leading-relaxed pt-5 max-w-[360px]"
              >
                Esqueça os momentos perdidos tentando se lembrar do que foi
                ensinado. Com o CoF Express, você pode revisar o conteúdo sempre
                que necessário, facilitando a fixação e consolidação do
                conhecimento.
              </p>
            </div>
            <div className="md:min-h-[244px] card_cof_plus basis-1/2 px-5 py-7">
              <div className="flex items-center gap-3">
                <Image width={42} height={42} alt="" src={"rocket-logo.svg"} />
                <span
                  style={{ fontFamily: mona700.style.fontFamily }}
                  className="text-white text-base font-bold"
                >
                   Foco nos Conceitos-Chave
                </span>
              </div>
              <p
                style={{ fontFamily: mona500.style.fontFamily }}
                className="text-[#d6d6d6] text-xs font-normal leading-relaxed pt-5 max-w-[360px]"
              >
                Em meio a uma rotina apertada, as aulas do Extensivo 2024 trarão
                o CoF Express, resumindo os principais tópicos de forma direta,
                para que você possa revisar de maneira ágil e certeira.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CofExpress;
