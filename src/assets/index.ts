import Logo from "./img/logo.svg";
import IconMenuViewMobile from "./img/icon-menu.svg";
import IconMenuCloseMobile from "./img/icon-close-menu.svg";
import IconArrowDown from "./img/icon-arrow-down.svg";
import IconTodoList from "./img/icon-todo.svg";
import IconCalendar from "./img/icon-calendar.svg";
import IconReminders from "./img/icon-reminders.svg";
import IconPlanning from "./img/icon-planning.svg";
import LogoClientAudioPhile from "./img/client-audiophile.svg";
import LogoClientDataBiz from "./img/client-databiz.svg";
import LogoClientMaker from "./img/client-maker.svg";
import LogoClientMeet from "./img/client-meet.svg";

import ImageHeroMobile from "./img/image-hero-mobile.png";
import ImageHeroDesktop from "./img/image-hero-desktop.png";

export const Icons = {
  logo: Logo,
  mobile: {
    menu: IconMenuViewMobile,
    x: IconMenuCloseMobile,
  },
  arrow: {
    down: IconArrowDown,
  },
  FeactureSection: {
    todoList: IconTodoList,
    calendar: IconCalendar,
    reminders: IconReminders,
    planning: IconPlanning,
  },
  clients: {
    audioPhile: LogoClientAudioPhile,
    dataBiz: LogoClientDataBiz,
    maker: LogoClientMaker,
    meet: LogoClientMeet,
  },
};

export const Images = {
  hero: {
    mobileHero: ImageHeroMobile,
    desktopHero: ImageHeroDesktop,
  },
};
