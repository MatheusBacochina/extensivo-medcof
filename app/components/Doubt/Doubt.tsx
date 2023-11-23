import Link from "next/link";
const Doubt = () => {
  return (
    <div className="px-6">
      <div className="max-w-[900px] flex flex-col items-center py-8 mx-auto bg-white bg-opacity-0 px-4 shadow border-l-8 border-green-600">
        <h1 className="text-center max-w-md text-zinc-800 text-2xl font-bold font-mont">
          Ainda tem alguma dúvida para fazer sua inscrição?
        </h1>
        <p className="mt-3 text-center">Fale com nossa equipe de suporte agora.</p>
        <Link href="https://api.whatsapp.com/send/?phone=5511942197690&text=Gostaria+de+falar+com+o+suporte&type=phone_number&app_absent=0">
        <button className=" bg-emerald-400 shadow hover:scale-105 transition-transform rounded-lg mt-7 py-4 px-8">
            <span className="text-center text-white text-base font-normal">Quero tirar uma dúvida!</span>
        </button>
        </Link>
      </div>
     
    </div>
  );
};

export default Doubt;
