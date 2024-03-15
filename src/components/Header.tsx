import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import ActiveLink from '@Components/ActiveLink'
import { useRouter } from 'next/router'
import LanguageSwitchLink from '@Components/LanguageSwitchLink'
import i18nextConfig from '@/next-i18next.config'

const Header = () => {
  const router = useRouter()
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  const { t } = useTranslation(['common'])

  return (
    <>
      {/* <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="header__fake" />
              <div className="header__lang d-flex justify-content-end">
                {i18nextConfig.i18n.locales.map((locale) => {
                  if (locale === currentLocale) return null
                  return <LanguageSwitchLink locale={locale} key={locale} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */}

      <header className="header">
        <div className="header__container">
          <div className="header__body">
            <button type="button" className="header__menu-icon icon-menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="#" className="header__logo _icon-logo">
              <img src="/static/img/main/logo-header.svg" alt="Buzz24" />
            </a>
            <div className="header__main">
              <div className="header__wrap">
                <div className="header__location location-header">
                  <div
                    data-dropdown-hover=""
                    className="location-header__items"
                  >
                    <button
                      data-dropdown-button=""
                      type="button"
                      data-value="1"
                      className="location-header__title f18 _bg _icon-arrow-1"
                    >
                      Україна | ₴
                    </button>
                    <div
                      data-dropdown-list=""
                      className="location-header__list dropdown__list"
                    >
                      <div className="spollers__arrow"></div>
                      <div className="lang-header__row">
                        <div
                          className="lang-header__title"
                          data-translate="CHOOSE_REGION"
                        >
                          Вибрати регіон
                        </div>
                      </div>
                      <ul className="lang-header__wrap">
                        <li
                          data-dropdown-item=""
                          className="location-header__item dropdown__item"
                          data-value="1"
                        >
                          <div className="location-header__radio">
                            <input
                              className="location-header__radio-input"
                              checked
                              type="radio"
                              id="location-1"
                              name="location"
                            />
                            <label
                              htmlFor="location-1"
                              data-translate="REG_UK_UA"
                            >
                              Україна | ₴
                            </label>
                          </div>
                        </li>
                        <li
                          data-dropdown-item=""
                          className="location-header__item dropdown__item"
                          data-value="2"
                        >
                          <div className="location-header__radio">
                            <input
                              className="location-header__radio-input"
                              type="radio"
                              id="location-2"
                              name="location"
                            />
                            <label
                              htmlFor="location-2"
                              data-translate="REG_PL_PL"
                            >
                              Польша | zł
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      name="select-loc"
                      value="1"
                      data-dropdown-input=""
                      className="dropdown__input-hidden"
                    />
                    <div
                      data-da=".wrapper,767.98,1"
                      className="location-header__body"
                    >
                      <div className="spollers__arrow"></div>
                      <p
                        className="location-header__text"
                        data-translate="LANG_POPUP_INFO"
                      >
                        Ми визначили вашу країну як Україна. Ви можете змінити
                        це в налаштуваннях.
                      </p>
                      <div className="location-header__buttons">
                        <button
                          type="button"
                          className="location-header__button btn"
                          data-translate="AGREE_BUTTON"
                        >
                          Ок
                        </button>
                        <button
                          type="button"
                          className="location-header__button btn btn-c"
                          data-translate="CHANGE_BUTTON"
                        >
                          Змінити
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="header__line hide-mob"></div>
                <div className="header__category category-header">
                  <a
                    href="catalog.html"
                    className="category-header__button f18 icon-close _icon-dots"
                    data-translate="ALL_EQUIPMENT"
                  >
                    Вся спецтехніка
                  </a>
                </div>
                <form action="#" className="header__search search-header">
                  <input
                    id="search-input"
                    type="text"
                    name="form[]"
                    data-error="Ошибка"
                    data-translate="MAIN_SEARCH_PLACEHOLDER"
                    placeholder="Що потрібно знайти?"
                    className="search-header__input"
                  />
                  <ul
                    id="suggestions-list"
                    className="search-header__suggestions-list"
                  ></ul>
                  <button
                    type="submit"
                    className="search-header__button _icon-search-1 btn-c"
                  ></button>
                  <button
                    type="button"
                    className="search-header__button-clear btn-close"
                  ></button>
                </form>
                <div
                  data-dropdown-hover
                  className="header__lang lang-header dropdown"
                  data-da=".header__body,767.98,3"
                >
                  <button
                    data-dropdown-button
                    className="lang-header__button dropdown__button _icon-arrow f18 _bg _icon-arrow-1"
                    data-value="ua"
                  >
                    UA
                  </button>
                  <div
                    data-dropdown-list
                    className="lang-header__list dropdown__list"
                  >
                    <div className="spollers__arrow"></div>
                    <div className="lang-header__row">
                      <div
                        className="lang-header__title"
                        data-translate="CHANGE_LANG"
                      >
                        ЗМІНИТИ МОВУ
                      </div>
                    </div>
                    <ul className="lang-header__wrap">
                      <li className="location-header__item dropdown__item">
                        <div className="location-header__radio">
                          <input
                            className="location-header__radio-input"
                            type="radio"
                            id="lang-1"
                            name="lang"
                            value="EN"
                          />
                          <label htmlFor="lang-1">
                            <span
                              data-dropdown-item
                              className="location-header__label"
                              data-value="en"
                            >
                              EN
                            </span>
                            <span
                              className="location-header__radio-text"
                              data-translate="EN"
                            >
                              Англійська
                            </span>
                          </label>
                        </div>
                      </li>
                      <li className="location-header__item dropdown__item">
                        <div className="location-header__radio">
                          <input
                            className="location-header__radio-input"
                            checked
                            type="radio"
                            id="lang-2"
                            name="lang"
                            value="UK_UA"
                          />
                          <label htmlFor="lang-2">
                            <span
                              data-dropdown-item
                              className="location-header__label"
                              data-value="ua"
                            >
                              UA
                            </span>
                            <span
                              className="location-header__radio-text"
                              data-translate="UK_UA"
                            >
                              Українська
                            </span>
                          </label>
                        </div>
                      </li>
                      <li className="location-header__item dropdown__item">
                        <div className="location-header__radio">
                          <input
                            className="location-header__radio-input"
                            type="radio"
                            id="lang-3"
                            name="lang"
                            value="UK_UA"
                          />
                          <label htmlFor="lang-3">
                            <span
                              data-dropdown-item
                              className="location-header__label"
                              data-value="ua"
                            >
                              PL
                            </span>
                            <span
                              className="location-header__radio-text"
                              data-translate="PL_PL"
                            >
                              Польська
                            </span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <input
                    data-dropdown-input
                    type="text"
                    name="select-category"
                    value=""
                    className="dropdown__input-hidden"
                  />
                </div>
                <div className="header__line hide-mob"></div>
                <div className="header__login login-header">
                  <div data-dropdown-hover className="login-header__item">
                    <button
                      data-dropdown-button
                      type="button"
                      id="header__title-login"
                      className="login-header__title _bg _icon-arrow-1 f18"
                    >
                      <span
                        className="login-header__title-name"
                        data-translate="PROFILE_MAIN"
                      >
                        Кабінет
                      </span>
                      <span className="_icon-user"></span>
                    </button>
                    <div
                      data-dropdown-list
                      className="login-header__body"
                      data-da=".header__wrap,767.98,0"
                    >
                      <div
                        data-da=".login-header__item,767.98,2"
                        className="spollers__arrow"
                      ></div>
                      <div className="login-header__top">
                        <a
                          href="#"
                          data-popup="#popup-login"
                          className="login-header__button btn btn-c"
                          data-translate="SIGN_IN_BUTTON"
                        >
                          Вхід
                        </a>
                        <p className="login-header__text">
                          <span data-translate="NEW_CUSTOMER">
                            Новий клієнт
                          </span>
                          ?
                          <a href="#" data-translate="START_HERE">
                            Реєстрація
                          </a>
                        </p>
                      </div>
                      <div className="login-header__bottom">
                        <h6
                          className="login-header__title-bottom f14"
                          data-translate="YOUR_ACCOUNT"
                        >
                          Ваш обліковий запис
                        </h6>
                        <ul className="login-header__list">
                          <li>
                            <a
                              href=""
                              className="login-header__link"
                              data-translate="ORDERS"
                            >
                              Замовлення
                            </a>
                          </li>
                          <li>
                            <a
                              href=""
                              className="login-header__link"
                              data-translate="OFFERS"
                            >
                              Пропозиції
                            </a>
                          </li>
                          <li>
                            <a
                              href=""
                              className="login-header__link"
                              data-translate="PROFILE"
                            >
                              Профіль
                            </a>
                          </li>
                          <li>
                            <a
                              href=""
                              className="login-header__link"
                              data-translate="MESSAGES"
                            >
                              Повідомлення
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
