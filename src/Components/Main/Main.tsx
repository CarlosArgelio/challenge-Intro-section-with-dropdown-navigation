import { Icons, Images } from "./../../assets";

const { audioPhile, dataBiz, maker, meet } = Icons.clients;
const { desktopHero, mobileHero } = Images.hero;

export const Main = () => {
  return (
    <main className="flex flex-col-reverse">
      <section>
        <h2 className="text-center text-3xl mb-4 font-bold">
          Make remote work
        </h2>
        <p className="text-center leading-7 text-neutral-medium-gray text-base mx-4 mb-6">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="block bg-neutral-almost-black text-neutral-almost-white w-32 h-12 rounded-2xl mb-[52px] m-auto hover:bg-neutral-almost-white hover:text-neutral-almost-black hover:border-[1px] hover:border-neutral-almost-black">
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
      <picture>
        <source srcSet={mobileHero} media="(max-width: 639px)" />
        <source srcSet={desktopHero} media="(max-width: 640px)" />
        <img className="w-full mb-12" src={mobileHero} alt="Imagen Hero" />
      </picture>
    </main>
  );
};
