"use client";
import React, { useState } from "react";
import CommonWrapper from "../CommonWrapper";
import AnnouncementBar from "./AnnouncementBar";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data/nav-links";
import {
  CiHeart,
  CiMenuBurger,
  CiShoppingCart,
  CiSearch,
} from "react-icons/ci";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <AnnouncementBar />

      <div className="border-b-[1px] border-gray-300 px-4 xl:px-0">
        <CommonWrapper>
          <div className="flex items-center justify-between pt-5 pb-3">
            <div>
              <Link href="/" className="text-xl font-semibold">
                GadgetBhai
              </Link>
            </div>

            <div className="hidden lg:flex gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="hover:text-red-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <section className="flex items-center gap-x-5">
              <div className="relative hidden lg:block w-full max-w-xs">
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-full bg-gray-100 py-3 pl-4 pr-10 rounded text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />

                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <CiSearch className="text-gray-500 hover:text-gray-700 transition-colors w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-x-5">
                <Link href="/wishlist">
                  <CiHeart className="text-xl sm:text-2xl hover:text-red-500" />
                </Link>
                <Link href="/cart">
                  <CiShoppingCart className="text-xl sm:text-2xl hover:text-red-500" />
                </Link>
              </div>

              {/* Mobile Device */}
              <button
                onClick={() => setToggle(true)}
                className="block lg:hidden"
              >
                <CiMenuBurger className="text-xl sm:text-2xl" />
              </button>

              {
                toggle && <section>
                  hiiii
                </section>
              }
            </section>
          </div>
        </CommonWrapper>
      </div>
    </>
  );
};

export default Navbar;
