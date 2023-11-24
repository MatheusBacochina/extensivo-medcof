import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";


const Cards = ({ elements }: any) => {
  return (
    <div id="prices" className="relative background-cards">
       <Image priority src="/logo-bn.png" width={200} height={100} alt="logo bn" className="mx-auto my -3" />
    <div  className=" relative flex gap-6 items-end flex-wrap-reverse pt-5 pb-10 justify-center px-6">
    
      {elements.map(({title,name, order, steps, price, avista, de, url}:{url: string,de: string,name: ReactNode, title: string, order: string, steps: any, price: string, avista: string}, index1: number) => {
        return  <div key={title} className={`basis-[350px] ${order} grow-0 px-6 py-10 flex flex-col items-center ${order === 'centerCard' ? 'max-[1129px]:order-1 max-[770px]:order-4' : ''}`}>
        {order === "centerCard" && <div className="bg-gradient-to-r px-2 text-stone-800 from-fuchsia-300 to-blue-400 rounded-sm shadow justify-center items-start inline-flex">
           Mais Vendido
         </div>}
         <h1 className="text-slate-50 text-center mt-4 font-semibold grow-0 text-[20px] sm:text-[21px] md:text-[22px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px]  mb-2 font-sora">
      {name}
         </h1>
         {steps.map((step: any, index: number) => (
           <div key={index} className="mr-auto">{step}</div>
         ))}
         <span className="mt-5 text-slate-50">
           de <s>{de}</s> por:
         </span>
         <span className="mt-2 text-slate-50">em 12x de:</span>
         <h1 className="leading-none text-[28px] sm:text-[31px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px]  font-bold text-[#34D399]">
           {price}
         </h1>
         <span className="mt-1 text-slate-50">no cartão</span>
         <span className="mt-2 text-slate-50">ou {avista} a vista.</span>
         <Link href={url}>
         <button className="cursor-pointer transition-all py-2 px-4 hover:scale-105 bg-gradient-to-r mt-8 text-stone-800 from-[#34D399] to-[#0daa70] rounded-md shadow justify-center items-start inline-flex">
           <span className="text-white text-[18px]font-normal font-inter leading-normal">
             Quero ser Aprovado!
           </span>
         </button>
         </Link>
       </div>;
      })}
    </div>
    </div>
  );
};

export default Cards;
