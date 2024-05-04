import { Icons, Images } from "./../../assets";

const { audioPhile, dataBiz, maker, meet } = Icons.clients;
const { desktopHero, mobileHero } = Images.hero;

export const Main = () => {
  return (
    <main>
      <section>
        <h2>Make remote work</h2>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>

        <div>
          <img src={dataBiz} alt="Logo Client DataBiz" />
          <img src={audioPhile} alt="Logo Client Audio Phile" />
          <img src={meet} alt="Logo Client Meet" />
          <img src={maker} alt="Logo Client Maker" />
        </div>
      </section>
      <picture>
        <source srcSet={mobileHero} media="(max-width: 639px)" />
        <source srcSet={desktopHero} media="(max-width: 640px)" />
        <img src={mobileHero} alt="Imagen Hero" />
      </picture>
    </main>
  );
};
