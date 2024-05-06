import { useState } from "react";
import { Icons } from "./../../assets";

const { logo } = Icons;
const { menu, x } = Icons.mobile;
const { down } = Icons.arrow;
const { calendar, planning, reminders, todoList } = Icons.FeactureSection;

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [subMenuFeacture, setSubMenuFeacture] = useState<boolean>(false);
  const [subMenuCompany, setSubMenuCompany] = useState<boolean>(false);

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  const handleSubMenuFeacture = () => {
    setSubMenuFeacture(!subMenuFeacture);
  };

  const handleCloseSubMenuCompany = () => {
    setSubMenuCompany(!subMenuCompany);
  };

  return (
    <header className="flex items-center justify-between m-4 mb-6 lg:mt-5 lg:mx-10 lg:mb-16">
      <img src={logo} alt="Logo SNAP" />
      <button onClick={handleOpenMenu}>
        <img
          className={`${openMenu ? "hidden" : ""} md:hidden`}
          src={menu}
          alt="Icon menu view mobile"
        />
      </button>
      <nav
        className={`text-neutral-medium-gray ${
          openMenu ? "" : "hidden"
        } md:block md:w-full md:h-full ml-6 lg:ml-11`}
      >
        {/* hidden */}
        {/* Back Menu */}
        <div className="bg-neutral-medium-gray opacity-75 absolute left-0 top-0 w-full h-[780px] md:hidden" />
        {/* Front Menu */}
        <div className="bg-neutral-almost-white w-60 absolute right-0 top-0 h-[780px] p-5 md:static md:w-full md:h-full md:flex md:p-0 md:justify-between md:items-center">
          {/* Button X */}
          {/* flex items-center justify-end */}
          <div className="flex items-center justify-end md:hidden">
            <button onClick={handleCloseMenu} className="cursor-pointer">
              <img src={x} alt="" />
            </button>
          </div>
          <ul className="md:flex md:justify-between md:w-[378px] md:h-9">
            <li className="flex flex-col items-start gap-1 cursor-pointer mb-7">
              <button
                onClick={handleSubMenuFeacture}
                className="flex items-center gap-1 cursor-pointer w-24 justify-between md:m-0"
              >
                Feacture
                <img src={down} alt="Icon Arrow Down" />
              </button>

              <ul
                className={`relative left-6 ${subMenuFeacture ? "" : "hidden"}`}
              >
                <li className="flex items-center gap-1 cursor-pointer mb-3">
                  <img src={todoList} alt="Icon Todo List" />
                  <span>Todo List</span>
                </li>
                <li className="flex items-center gap-1 cursor-pointer mb-3">
                  <img src={calendar} alt="Icon Calendar" />
                  <span>Calendar</span>
                </li>
                <li className="flex items-center gap-1 cursor-pointer mb-3">
                  <img src={reminders} alt="Icon Reminders" />
                  <span>Reminders</span>
                </li>
                <li className="flex items-center gap-1 cursor-pointer mb-3">
                  <img src={planning} alt="Icon Planning" />
                  <span>Planning</span>
                </li>
              </ul>
            </li>
            <li className="flex flex-col items-start gap-1 cursor-pointer mb-7">
              <button
                onClick={handleCloseSubMenuCompany}
                className="flex items-center gap-1 cursor-pointer w-24 justify-between md:m-0"
              >
                Company
                <img src={down} alt="Icon Arrow Down" />
              </button>
              <ul
                className={`relative left-6 ${subMenuCompany ? "" : "hidden"}`}
              >
                <li className="cursor-pointer mb-3">History</li>
                <li className="cursor-pointer mb-3">Our Team</li>
                <li className="cursor-pointer mb-3">Blog</li>
              </ul>
            </li>
            <li className="cursor-pointer mb-3">Careers </li>
            <li className="cursor-pointer mb-3">About</li>
          </ul>
          <div className="absolute bottom-32 md:flex md:justify-between md:static md:w-[180px] md:m-0">
            <button className="block m-auto mb-4 cursor-pointer md:mb-[6px]">
              Login
            </button>
            <button className="block m-auto w-48 h-11 border border-neutral-almost-black rounded-2xl md:w-[104px] cursor-pointer">
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
