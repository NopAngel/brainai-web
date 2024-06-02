import Logo from "../assets/mylogo.svg";
import React from "react";

function Navbar() {
  return (
    <header className="p-[10px] bg-transparent/55 backdrop-blur-sm fixed top-0 w-[100%] items-center z-30">
      <nav>
        <ul
          className="flex justify-evenly items-center *:uppercase text-neutral-300"
          id="ul-font"
        >
          <section>
            <li>
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </li>
          </section>
          <section className="flex gap-10">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">How to Use</a>
            </li>
            <li>
              <a href="#">ROADMap</a>
            </li>
          </section>
          <section className="flex gap-10">
            <li>
              <a href="#">New Account</a>
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-l from-indigo-800 to-purple-400 p-[4px] rounded-full w-[200px]"
              >
                <span className="bg-black relative p-[3px] w-[99%] rounded-full h-[98%]">
                  SIGN IN
                </span>
              </a>
            </li>
          </section>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
