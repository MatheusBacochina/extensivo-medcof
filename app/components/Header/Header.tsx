"use client";
import Logo from "@/app/components/Logo";
const vimeoUrl = "https://player.vimeo.com/video/865690031?h=2678665bdb";
const Header = () => {
  return (
    <header className="overflow-hidden relative px-4 background-header h-fit flex flex-col items-center pt-[20px] isolate">
      <Logo />
      <h1 className="text-white animation-h1 max-w-[840px] mt-7 text-center text-3xl font-normal font-sora text-[24px] sm:text-[26px] md:text-[30px] ">
        Comece a estudar <span className="font-bold">6 meses antes</span> dos
        seus concorrentes e{" "}
        <span className="h1-text-color font-semibold">
          seja aprovado na residência médica que você quiser!
        </span>
      </h1>
      <div className="max-w-[700px] video-transition w-full relative aspect-video mt-4">
        <iframe
          onLoad={() => {
            console.log("here");
          }}
          title="Vimeo Video"
          src={vimeoUrl}
          allow="fullscreen"
          width="100%"
          height={"100%"}
          allowFullScreen
          className="rounded-sm"
        />
      </div>
    </header>
  );
};

export default Header;
