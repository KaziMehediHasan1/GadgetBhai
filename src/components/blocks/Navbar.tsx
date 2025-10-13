import React from "react";
import CommonWrapper from "../CommonWrapper";
import AnnouncementBar from "./AnnouncementBar";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data/nav-links";
import FAIcon from "../FontAwesomeIcon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <AnnouncementBar />
      <CommonWrapper>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">GadgetBhai</p>
          </div>

          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <section className="flex items-center gap-x-5">
            <div className="relative w-full max-w-2xs">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full bg-gray-100 py-3 pl-4 pr-10 rounded-md text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />

              <button
                type="submit"
                aria-label="Search"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <FAIcon
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  icon={faSearch}
                  size="lg"
                />
              </button>
            </div>

            <div className="flex items-center gap-x-5">
              <CiHeart className="text-2xl" />
              <CiShoppingCart className="text-2xl" />
            </div>
          </section>

        </div>
      </CommonWrapper>
    </>
  );
};

export default Navbar;
