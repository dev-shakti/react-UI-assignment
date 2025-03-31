import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Topbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);


  return (
    <div className="w-full p-6">
      <div className="flex items-center gap-4 rounded-lg shadow-md bg-white p-4 dark:bg-slate-800">
        {/* Search Icon & Input */}
        <div className="flex items-center gap-2 flex-1 bg-gray-100 px-3 py-1 rounded-md dark:bg-slate-800">
          <AiOutlineSearch className="w-6 h-6 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700" />
          <input
            type="text"
            placeholder="Search [CTRL+K]..."
            className="flex-1 border-none outline-none bg-transparent text-gray-700 text-sm"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? (
              <Moon className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300" />
            ) : (
              <Sun className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400" />
            )}
          </button>

          {/* Notification Icon with Dot */}
          <div className="hidden md:block relative">
            <IoMdNotificationsOutline className="w-6 h-6 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 transition duration-200" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
          </div>

          {/* User Profile with Status Dot */}
          <div className="relative hidden md:block">
            <img
              className="rounded-full object-cover w-10 h-10"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="user-img"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
