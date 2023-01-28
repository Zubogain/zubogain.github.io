import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage'

import ActiveLink from "@/libs/active-link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { t, lang } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="header__fake" />
              <ul className="header__nav d-flex justify-content-center">
                <li className="header__nav-item cap__text selected"><ActiveLink href="/" activeClassName="active">{t("common:header.nav.home")}</ActiveLink></li>
                <li className="header__nav-item cap__text"><ActiveLink href="/skills" activeClassName="active">{t("common:header.nav.skills")}</ActiveLink></li>
                <li className="header__nav-item cap__text"><ActiveLink href="/experience" activeClassName="active">{t("common:header.nav.experience")}</ActiveLink></li>
                <li className="header__nav-item cap__text"><ActiveLink href="/contact" activeClassName="active">{t("common:header.nav.contact")}</ActiveLink></li>
              </ul>

              <div className="header__lang d-flex justify-content-end">
                <Link href={router.route} locale={t("common:header.lang.url")} className="cap__text">{t("common:header.lang.value")}</Link>
              </div>
            </div>
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
    </header >
  )
}

export default Header;
