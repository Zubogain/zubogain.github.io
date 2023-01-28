import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from 'next-i18next';

import ActiveLink from "@/libs/active-link";
import { useRouter } from "next/router";
import LinkComponent from "./Link";
import LanguageSwitchLink from "./LanguageSwitchLink";
import i18nextConfig from '../../next-i18next.config'

const Header = () => {
  const router = useRouter();
  const currentLocale =
    router.query.locale || i18nextConfig.i18n.defaultLocale

  const { t } = useTranslation(["common"]);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="header__fake" />
              <ul className="header__nav d-flex justify-content-center">
                <li className="header__nav-item cap__text selected"><LinkComponent href="/">{t("common:header.nav.home")}</LinkComponent></li>
                <li className="header__nav-item cap__text"><LinkComponent href="/skills">{t("common:header.nav.skills")}</LinkComponent></li>
                <li className="header__nav-item cap__text"><LinkComponent href="/experience">{t("common:header.nav.experience")}</LinkComponent></li>
                <li className="header__nav-item cap__text"><LinkComponent href="/contact">{t("common:header.nav.contact")}</LinkComponent></li>
              </ul>

              <div className="header__lang d-flex justify-content-end">
                {i18nextConfig.i18n.locales.map(locale => {
                  if (locale === currentLocale) return null
                  return <LanguageSwitchLink locale={locale} key={locale} />
                })}
                {/* <Link href={router.route} locale={t("common:header.lang.url")} className="cap__text">{t("common:header.lang.value")}</Link> */}
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

// export { getStaticPaths }
// export const getStaticProps = async ctx => {
//   return {
//     props: {
//       ...(await getI18nProps(ctx, ['common'])),
//     },
//   }
// }
