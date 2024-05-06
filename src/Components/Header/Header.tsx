import { Icons } from "./../../assets";

const { logo } = Icons;
const { menu, x } = Icons.mobile;
const { down } = Icons.arrow;
const { calendar, planning, reminders, todoList } = Icons.FeactureSection;

export const Header = () => {
  return (
    <header className="flex items-center justify-between m-4 mb-6">
      <img src={logo} alt="Logo SNAP" />
      <img className="hidden" src={menu} alt="Icon menu view mobile" />
      <nav className="text-neutral-medium-gray">
        {/* hidden */}
        {/* Back Menu */}
        <div className="bg-neutral-medium-gray opacity-75 absolute left-0 top-0 w-full h-[780px]"></div>
        {/* Front Menu */}
        <div className="bg-neutral-almost-white w-60 absolute right-0 top-0 h-[780px] p-5">
          {/* Button X */}
          <div className="flex items-center justify-end cursor-pointer">
            <img src={x} alt="" />
          </div>
          <ul>
            <li className="flex flex-col items-start gap-1 cursor-pointer mb-7">
              <button className="flex items-center gap-1 cursor-pointer w-24 justify-between">
                Feacture
                <img src={down} alt="Icon Arrow Down" />
              </button>

              <ul className="relative left-6 hidden">
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
              <button className="flex items-center gap-1 cursor-pointer w-24 justify-between">
                Company
                <img src={down} alt="Icon Arrow Down" />
              </button>
              <ul className="relative left-6 hidden">
                <li className="cursor-pointer mb-3">History</li>
                <li className="cursor-pointer mb-3">Our Team</li>
                <li className="cursor-pointer mb-3">Blog</li>
              </ul>
            </li>
            <li className="cursor-pointer mb-3">Careers </li>
            <li className="cursor-pointer mb-3">About</li>
          </ul>
          <div className="absolute bottom-32">
            <button className="block m-auto mb-4 cursor-pointer">Login</button>
            <button className="block m-auto w-48 h-11 border border-neutral-almost-black rounded-2xl cursor-pointer">
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
