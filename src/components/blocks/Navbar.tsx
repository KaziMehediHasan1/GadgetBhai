import React from "react";
import CommonWrapper from "../CommonWrapper";
import AnnouncementBar from "./AnnouncementBar";

const Navbar = () => {
  return (
    <>
      <AnnouncementBar />
      <CommonWrapper>
        <div className="bg-primary">Navbar</div>
      </CommonWrapper>
    </>
  );
};

export default Navbar;
