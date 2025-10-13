import React from "react";
import CommonWrapper from "../CommonWrapper";
import AnnouncementBar from "./AnnouncementBar";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data/nav-links";

const Navbar = () => {
  return (
    <>
      <AnnouncementBar />
      <CommonWrapper>
        <div className="">

          <div>
            <p>GadgetBhai</p>
          </div>

          <div>
            {NAV_LINKS.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            
              <input type="search" placeholder="What are you looking for?" className="bg-[#F5F5F5] px-3 p-2.5" />
          </div>

        </div>
      </CommonWrapper>
    </>
  );
};

export default Navbar;
