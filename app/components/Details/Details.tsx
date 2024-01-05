import Image from "next/image";
import Bg from "../Bg";
const Item = ({
  url,
  text,
  w,
  h,
  last = false,
}: {
  w: number;
  h: number;
  url: string;
  text: string;
  last?: boolean;
}) => {
  return (
    <div className={`py-7 ${last ? "" : "border-b"} border-[#FFFFFF1A]`}>
      <span className="text-white text-[14px] flex items-center gap-3 sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-normal font-mont leading-normal">
        <Image width={w} height={h} src={url} alt="icon hospital" /> {text}
      </span>
    </div>
  );
};
const Details = () => {
  return (
    <div className="overflow-hidden pb-20 pt-10 relative px-6 background-header h-fit flex flex-col items-center isolate">
      <Bg
        logo={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="46"
            viewBox="0 0 31 46"
            fill="none"
          >
            <path
              d="M1.91574 0.00976395C1.38944 0.0813692 1.24265 0.113592 1.06364 0.192357C0.791538 0.314086 0.612524 0.518161 0.390548 0.972855C-0.0355035 1.83928 -0.107109 2.82027 0.14709 4.33472C0.497956 6.41844 1.71167 9.28623 3.20464 11.5525C4.85872 14.0659 7.01762 16.1997 9.14429 17.4242C9.53812 17.6497 10.1503 17.9505 10.3831 18.0292C10.4583 18.0543 10.5585 18.1331 10.6337 18.2333C10.8521 18.5161 11.3927 19.0102 11.7185 19.225C12.1696 19.5258 12.8033 19.8337 13.3081 19.9984C13.5516 20.0807 13.7772 20.1452 13.8165 20.1452C13.8738 20.1452 13.8989 20.2168 13.9956 20.6178C14.0779 20.983 14.1423 21.4591 14.2677 22.68C14.3572 23.55 14.4288 24.2768 14.4288 24.2947C14.4288 24.3126 14.3357 24.3949 14.2247 24.4773C14.1101 24.5632 13.8846 24.7351 13.7199 24.864L13.4227 25.0931L13.7342 25.4368C13.9096 25.6301 14.0851 25.827 14.1316 25.8772C14.2712 26.0311 14.4288 27.0551 14.4288 27.8177C14.4288 28.412 14.307 29.2068 14.1495 29.6687C14.0493 29.9551 13.8344 30.3704 13.659 30.6174C13.3797 31.0041 12.8928 31.423 12.721 31.423C12.6279 31.423 12.5312 31.2977 12.5312 31.1831C12.5312 31.1366 12.5241 31.1008 12.5169 31.1008C12.4453 31.1008 10.9308 31.96 9.79232 32.6439L8.39602 33.4817L7.78021 33.4924C7.41861 33.4996 7.16083 33.521 7.16083 33.5389C7.16083 33.5568 7.01762 34.4054 6.8386 35.4257C6.66317 36.4425 6.51638 37.3054 6.51638 37.3412C6.51638 37.377 6.5307 37.3949 6.55218 37.3841C6.57724 37.3698 6.58799 37.9749 6.58799 39.1707V40.9823H6.30514C6.0402 40.9823 6.0223 40.9859 6.0044 41.0647C5.99366 41.1076 5.90415 41.5945 5.80033 42.1459C5.70008 42.6973 5.59983 43.177 5.58193 43.2092C5.56403 43.245 5.54971 43.6854 5.54971 44.1866V45.0996H15.5386H25.5276V44.1866V43.2737L25.1517 42.0743C24.944 41.4119 24.7757 40.8642 24.7757 40.857C24.7757 40.8463 24.6862 40.8391 24.5788 40.8391H24.3783L24.3819 39.0346L24.3855 37.2302L23.9165 35.4257C23.6587 34.434 23.4403 33.5962 23.4295 33.5604C23.4116 33.5067 23.3508 33.4996 22.7958 33.4996H22.1836L20.662 32.5902C19.4089 31.8455 18.0914 31.1008 18.0233 31.1008C18.0162 31.1008 18.009 31.1402 18.009 31.1867C18.009 31.2332 17.9804 31.3084 17.9446 31.3514L17.8837 31.4266L17.6689 31.3013C17.5543 31.2297 17.4398 31.1724 17.4183 31.1724C17.3932 31.1724 17.2787 31.0721 17.1605 30.9468C16.5089 30.2702 16.1688 29.3285 16.1222 28.0755C16.09 27.2413 16.2296 26.0777 16.3836 25.8987C16.423 25.8557 16.602 25.6552 16.7846 25.4547L17.1175 25.0895L16.6127 24.71C16.3335 24.4988 16.1115 24.3054 16.1115 24.2732C16.1115 24.241 16.1867 23.4999 16.2762 22.6263C16.3943 21.4842 16.4659 20.9221 16.534 20.6392L16.6306 20.2418L17.028 20.1416C17.7333 19.9662 18.3492 19.6941 18.9757 19.2859C19.2227 19.1248 19.4519 18.9279 19.8063 18.5663C20.261 18.1044 20.3219 18.0579 20.5761 17.9469C22.624 17.0697 24.7256 15.2903 26.838 12.6445C28.7212 10.2851 30.3108 7.07362 30.8085 4.62472C31.1164 3.08521 31.0555 1.98607 30.608 1.07668C30.4146 0.682854 30.1819 0.432235 29.8561 0.263963C29.4551 0.0634679 29.1508 0.0133442 28.2665 0.00976395C27.2855 0.00618368 26.2866 0.124332 25.5741 0.331988C25.1338 0.457297 24.944 0.618409 24.7721 1.00866C24.6289 1.33088 24.5967 1.5636 24.5645 2.42286C24.5358 3.14966 24.5215 3.29287 24.4571 3.4683C24.3533 3.7404 24.2065 3.87645 23.9666 3.92657C23.6229 3.99818 23.5907 3.98028 23.4868 3.6867C23.4367 3.54706 23.3902 3.42176 23.3794 3.4146C23.3472 3.38237 20.9985 3.00286 20.2646 2.90978C18.6499 2.70212 16.4301 2.63768 13.6053 2.70928C12.8284 2.73076 11.9655 2.76299 11.6899 2.78447C10.8234 2.84891 9.41639 3.04225 8.00935 3.29287L7.36848 3.40743L7.28972 3.64015C7.23959 3.78694 7.18589 3.87645 7.15009 3.88361C7.03552 3.90509 6.84218 3.81558 6.71687 3.67595C6.51638 3.45398 6.477 3.2678 6.44477 2.31545C6.42329 1.63162 6.40181 1.43113 6.34453 1.25212C6.187 0.754459 5.92922 0.478779 5.50675 0.349889C5.206 0.260382 4.626 0.156555 3.97797 0.0742087C3.54834 0.024085 2.1413 -0.0224584 1.91574 0.00976395ZM3.54476 0.579026C4.40044 0.675693 5.10934 0.822484 5.28835 0.940633C5.4065 1.01582 5.53897 1.30582 5.58193 1.56718C5.59983 1.69249 5.62489 2.11138 5.63563 2.49447C5.66428 3.46114 5.76094 3.81558 6.09033 4.14497C6.32305 4.37769 6.57366 4.47435 6.99972 4.49225L7.35774 4.50658L7.347 5.73103C7.31836 8.71339 7.52959 11.0656 7.96997 12.6803C8.37454 14.1625 9.07269 15.8882 9.64553 16.8298C9.7243 16.9552 9.75294 17.0303 9.72072 17.016C9.62763 16.9802 9.01898 16.5649 8.60367 16.2534C7.40428 15.3584 6.02588 13.9943 4.93032 12.6338C3.86698 11.3055 2.99698 9.95574 2.24154 8.44487C0.884624 5.73819 0.326103 3.31435 0.702031 1.77841C0.777216 1.47409 0.995613 1.00508 1.1424 0.840385C1.26771 0.697175 1.39302 0.643471 1.75463 0.575446C2.08759 0.514581 2.97908 0.518161 3.54476 0.579026ZM29.1472 0.664952C29.5876 0.736558 29.6306 0.761619 29.763 0.983596C30.5077 2.23669 30.2929 4.48151 29.1615 7.29202C28.4455 9.07141 27.5254 10.7291 26.4656 12.1612C25.3593 13.6542 23.7195 15.2187 22.155 16.2677C21.7074 16.5685 21.1239 16.9229 21.0809 16.9229C21.0666 16.9229 21.131 16.7976 21.2169 16.6437C21.6072 15.9634 22.044 14.9788 22.3805 14.0086C23.1574 11.7709 23.3651 10.2493 23.4045 6.54017L23.426 4.55312L23.7339 4.54596C24.4034 4.53522 24.8258 4.21299 25.0335 3.55781C25.0908 3.37879 25.1087 3.17472 25.1338 2.49447C25.1696 1.54928 25.2054 1.35594 25.4023 1.13755C25.4846 1.04804 25.5849 0.987176 25.7138 0.944213C25.9715 0.865447 26.6375 0.750879 27.1781 0.690014C27.7008 0.63273 28.8608 0.618409 29.1472 0.664952Z"
              fill="white"
            />
          </svg>
        }
      />
      <div className="flex w-full flex-col-reverse lg:flex-row items-center max-w-6xl gap-8">
        <div className="flex-1 relative w-full min-h-[300px] flex-shrink-0 lg:h-auto self-stretch">
          <Image
            src="/professores.png"
            fill
            alt="professores medcof"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="basis-[500px] flex-grow-0 max-w-[500px]">
          <h1 className="text-center sm:text-left text-white text-[24px] sm:text-[25px] md:text-[26px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] font-bold font-mont leading-tight">
            Prepare-se de qualquer lugar com os melhores professores.
          </h1>
          <div className="w-[100px] h-1 mx-auto sm:mx-0 bg-red-600 my-2" />
          <Item
            w={40}
            h={40}
            url="/hospital.svg"
            text="As questões das principais provas do país são retiradas do dia a
    dia dessas grandes instituições médicas."
          />
          <Item
            w={40}
            h={40}
            url="/icon-medico.svg"
            text="Nossos especialistas são preceptores, diaristas, plantonistas desses grandes hospitais."
          />

          <Item
            w={40}
            h={40}
            url="/icon-pessoa.svg"
            text="Por isso, na hora da prova, você não será pego de surpresa com conteúdos que nunca ouviu falar. Isso é estar na mente do especialista que faz a sua prova."
          />
          <Item
            w={40}
            h={40}
            url="/icon-computer.svg"
            text="Todo conteúdo pode ser acessado pelo celular, tablet, smartphone, televisão. Estude entre os ambulatórios, voltando para casa, durante o plantão… encaixe seu estudo em qualquer lugar a qualquer hora."
          />
          <Item
            w={40}
            h={40}
            url="/icon-task.svg"
            text="Aulas didáticas e que vão no nível de detalhe exigido pela banca. Nada de explicações prolixas sobre um tema simples."
          />
        </div>
      </div>
      <div className="flex w-full mt-20 flex-col lg:flex-row items-center max-w-6xl gap-8">
        <div className="basis-[550px] flex-grow-0 max-w-[550px]">
          <h1 className="text-center sm:text-left text-white text-[24px] sm:text-[25px] md:text-[26px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] font-bold font-mont leading-tight">
          Saiba mais detalhes sobre o Banco de Questões Digital (QBank) mais completo do Brasil
          <br />
         <div className="lg:text-[18px] text-[#e9e9e9] leading-tight mt-2 xl:text-[20px] font-medium">O nosso QBank é a ferramenta de questões mais completa e avançada em território nacional:</div> 
          </h1>
          <div className="w-[100px] h-1 mx-auto sm:mx-0 bg-red-600 my-2" />
          <Item
            w={30}
            h={30}
            url="/cerebro.svg"
            text="Usamos a Inteligência Artificial para maximizar o seu desempenho, ajudando na sua evolução através da retenção e aprofundamento dos conteúdos."
          />
          <Item
            w={30}
            h={30}
            url="/pessoas.svg"
            text="São dezenas de milhares de questões comentadas em alto nível, em vídeo e texto pelo especialista de cada área."
          />

          <Item
            w={30}
            h={30}
            url="/cartao.svg"
            text="Mais de 10.000 flashcards com revisões espaçadas."
          />
          <Item
            w={30}
            h={30}
            url="/medalha.svg"
            text="Através dessa ferramenta, você pode aumentar suas chances em até 4x mais para ser aprovado e ter um índice acima de 97% de acertos."
          />
        </div>
        <div className="flex-1 relative lg:mt-0 w-full min-h-[300px] flex-shrink-0 lg:h-auto self-stretch">
          <Image
            src="/notebook.png"
            fill
            className="linear-image-mask"
            alt="notebook medcof"
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/shadow.png"
            fill
            className="
            mix-blend-multiply"
            alt="shadow medcof"
            style={{ objectFit: "contain" }}
          />
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
        className="cursor-pointer mt-10 button rounded-lg shadow px-6 py-3 hover:scale-105 transition-all"
      >
        <span className="text-white text-[18px] font-normal font-inter leading-normal">
          Quero começar a estudar hoje!
        </span>
      </button>
    </div>
  );
};

export default Details;
