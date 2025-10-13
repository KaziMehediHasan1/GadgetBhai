"use client";
import Link from "next/link";
import React, { useState } from "react";

const AnnouncementBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };
  return (
    <div className="bg-black py-2 text-sm">
      <section className="w-full max-w-[50%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <p className="text-white">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href="show" className="border-b-1 text-white">
            Show now
          </Link>
        </div>

        <select
          name="language"
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="text-white bg-black focus:outline-none"
        >
          <option value="english" className="text-white ">
            English
          </option>
          <option value="bangla" className="text-white">
            Bangla
          </option>
        </select>
      </section>
    </div>
  );
};

export default AnnouncementBar;
