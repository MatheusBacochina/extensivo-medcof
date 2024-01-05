import Image from "next/image";
import localFont from "next/font/local";
const mona700 = localFont({ src: "../../../../fonts/MonaSans-Bold.ttf" });
const mona500 = localFont({ src: "../../../../fonts/MonaSans-Medium.otf" });
const AqfmCard = ({
    setCardOpen,
    letter,
    title,
    icon,
    paragraph,
    removeOpenCard,
    activated = false
  }: {
    activated: boolean;
    removeOpenCard: () => void;
    setCardOpen: () => void;
    letter: string;
    title: string;
    icon: string;
    paragraph: string;
  }) => {
    return (
      <div
      onMouseLeave={removeOpenCard}
      onMouseEnter={setCardOpen}
        className={`border-r group lg:hover:flex-[5] lg:flex-[1] border-white flex overflow-hidden relative transition-all items-stretch h-[290px] lg:h-[360px] bg-[#14110F] ${activated && "lg:flex-[5]"} lg:flex-[1]`}
      >
        <div className="flex-1 pt-5 pl-6 flex flex-col -mr-4">
          <div className="flex items-center gap-2">
            <Image
              src={icon}
              width={0}
              height={0}
              className="w-6 h-5"
              alt="align left icon"
            />
            <span
              style={mona500.style}
              className="text-white text-lg font-medium"
            >
              {title}
            </span>
          </div>
          <div className="w-[490px] flex-1 flex items-center mb-8 z-50">
            <span
              style={mona500.style}
              className={`sm:text-stone-400 text-stone-200 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] ${!activated &&"lg:opacity-0 group-hover:opacity-100" } relative transition-opacity leading-tight w-[calc(60%)] sm:w-[400px] md:w-[550px] lg:w-[340px] xl:w-[600px] 2xl:w-[700px] ${activated && "opacity-100"} `}
            >
              {paragraph}
            </span>
          </div>
        </div>
        <div
          style={mona700.style}
          className="text-center sm:text-[#D9D9D9] text-[#333333]  absolute text-[200px] lg:text-[300px] md:text-[250px] font-bold leading-none -right-5 md:-right-10 antialiased object-fill top-1/2 -translate-y-1/2"
        >
          {letter}
        </div>
        <Image
          style={{ objectFit: "fill" }}
          className="absolute h-full w-96 mix-blend-multiply right-0 z-20"
          src="/shadow-letter.svg"
          width={0}
          height={0}
          alt=""
        />
      </div>
    );
  };

  export default AqfmCard;