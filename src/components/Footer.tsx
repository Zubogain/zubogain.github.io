import React from 'react'
import staticContent from '@Src/staticContent'

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrap">
          <div className="footer__column">
            <a href="#" className="footer__logo _icon-logo">
              <img src="/static/img/main/logo-footer.svg" alt="Buzz24" />
            </a>
            <p className="footer__all-right" data-translate="FOOTER_COPYRIGHT">
              Copyright © 2021 buzz24.eu. Всі права захищені.
            </p>
          </div>
          <div className="footer__column">
            <h6
              className="footer__title f14"
              data-translate="FOOTER_TITLE_INFO"
            >
              Інформація
            </h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_INFO_ABOUT"
                >
                  Про сервіс
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_INFO_CONTACTS"
                >
                  Контакти
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_INFO_COMMENTS"
                >
                  Відгуки про виконавців
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_INFO_POLICY"
                >
                  Політика конфіденційності
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_INFO_PUBLIC"
                >
                  Публічна оферта
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6
              className="footer__title f14"
              data-translate="FOOTER_TITLE_PARTNERS"
            >
              Партнерам
            </h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_PARTNERS_CONNECT"
                >
                  Підключення до сервісу
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_PARTNERS_ORDERS"
                >
                  Замовлення на техніку
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_PARTNERS_COOPERATION"
                >
                  Співпраця
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6 className="footer__title f14" data-translate="FOOTER_TITLE_ETC">
              Інше
            </h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_MAP"
                >
                  Карта сайту
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="#"
                  className="footer__link"
                  data-translate="FOOTER_TITLE_VERSION"
                >
                  Версія для ПК
                </a>
              </li>
              <li className="footer__item">
                <div
                  className="footer__link"
                  data-translate="FOOTER_TITLE_MODE"
                >
                  Темна тема
                </div>
                <span className="header__switch">
                  <input id="myCheck" type="checkbox" />
                  <label htmlFor="myCheck" className="header__button" />
                </span>
              </li>
            </ul>
            <div className="footer__socials">
              <a href="#" className="footer__social _icon-telegram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="footer d-flex justify-content-between p-3">
      <p className="copyrigth">© {staticContent.author}</p>
      <p className="version">
        {staticContent.codename} - {staticContent.version}
      </p>
    </div>
  </>
)

export default Footer
