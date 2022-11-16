import React from "react";
// import icons
import { ImFacebook, ImInstagram } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-8 text-xl">
        <li>
          <a href="https://www.facebook.com/lukaszniemiecphoto" target="blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/lukaszniemiec.photo"
            target="blank"
          >
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
