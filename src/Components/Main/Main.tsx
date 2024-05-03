import { Icons } from "./../../assets";

const { audioPhile, dataBiz, maker, meet } = Icons.clients;

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
    </main>
  );
};
