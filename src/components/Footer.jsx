const Footer = () => {
  return (
    <footer className="p-4 md:p-6 w-full flex flex-col md:flex-row justify-between items-center bg-slate-100 dark:bg-slate-900 dark:border-t dark:border-slate-800">
      <p className="text-gray-600 dark:text-gray-400  text-sm font-medium">Created by @Shakti ©2025</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-500">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-400  text-sm hover:text-blue-500">
          Terms of Service
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-400  text-sm hover:text-blue-500">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;

