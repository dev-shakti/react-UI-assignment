import { MoreVertical, Plus } from "lucide-react";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <div className="p-4 lg:p-6 w-full h-full relative">
      <div className="max-w-7xl mx-4 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* Column 1: In Review */}
        <div className="items space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 dark:text-gray-400  font-semibold text-xl tracking-tight">
              In Review
            </h3>
            <MoreVertical className="w-6 h- dark:text-gray-400 " />
          </div>
          <Card
            messageCount={15}
            shareCount={9}
            text="Reseach FAQ page UX"
            title="UX"
            titleBg="#E0F7FA"
            titleColor="#00796B"
          />
          <Card
            messageCount={8}
            shareCount={5}
            text="Review Javascript code"
            title="Code Review"
            titleBg="#E8EAF6"
            titleColor="#3F51B5"
          />
          <span className="text-lg font-semibold text-gray-600 flex items-center gap-2">
            <Plus /> Add New Item
          </span>
        </div>

        {/* Column 2: Done */}
        <div className="items space-y-8">
          <div className="flex items-center justify-between ">
            <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-xl tracking-tight">
              Done
            </h3>
            <MoreVertical className="w-6 h-6 dark:text-gray-400 " />
          </div>
          <Card
            messageCount={18}
            shareCount={7}
            text="Review completed app"
            title="Info"
            titleBg="#E3F2FD"
            titleColor="#1565C0"
          />
          <Card
            messageCount={11}
            shareCount={9}
            text="Find new images for pages"
            title="UX"
            titleBg="#FFEBEE"
            titleColor="#D32F2F"
            image="https://media.istockphoto.com/id/467233280/photo/nepal-jungle.webp?a=1&b=1&s=612x612&w=0&k=20&c=L6s_nSTbxZn_zOwbnO_0ZrKyInSZuxVox3anfAg9EX4="
          />
        </div>

        {/* Column 3: In Progress */}
        <div className="items space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 dark:text-gray-400  font-semibold text-xl tracking-tight">
              In Progress
            </h3>
            <MoreVertical className="w-6 h-6 dark:text-gray-400 " />
          </div>
          <Card
            messageCount={45}
            shareCount={17}
            text="Forms & Tables sections"
            title="App"
            titleBg="#FFF3E0"
            titleColor="#E65100"
          />
          <Card
            messageCount={17}
            shareCount={11}
            text="Completed Charts & Maps"
            title="Charts & Maps"
            titleBg="#F3E5F5"
            titleColor="#8E24AA"
          />
        </div>
      </div>
      <button className="hidden lg:block absolute bottom-6 right-4 text-lg mr-4 bg-[#e74c3c] text-white border-none outline-none cursor-pointer px-4 py-2 font-bold rounded-md shadow-[0_0_15px_4px_rgba(231,76,60,0.8)]">
        Buy Now
      </button>
    </div>
  );
};

export default Homepage;
