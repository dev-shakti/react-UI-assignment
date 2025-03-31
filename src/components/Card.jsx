import { Share2, MessageSquare } from "lucide-react";

const Card = ({
  messageCount,
  shareCount,
  text,
  title,
  titleBg,
  titleColor,
  image,
}) => {
  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-slate-800 p-8">
      <span
        className={`rounded-md p-2 font-semibold text-sm `}
        style={{ backgroundColor: titleBg, color: titleColor }}
      >
        {title}
      </span>
      {image && (
        <div className="mt-4 overflow-hidden h-48 w-full">
          <img src={image} alt="" className="rounded-md object-cover w-full h-full" />
        </div>
      )}
      <p className="mt-6 mb-4 text-gray-500 text-lg font-semibold">{text}</p>
      <div className="flex items-center justify-between">
        <div className="icons flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Share2 className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400 font-semibold text-lg">
              {shareCount}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400 font-semibold text-lg">
              {messageCount}
            </span>
          </div>
        </div>
        <div className="user-img relative flex items-center">
          <img
            className="rounded-full object-cover w-10 h-10 border-2 border-white"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="user-img"
          />
          <img
            className="rounded-full object-cover w-10 h-10 border-2 border-white -ml-4"
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="user-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
