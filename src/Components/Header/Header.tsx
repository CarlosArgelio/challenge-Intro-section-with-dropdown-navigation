import { Icons } from "./../../assets";

const { logo } = Icons;
const { menu } = Icons.mobile;
const { down } = Icons.arrow;
const { calendar, planning, reminders, todoList } = Icons.FeactureSection;

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo SNAP" />
      <img src={menu} alt="Icon menu view mobile" />
      <nav>
        <ul>
          <li className="flex items-center gap-1">
            <button>Feacture</button>
            <img src={down} alt="Icon Arrow Down" />
            <ul>
              <li className="flex items-center gap-1">
                <img src={todoList} alt="Icon Todo List" />
                <span>Todo List</span>
              </li>
              <li className="flex items-center gap-1">
                <img src={calendar} alt="Icon Calendar" />
                <span>Calendar</span>
              </li>
              <li className="flex items-center gap-1">
                <img src={reminders} alt="Icon Reminders" />
                <span>Reminders</span>
              </li>
              <li className="flex items-center gap-1">
                <img src={planning} alt="Icon Planning" />
                <span>Planning</span>
              </li>
            </ul>
          </li>
          <li className="flex items-center gap-1">
            <button>Company</button>
            <img src={down} alt="Icon Arrow Down" />
            <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>Careers </li>
          <li>About</li>
        </ul>
        <button>Login</button>
        <button>Register</button>
      </nav>
    </header>
  );
};
