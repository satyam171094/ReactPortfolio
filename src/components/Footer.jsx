import React from "react";
import pic from "../assets/logo.png"


import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={pic}
          alt="Founder"
        />

        <h2>Satyam Jaiswal</h2>
        <p>As a React developer, I get to build user interfaces that are both functional and beautiful. It's a rewarding experience. </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/satyam171094" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;