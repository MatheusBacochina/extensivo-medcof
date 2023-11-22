import { useEffect, useState } from "react";

const BnNav = () => {
  const initialTime = 15 * 60;
  const [time, setTime] = useState(initialTime);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return [String(minutes).padStart(2, "0"), String(seconds).padStart(2, "0")];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime: number) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#000] sm:sticky top-0 z-50 py-3 flex items-center px-6">
      <div className="max-w-5xl w-full mx-auto flex-wrap gap-x-20 gap-y-4 flex justify-center min-[878px]:justify-between">
        <h1 className="text-slate-50 leading-none text-center w-fit font-winter font-semibold text-[18px] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] flex items-center gap-2">
          Começou a Black November{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.63617 0.436515C4.50787 0.676599 4.35411 0.958436 4.29448 1.06282C4.14803 1.31919 3.66233 2.19002 3.52177 2.44828C3.45925 2.5631 3.39465 2.67413 3.37813 2.69501C3.36166 2.71588 3.21161 2.98064 3.04471 3.28335C2.87777 3.58607 2.67398 3.95331 2.59184 4.09945C2.50966 4.24559 2.34302 4.5445 2.22148 4.76371C2.09998 4.98292 1.97115 5.20497 1.93524 5.25716C1.89933 5.30935 1.77665 5.52287 1.66259 5.73164C1.45997 6.10248 1.01017 6.90833 0.709205 7.43974C0.23959 8.26885 0 8.7371 0 8.82573C0 8.8813 0.0390967 8.96257 0.0878346 9.00838C0.175252 9.09049 0.184285 9.09091 1.82441 9.09148C2.73122 9.09182 3.49193 9.10461 3.5149 9.11994C3.53786 9.13528 3.57601 9.18459 3.59962 9.22949C3.65242 9.32977 3.63082 9.40387 3.28643 10.3056C3.14686 10.6709 2.89467 11.3456 2.72598 11.8049C2.12731 13.4347 1.58751 14.8841 1.45367 15.2211C1.26783 15.689 1.252 15.8717 1.38368 16.0281C1.48977 16.1542 1.69486 16.2219 1.79632 16.1642C1.87333 16.1204 6.29937 11.7413 8.21787 9.81066C9.07382 8.94932 10.0422 7.97658 10.3697 7.64904C10.9889 7.02983 11.0594 6.92382 10.9665 6.75035C10.8581 6.54781 10.8574 6.54773 8.84854 6.54773C7.73228 6.54773 6.95027 6.53293 6.89182 6.51072C6.75786 6.45978 6.76572 6.34522 6.92484 6.02885C6.99654 5.88624 7.1346 5.59878 7.23162 5.39001C7.3286 5.18125 7.55858 4.6859 7.7426 4.28924C7.92666 3.89258 8.30351 3.08123 8.58007 2.48624C8.85663 1.89125 9.12381 1.31049 9.1738 1.19567C9.22383 1.08085 9.32385 0.872082 9.39609 0.731714C9.56295 0.407478 9.56648 0.260353 9.41089 0.111482L9.29436 0H7.08191H4.86946L4.63617 0.436515Z"
              fill="white"
            />
          </svg>
        </h1>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1 text-slate-50 font-sora leading-none">
            <h1 className="font-medium text-[18px]">{formatTime(time)[0]}</h1> <h1 className="text-[16px]">minutos</h1>
          </div>
          <div className="flex flex-col items-center gap-1 text-slate-50 font-sora leading-none">
            <h1 className="font-medium text-[18px]">{formatTime(time)[1]}</h1>
            <h1 className="text-[16px]">segundos</h1>
          </div>
        </div>
        <button className="bg-[#CC0000] hover:bg-[#ed4c4c] transition-all min-[877px]:ml-[65px] rounded-sm px-8 py-2">
            <span className="uppercase text-white font-semibold leading-none font-inter text-[14px]">Quero Desconto</span>
        </button>
      </div>
    </div>
  );
};

export default BnNav;
