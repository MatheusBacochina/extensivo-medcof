
import { ScrollShadow } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";

const LastDays = () => {
  return <div className="flex flex-col  shrink-0 text-sm gap-1 font-sora items-center">
  <h1 className="text-[#ff3232ec] font-semibold sw1 leading-none">ULTIMOS DIAS</h1>
  <h5 className="text-[#e5e5e5] uppercase font-semibold font-inter leading-none">Black November</h5>
</div>
}
const BnNav = () => {
  const [wd, setWd] = useState(2000)

  const total = ((wd / 119) * 3).toFixed()

  const Elements = Array(+total).fill(null).map((_, i) => (
    <LastDays key={i} />
  ))
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  
    function handleScroll() {
      if (containerRef.current) {
        if (containerRef.current.scrollLeft >= (containerRef.current.scrollWidth / 2 - containerRef.current.offsetWidth)) {
          containerRef.current.scrollLeft -= 0.6;
        } else {
          containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
      }
    }
  
    // Start the interval loop
    const scrollInterval = setInterval(() => {
      handleScroll();
    }, 16); // Adjust the interval as needed for your desired scroll speed
  
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
  // const initialTime = 15 * 60;
  // const [time, setTime] = useState(initialTime);

  // const formatTime = (timeInSeconds: number) => {
  //   const minutes = Math.floor(timeInSeconds / 60);
  //   const seconds = timeInSeconds % 60;
  //   return [String(minutes).padStart(2, "0"), String(seconds).padStart(2, "0")];
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((prevTime: number) => (prevTime > 0 ? prevTime - 1 : 0));
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() =>{
    setWd(window.innerWidth)
  }, [])
  return (
    <div className="bg-[#000]">
    <ScrollShadow hideScrollBar
    ref={containerRef}
    orientation="horizontal"
    size={40} className="bg-[#000] overflow-x-auto gap-8 top-0 z-50 py-3 flex items-center px-6">
      {Elements }
    </ScrollShadow>
    </div>
  );
};

export default BnNav;
