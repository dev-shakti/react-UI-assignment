import { 
  ArrowRight, HomeIcon, LayoutDashboard, ShoppingCart, User, Settings, FileText, 
  Bell, MessageSquare, Users, Folder, CreditCard, 
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-6 h-6" /> },
    { name: "Home", icon: <HomeIcon className="w-6 h-6" /> },
    { name: "Products", icon: <ShoppingCart className="w-6 h-6" /> },
    { name: "Profile", icon: <User className="w-6 h-6" /> },
    { name: "Users", icon: <Users className="w-6 h-6" /> },
    { name: "Settings", icon: <Settings className="w-6 h-6" /> },
    { name: "Reports", icon: <FileText className="w-6 h-6" /> },
    { name: "Notifications", icon: <Bell className="w-6 h-6" /> },
    { name: "Messages", icon: <MessageSquare className="w-6 h-6" /> },
    { name: "Documents", icon: <Folder className="w-6 h-6" /> },
    { name: "Billing", icon: <CreditCard className="w-6 h-6" /> }
  ];

  return (
    <div className="sticky top-0 left-0 w-fit lg:w-64 h-screen bg-white dark:bg-slate-900 dark:border-r dark:border-slate-800  p-6 overflow-hidden">
      <h2 className="text-slate-800 text-lg  lg:text-2xl font-semibold mb-6 dark:text-gray-400">Vuexy</h2>

      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li 
            key={item.name}
            className={`flex justify-between items-center text-lg font-semibold p-2 cursor-pointer transition-all duration-200 ease-in rounded-md
              ${
                activeItem === item.name 
                  ? "bg-gradient-to-r from-purple-500 to-purple-300 text-white" 
                  : "text-gray-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-300 hover:text-white"
              }`}
            onClick={() => setActiveItem(item.name)}
          >
           <div className="flex gap-2 items-center">
              <span className="dark:text-gray-300">{item.icon}</span>
              <span className="hidden md:block">{item.name}</span>
            </div>
            < ChevronRight className="w-6 h-6 dark:text-gray-300 hidden md:block" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
