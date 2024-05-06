import { useEffect, useState } from "react";
import { Icons, Images } from "./../../assets";

const { audioPhile, dataBiz, maker, meet } = Icons.clients;
const { desktopHero, mobileHero } = Images.hero;

export const Main = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  const MOBIEL_MAX_WIDTH = 1023;

  return (
    <main className="flex flex-col-reverse lg:flex-row lg:justify-between lg:mt-5 lg:ml-20 lg:mr-16 lg:mb-16">
      <section>
        <h2 className="text-center text-3xl mb-4 font-bold md:text-[42px] lg:text-left lg:text-7xl lg:mt-[100px] lg:mx-0 lg:mb-12 lg:w-[450px]">
          Make remote work
        </h2>
        <p className="text-center leading-7 text-neutral-medium-gray text-base mx-4 mb-6 md:w-[600px] md:text-lg md:my-10 md:m-auto lg:text-left lg:text-lg lg:w-[445px] lg:font-medium lg:mb-[25px]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="block bg-neutral-almost-black text-neutral-almost-white w-32 h-12 rounded-2xl mb-[52px] m-auto hover:bg-neutral-almost-white hover:text-neutral-almost-black hover:border-[1px] hover:border-neutral-almost-black md:w-[163px] md:h-14 md:text-lg md:mb-12 lg:mb-[116px] lg:ml-0">
          Learn more
        </button>

        <div className="flex items-center justify-between gap-1 px-4  mb-24">
          <img className="w-20" src={dataBiz} alt="Logo Client DataBiz" />
          <img
            className="w-[52px]"
            src={audioPhile}
            alt="Logo Client Audio Phile"
          />
          <img className="w-[64px]" src={meet} alt="Logo Client Meet" />
          <img className="w-59px" src={maker} alt="Logo Client Maker" />
        </div>
      </section>
      <picture className="md:w-[80%] md:m-auto md:mt-6 lg:w-[400px] lg:m-0">
        <source
          srcSet={mobileHero}
          type="image/svg+xml"
          media="(max-width: 1023px)"
        />
        <source
          srcSet={desktopHero}
          type="image/svg+xml"
          media="(max-width: 1024px)"
        />
        {width > MOBIEL_MAX_WIDTH ? (
          <img className="w-full mb-12" src={desktopHero} alt="Image Hero" />
        ) : (
          <img className="w-full mb-12" src={mobileHero} alt="Image Hero" />
        )}
      </picture>
    </main>
  );
};
