
import { ScrollShadow } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";

const LastDays = () => {
  return <div className="flex flex-col shrink-0 mx-4 text-sm gap-1 font-sora items-center">
  <h1 className="text-[#ff3232ec] animate-pulse font-bold sw1 leading-none">ULTIMOS DIAS</h1>
  <h5 className="text-[#e5e5e5] uppercase font-semibold font-inter leading-none">Black November</h5>
</div>
}
const BnNav = () => {



  const total = ((2000 / 119) * 2).toFixed()

  const Elements = Array(+total).fill(null).map((_, i) => (
    <LastDays key={i} />
  ))
 
  return (
    <div className="bg-[#000]">
    <ScrollShadow hideScrollBar
    orientation="horizontal"
    size={40} className="bg-[#000] overflow-x-auto top-0 z-50 py-3 flex items-center px-6">
     <div className="anim-top flex">
      {Elements}
      </div>
    </ScrollShadow>
    </div>
  );
};

export default BnNav;
