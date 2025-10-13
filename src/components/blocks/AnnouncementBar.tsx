"use client";
import Link from "next/link";
import React, { useState } from "react";

const AnnouncementBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };
  return (
    <div className="bg-black py-2 text-xs sm:text-sm">
      <section className="w-[95%] max-w-7xl mx-auto flex items-center justify-center sm:justify-between">
        <div className="flex items-center justify-center sm:justify-start gap-x-4">
          <p className="text-white text-center ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link
            href="/shop"
            className="border-b border-white text-white ml-2 text-xs hover:text-gray-300 hidden md:inline-block"
          >
            Show now
          </Link>
        </div>

        <div className="hidden sm:flex items-center">
          <select
            name="language"
            id="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="text-white bg-black focus:outline-none "
          >
            <option value="english" className="text-white ">
              English
            </option>
            <option value="bangla" className="text-white">
              Bangla
            </option>
          </select>
        </div>

      </section>
    </div>
  );
};

export default AnnouncementBar;
