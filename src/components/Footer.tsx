import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f2f5f3] border-t border-gray-300 py-4 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center sm:text-left text-xs sm:text-sm text-gray-700">
        <p className="font-medium text-gray-800">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-gray-600">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
