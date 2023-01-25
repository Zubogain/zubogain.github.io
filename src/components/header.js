import React from "react";
import Image from "next/image";
import Link from "next/link";

import ActiveLink from "@/libs/active-link";

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="header__nav d-flex justify-content-center">
              <li className="header__nav-item cap__text selected"><ActiveLink href="/" activeClassName="active">Home</ActiveLink></li>
              <li className="header__nav-item cap__text"><ActiveLink href="/skills" activeClassName="active">Skills</ActiveLink></li>
              <li className="header__nav-item cap__text"><ActiveLink href="/experience" activeClassName="active">Experience</ActiveLink></li>
              <li className="header__nav-item cap__text"><ActiveLink href="/contact" activeClassName="active">Contact</ActiveLink></li>
            </ul>
          </div>
          <div className="col-12">
            <ul className="header__socials d-flex justify-content-center">
              <li className="header__socials-item cap__text">
                <Link href="https://github.com/Zubogain">
                  <Image
                    priority
                    src="/static/github-square.svg"
                    height={25}
                    width={25}
                    alt="GitHub"
                  />
                </Link>
              </li>
              <li className="header__socials-item cap__text">
                <Link href="https://t.me/Zubogain">
                  <Image
                    priority
                    src="/static/telegram.svg"
                    height={25}
                    width={25}
                    alt="Telegram"
                  />
                </Link>
              </li>
              <li className="header__socials-item cap__text">
                <Link href="https://kz.linkedin.com/in/emil-shergali-3470b9184">
                  <Image
                    priority
                    src="/static/linkedin.svg"
                    height={25}
                    width={25}
                    alt="Linkedin"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
