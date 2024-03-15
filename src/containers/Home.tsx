/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { useTranslation } from 'next-i18next'

import { motion } from 'framer-motion'

const HomeContainer = () => {
  const { t } = useTranslation(['home'])

  return (
    <>
      {/* <Head>
        <title>{t('home:page-title')}</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          title: t('home:og.title'),
          description: t('home:og.description'),
        }}
      />
      <motion.section
        className="home d-flex flex-column justify-content-center align-items-center"
        key="my_unique_key1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="cap__title">{t('home:title')}</h3>
            </div>
          </div>
        </div>
      </motion.section> */}

      <main>
        <div className="side-button">
          <div className="side-button__wrap">
            <button className="side-button__close">
              <img src="/static/img/main/close.svg" alt="svg" />
            </button>
            <p className="side-button__text" data-translate="QUICK_ORDER">
              Телеграм бот
            </p>
            <a href="#" className="side-button__link _icon-telegram" />
          </div>
        </div>
        <div className="cookies">
          <div className="cookies__container">
            <div className="cookies__body">
              <p className="cookies__text" data-translate="COOKIE_INFO">
                Ми використовуємо файли cookie для оптимізації роботи нашого
                сервісу. Продовжуючи користуватися сайтом, ви погоджуєтесь на їх
                використання.
              </p>
              <div className="cookies__buttons">
                <button
                  type="submit"
                  className="cookies__button btn btn-c cookies__accept"
                  data-translate="AGREE_BUTTON"
                >
                  Ок
                </button>
                <a
                  href="https://google.com"
                  className="cookies__button cookies__button-link btn"
                  data-translate="CHANGE_BUTTON"
                >
                  Змінити
                </a>
              </div>
              <button type="submit" className="cookies__button-close btn-close">
                <span />
              </button>
            </div>
          </div>
        </div>
        <section className="main">
          <div className="main__container">
            <h1 className="main__title" data-translate="MAIN_TITLE">
              ПОШУК ТА ОРЕНДА СПЕЦТЕХНІКИ
            </h1>
            <div className="main__wrapper">
              <div className="main__content">
                <div className="main__tabs tabs">
                  <nav className="tabs__navigation" />
                  <div className="tabs__content">
                    <form action="#" className="tabs__body form">
                      <button
                        type="button"
                        className="tabs__header _tab-active f16"
                      >
                        <span className="_icon-truck-2" />
                        <span data-translate="CHOOSE_EQUIPMENT">
                          Підбір техніки
                        </span>
                      </button>

                      <div className="tabs__top-row">
                        <div className="tabs__icon">
                          <img src="/static/img/main/info.svg" alt="" />
                        </div>
                        <p className="tabs__text" data-translate="CHOOSE_INFO">
                          Я знаю, що мені потрібно і виберу сам. Приклад:
                          потрібен автокран
                        </p>
                      </div>
                      <div className="tabs__row">
                        <div
                          data-dropdown
                          className="tabs__dropdown dropdown order-category"
                        >
                          <button
                            type="button"
                            data-dropdown-button
                            className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                            data-value=""
                            data-translate="CHOOSE_CATEGORY_PLACEHOLDER"
                          >
                            Виберіть категорію
                          </button>
                          <div
                            data-dropdown-list
                            className="tabs__list dropdown__list"
                          >
                            <div className="category-header__wrapper">
                              <div className="category-header__items">
                                <h6 className="category-header__title _icon-excavator">
                                  Землеройная техника
                                </h6>
                                <ul className="category-header__list">
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="1"
                                  >
                                    Самосвалы
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="2"
                                  >
                                    Экскаваторы
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="3"
                                  >
                                    Экскаваторы-погрузчики
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="4"
                                  >
                                    Мини-экскаваторы
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="5"
                                  >
                                    Бульдозеры
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="6"
                                  >
                                    Фронтальные погрузчики
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="7"
                                  >
                                    Мини-погрузчики
                                  </li>
                                </ul>
                              </div>
                              <div className="category-header__items">
                                <h6 className="category-header__title _icon-crane_truck">
                                  Краны и погрузочно-разгрузочная техника
                                </h6>
                                <ul className="category-header__list">
                                  <li className="category-header__item" />
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="8"
                                  >
                                    Автокраны
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="9"
                                  >
                                    Телескопические погрузчики
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="10"
                                  >
                                    Вилочные погрузчики
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="11"
                                  >
                                    Погрузчики-манипуляторы
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="12"
                                  >
                                    Автовышки
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="13"
                                  >
                                    Гусеничные краны
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="14"
                                  >
                                    Складская техника
                                  </li>
                                </ul>
                              </div>
                              <div className="category-header__items">
                                <h6 className="category-header__title _icon-bulldozers">
                                  Бетон & Дорожностроительная техника
                                </h6>
                                <ul className="category-header__list">
                                  <li className="category-header__item" />
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="15"
                                  >
                                    Экскаваторы
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="16"
                                  >
                                    Бульдозеры
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="17"
                                  >
                                    Дорожные катки и асфальтоукладчики
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="18"
                                  >
                                    Буровая и сваебойная техника
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="19"
                                  >
                                    Грейдеры
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="20"
                                  >
                                    Бетоносмесители (Бетоновозы и цементовозы)
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="21"
                                  >
                                    Бетононасосы
                                  </li>
                                </ul>
                              </div>
                              <div className="category-header__items">
                                <h6 className="category-header__title _icon-truck-1">
                                  Коммунально-дорожные машины & Другая техника
                                </h6>
                                <ul className="category-header__list">
                                  <li className="category-header__item" />
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="22"
                                  >
                                    Автоцистерны
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="23"
                                  >
                                    Мусоровозы
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="24"
                                  >
                                    Эвакуаторы
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="25"
                                  >
                                    Коммунально-дорожные машины
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="26"
                                  >
                                    Прицепы и полуприцепы (16 Тралы и
                                    низкорамные платформы)
                                  </li>
                                  <li
                                    className="dropdown__item"
                                    data-dropdown-item
                                    data-value="27"
                                  >
                                    Другая техника (башенные краны)
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <input
                            type="text"
                            id="select-category"
                            name="select-category"
                            value=""
                            data-dropdown-input
                            className="dropdown__input-hidden"
                          />
                        </div>
                        <button
                          type="button"
                          data-popup="#popup-category"
                          className="tabs__row-icon _icon-tow-truck"
                        />
                      </div>
                      <div className="tabs__row">
                        <div
                          data-dropdown
                          className="tabs__dropdown dropdown order-location"
                        >
                          <button
                            type="button"
                            data-dropdown-button
                            className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                            data-value=""
                            data-translate="CHOOSE_LOCATION_PLACEHOLDER"
                          >
                            Виберіть адресу робіт
                          </button>
                          <ul
                            data-dropdown-list
                            className="tabs__list dropdown__list"
                          >
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="1"
                            >
                              Киевская область
                            </li>
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="2"
                            >
                              Винницкая область
                            </li>
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="3"
                            >
                              Сумская область
                            </li>
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="4"
                            >
                              Одесская область
                            </li>
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="5"
                            >
                              Днепропетровская область
                            </li>
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="6"
                            >
                              Черниговская область
                            </li>
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="7"
                            >
                              Харьковская область
                            </li>
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="8"
                            >
                              Житомирская область
                            </li>
                            <li
                              className="dropdown__item"
                              data-dropdown-item
                              data-value="9"
                            >
                              Полтавская область
                            </li>
                          </ul>
                          <input
                            type="text"
                            id="select-location"
                            name="select-location"
                            value=""
                            data-dropdown-input
                            className="dropdown__input-hidden"
                          />
                        </div>
                        <button
                          data-popup="#popup-map"
                          type="button"
                          className="tabs__row-icon _icon-location"
                        >
                          <img src="/static/img/main/location.svg" alt="" />
                        </button>
                      </div>

                      <div className="auth-block tab-order">
                        <div className="popup-add__auth-item">
                          <div className="login-popup__title-second auth-block__title-second">
                            <p data-translate="SIGNIN_TAB">Авторизація</p>
                            <p data-translate="SUBMIT_NUMBER_SUBTITLE">
                              Скористайтеся месенджером або смс
                            </p>
                          </div>
                        </div>
                        <div className="login-popup__tel-auth auth-parent auth-block__tel-auth">
                          <div className="tel-auth-wrapper login-popup__tel-auth-wrapper auth-block__tel-auth-wrapper">
                            <div className="tab-order__row">
                              <a
                                href="https://google.com"
                                className="login-popup__social login-popup__social_telegram auth-block__social auth-block__social_telegram"
                              >
                                <div className="login-popup__icon">
                                  <picture>
                                    <source
                                      srcSet="/static/img/main/icon-telegram.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      src="/static/img/main/icon-telegram.png"
                                      alt="Telegram"
                                    />
                                  </picture>
                                </div>
                                <span data-translate="SIGNIN_TELEGRAM">
                                  Telegram
                                </span>
                              </a>
                              <a
                                href="https://google.com"
                                className="login-popup__social login-popup__social_viber auth-block__social auth-block__social_viber"
                              >
                                <div className="login-popup__icon">
                                  <picture>
                                    <source
                                      srcSet="/static/img/main/icon-viber.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      src="/static/img/main/icon-viber.png"
                                      alt="viber"
                                    />
                                  </picture>
                                </div>
                                <span data-translate="SIGNIN_VIBER">Viber</span>
                              </a>
                              <div className="login-popup__social-wrapper auth-block__social-wrapper">
                                <p data-translate="OLD_METHOD_SMS">
                                  Застарілий метод
                                </p>
                                <button
                                  type="button"
                                  className="tel-auth-trigger login-popup__social auth-block__social"
                                >
                                  <span data-translate="GET_CODE_BY_SMS">
                                    SMS
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="login-popup__tel-input auth-block__tel-input">
                              <div className="_form-error">
                                <input
                                  data-validate=""
                                  type="tel"
                                  name="tel"
                                  className="phone-mask tel-auth-input"
                                  placeholder="+__ ___ ___ ____"
                                  inputMode="text"
                                />
                              </div>
                              <button
                                type="button"
                                className="tel-auth-tel-confirm btn btn-c"
                                data-translate="CONFIRM_BUTTON"
                              >
                                Підтвердити
                              </button>
                            </div>
                            <div className="auth-success-message">
                              <span data-translate="SUCCESS_AUTH">
                                Успішна авторизація!
                              </span>
                            </div>
                            <div className="login-popup__code auth-block__code">
                              <div className="successfully__sms">
                                <p
                                  className="login-popup__code-title auth-block__code-title"
                                  data-translate="SEND_CODE_LABEL"
                                >
                                  Будь ласка, введіть код із SMS-повідомлення:
                                </p>
                                <input
                                  type="tel"
                                  className="tel-auth-code-input successfully__sms-code"
                                  placeholder="_ _ _ _"
                                />
                                <button
                                  type="button"
                                  className="tel-auth-code-confirm successfully__button btn btn-c"
                                  data-translate="CONFIRM_BUTTON"
                                >
                                  Підтвердити
                                </button>
                                <div className="login-popup__tel-info auth-block__tel-info">
                                  <p className="login-popup__tel-number auth-block__tel-number">
                                    <span data-translate="WE_SENT">
                                      Ми надіслали код на
                                    </span>
                                    <span className="auth-current-tel" />
                                  </p>
                                  <div className="login-popup__auth-result auth-block__auth-result">
                                    <div className="auth-error-message">
                                      <span data-translate="AUTH_ERROR">
                                        Помилка авторизіції!
                                      </span>
                                    </div>
                                  </div>
                                  <p className="login-popup__repeat auth-block__repeat">
                                    <span data-translate="REPEAT_CODE_MESSAGE">
                                      Повторний запрос коду в СМС через
                                    </span>
                                    <span className="get-code-timer">
                                      01:59
                                    </span>
                                    <span data-translate="SEC">сек</span>
                                  </p>
                                  <button
                                    className="auth-code-again"
                                    type="button"
                                    data-translate="REPEAT_SEND_CODE"
                                  >
                                    Відправити ще раз
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p
                        className="order-error-info"
                        data-translate="ORDER_ERROR_MESSAGE"
                      >
                        Будь ласка, заповніть усі поля й авторизуйтеся.
                      </p>

                      <button
                        data-popup="#popup"
                        type="submit"
                        className="tabs__button btn btn-c order-button"
                        data-translate="GET_ORDER_BUTTON"
                      >
                        Замовити
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="main__image">
                <img
                  src="/static/img/main/main-background.svg"
                  alt="Main background"
                  className="main__bg light-theme"
                />
                <img
                  src="/static/img/main/main-background-mobile.svg"
                  alt="Main background"
                  className="main__bg-mob light-theme"
                />
                <img
                  src="/static/img/main/main-background-dark-theme.svg"
                  alt="Main background"
                  className="main__bg dark-theme"
                />
                <img
                  src="/static/img/main/main-background-mobile-dark-theme.svg"
                  alt="Main background"
                  className="main__bg-mob dark-theme"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <div className="map__container">
            <h3 className="map__title" data-translate="EQUIPMENT_ON_MAP">
              ТЕХНІКА НА МАПІ
            </h3>
            <div data-tabs className="map__tabs tabs">
              <nav data-tabs-titles className="tabs__navigation">
                <button
                  type="button"
                  className="map__tabs-title tabs__title _tab-active f16"
                  data-translate="ALL_EQUIPMENT_ON_MAP"
                >
                  Вся техніка на МАПІ
                </button>
                <button
                  type="button"
                  className="map__tabs-title tabs__title f16"
                  data-translate="ALL_ORDERS_ON_MAP"
                >
                  Всі заявки на МАПІ
                </button>
              </nav>
              <div data-tabs-body className="tabs__content map__content">
                <div className="tabs__body tabs__body-map">
                  <div id="map_container" className="map__wrapper">
                    <div className="map__image">
                      <picture>
                        <source
                          srcSet="/static/img/main/map-background.webp"
                          type="image/webp"
                        />
                        <img
                          src="/static/img/main/map-background.png"
                          alt="Карта"
                        />
                      </picture>
                    </div>
                    <div id="map" className="map__iframe">
                      <div id="map__button" className="map__button-wrap">
                        <button
                          id="load_map_button"
                          className="map__button btn btn-w"
                          data-translate="MAPACTION_BUTTON"
                        >
                          Взаємодіяти
                        </button>
                      </div>
                    </div>
                    <div className="map__info-wrapper">
                      <div className="map__info-content info-content">
                        <div className="info-content__wrapp">
                          <div className="info-content__body-title">
                            <div className="info-content__title">
                              <span data-translate="RENT">Аренда</span>
                              бульдозеры
                            </div>
                            <div className="info-content__title-text">
                              г. Яготин
                            </div>
                          </div>
                          <button
                            data-da=".info-content,991.98,4"
                            type="submit"
                            className="info-content__button"
                          >
                            <span className="btn-close">
                              <span />
                            </span>
                          </button>
                        </div>
                        <div className="info-content__wrapper">
                          <div className="info-content__image">
                            <picture>
                              <source
                                srcSet="/static/img/catalog/catalog_img-01.webp"
                                type="image/webp"
                              />
                              <img
                                className="info-content__img"
                                src="/static/img/catalog/catalog_img-01.png"
                                alt=""
                              />
                            </picture>
                          </div>
                          <div className="info-content__main">
                            <div className="info-content__header">
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-type">
                                  Тип
                                </div>
                                <div className="info-content__descr-type">
                                  Автовышки
                                </div>
                              </div>
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-brand">
                                  Марка
                                </div>
                                <div className="info-content__descr-brand">
                                  Автовышки
                                </div>
                              </div>
                            </div>
                            <div className="info-content__footer">
                              <div className="info-content__text info-content__text-1">
                                Грузоподъемность - 100 тонн
                              </div>
                              <div className="info-content__text info-content__text-2">
                                Вылет стрелы - 25 метров
                              </div>
                              <div className="info-content__text info-content__text-3">
                                Тип проходимости - колесный
                              </div>
                              <div className="info-content__text info-content__text-4">
                                Длина гуська - 3 метра
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="info-content__price">
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-hour btn"
                          >
                            800 грн./ час
                          </button>
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-day btn"
                          >
                            6800 грн./ смена
                          </button>
                          <a
                            href="#"
                            target="_blank"
                            className="info-content__button-price info-content__button-order btn btn-c"
                            data-translate="GET_ORDER_BUTTON"
                          >
                            Заказать
                          </a>
                        </div>
                      </div>
                      <div className="map__info-content info-content">
                        <div className="info-content__wrapp">
                          <div className="info-content__body-title">
                            <div className="info-content__title">
                              <span data-translate="RENT">Аренда</span>
                              бульдозеры
                            </div>
                            <div className="info-content__title-text">
                              г. Яготин1
                            </div>
                          </div>
                          <button
                            data-da=".info-content,991.98,4"
                            type="submit"
                            className="info-content__button"
                          >
                            <span className="btn-close">
                              <span />
                            </span>
                          </button>
                        </div>
                        <div className="info-content__wrapper">
                          <div className="info-content__image">
                            <picture>
                              <source
                                srcSet="/static/img/catalog/catalog_img-01.webp"
                                type="image/webp"
                              />
                              <img
                                className="info-content__img"
                                src="/static/img/catalog/catalog_img-01.png"
                                alt=""
                              />
                            </picture>
                          </div>
                          <div className="info-content__main">
                            <div className="info-content__header">
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-type">
                                  Тип
                                </div>
                                <div className="info-content__descr-type">
                                  Автовышки1
                                </div>
                              </div>
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-brand">
                                  Марка
                                </div>
                                <div className="info-content__descr-brand">
                                  Автовышки1
                                </div>
                              </div>
                            </div>
                            <div className="info-content__footer">
                              <div className="info-content__text info-content__text-1">
                                Грузоподъемность - 10 тонн
                              </div>
                              <div className="info-content__text info-content__text-2">
                                Вылет стрелы - 2 метров
                              </div>
                              <div className="info-content__text info-content__text-3">
                                Тип проходимости - колесный
                              </div>
                              <div className="info-content__text info-content__text-4">
                                Длина гуська - 2 метра
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="info-content__price">
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-hour btn"
                          >
                            700 грн./ час
                          </button>
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-day btn"
                          >
                            7800 грн./ смена
                          </button>
                          <a
                            href="#"
                            target="_blank"
                            className="info-content__button-price info-content__button-order btn btn-c"
                            data-translate="GET_ORDER_BUTTON"
                          >
                            Заказать
                          </a>
                        </div>
                      </div>
                      <div className="map__info-content info-content">
                        <div className="info-content__wrapp">
                          <div className="info-content__body-title">
                            <div className="info-content__title">
                              <span data-translate="RENT">Аренда</span>
                              бульдозеры
                            </div>
                            <div className="info-content__title-text">
                              г. Яготин2
                            </div>
                          </div>
                          <button
                            data-da=".info-content,991.98,4"
                            type="submit"
                            className="info-content__button"
                          >
                            <span className="btn-close">
                              <span />
                            </span>
                          </button>
                        </div>
                        <div className="info-content__wrapper">
                          <div className="info-content__image">
                            <picture>
                              <source
                                srcSet="/static/img/catalog/catalog_img-01.webp"
                                type="image/webp"
                              />
                              <img
                                className="info-content__img"
                                src="/static/img/catalog/catalog_img-01.png"
                                alt=""
                              />
                            </picture>
                          </div>
                          <div className="info-content__main">
                            <div className="info-content__header">
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-type">
                                  Тип
                                </div>
                                <div className="info-content__descr-type">
                                  Автовышки2
                                </div>
                              </div>
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-brand">
                                  Марка
                                </div>
                                <div className="info-content__descr-brand">
                                  Автовышки2
                                </div>
                              </div>
                            </div>
                            <div className="info-content__footer">
                              <div className="info-content__text info-content__text-1">
                                Грузоподъемность - 1020 тонн
                              </div>
                              <div className="info-content__text info-content__text-2">
                                Вылет стрелы - 225 метров
                              </div>
                              <div className="info-content__text info-content__text-3">
                                Тип проходимости - колесный
                              </div>
                              <div className="info-content__text info-content__text-4">
                                Длина гуська - 32 метра
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="info-content__price">
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-hour btn"
                          >
                            80 грн./ час
                          </button>
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-day btn"
                          >
                            650 грн./ смена
                          </button>
                          <a
                            href="#"
                            target="_blank"
                            className="info-content__button-price info-content__button-order btn btn-c"
                            data-translate="GET_ORDER_BUTTON"
                          >
                            Заказать
                          </a>
                        </div>
                      </div>
                      <div className="map__info-content info-content">
                        <div className="info-content__wrapp">
                          <div className="info-content__body-title">
                            <div className="info-content__title">
                              <span data-translate="RENT">Аренда</span>
                              бульдозеры
                            </div>
                            <div className="info-content__title-text">
                              г. Яготин3
                            </div>
                          </div>
                          <button
                            data-da=".info-content,991.98,4"
                            type="submit"
                            className="info-content__button"
                          >
                            <span className="btn-close">
                              <span />
                            </span>
                          </button>
                        </div>
                        <div className="info-content__wrapper">
                          <div className="info-content__image">
                            <picture>
                              <source
                                srcSet="/static/img/catalog/catalog_img-01.webp"
                                type="image/webp"
                              />
                              <img
                                className="info-content__img"
                                src="/static/img/catalog/catalog_img-01.png"
                                alt=""
                              />
                            </picture>
                          </div>
                          <div className="info-content__main">
                            <div className="info-content__header">
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-type">
                                  Тип
                                </div>
                                <div className="info-content__descr-type">
                                  Автовышки3
                                </div>
                              </div>
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-brand">
                                  Марка
                                </div>
                                <div className="info-content__descr-brand">
                                  Автовышки3
                                </div>
                              </div>
                            </div>
                            <div className="info-content__footer">
                              <div className="info-content__text info-content__text-1">
                                Грузоподъемность - 1030 тонн
                              </div>
                              <div className="info-content__text info-content__text-2">
                                Вылет стрелы - 253 метров
                              </div>
                              <div className="info-content__text info-content__text-3">
                                Тип проходимости - колесный
                              </div>
                              <div className="info-content__text info-content__text-4">
                                Длина гуська - 33 метра
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="info-content__price">
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-hour btn"
                          >
                            803 грн./ час
                          </button>
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-day btn"
                          >
                            6803 грн./ смена
                          </button>
                          <a
                            href="#"
                            target="_blank"
                            className="info-content__button-price info-content__button-order btn btn-c"
                            data-translate="GET_ORDER_BUTTON"
                          >
                            Заказать
                          </a>
                        </div>
                      </div>
                      <div className="map__info-content info-content">
                        <div className="info-content__wrapp">
                          <div className="info-content__body-title">
                            <div className="info-content__title">
                              <span data-translate="RENT">Аренда</span>
                              бульдозеры
                            </div>
                            <div className="info-content__title-text">
                              г. Яготин4
                            </div>
                          </div>
                          <button
                            data-da=".info-content,991.98,4"
                            type="submit"
                            className="info-content__button"
                          >
                            <span className="btn-close">
                              <span />
                            </span>
                          </button>
                        </div>
                        <div className="info-content__wrapper">
                          <div className="info-content__image">
                            <picture>
                              <source
                                srcSet="/static/img/catalog/catalog_img-01.webp"
                                type="image/webp"
                              />
                              <img
                                className="info-content__img"
                                src="/static/img/catalog/catalog_img-01.png"
                                alt=""
                              />
                            </picture>
                          </div>
                          <div className="info-content__main">
                            <div className="info-content__header">
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-type">
                                  Тип
                                </div>
                                <div className="info-content__descr-type">
                                  Автовышки4
                                </div>
                              </div>
                              <div className="info-content__row">
                                <div className="info-content__name info-content__name-brand">
                                  Марка
                                </div>
                                <div className="info-content__descr-brand">
                                  Автовышки4
                                </div>
                              </div>
                            </div>
                            <div className="info-content__footer">
                              <div className="info-content__text info-content__text-1">
                                Грузоподъемность - 400 тонн
                              </div>
                              <div className="info-content__text info-content__text-2">
                                Вылет стрелы - 24 метров
                              </div>
                              <div className="info-content__text info-content__text-3">
                                Тип проходимости - колесный
                              </div>
                              <div className="info-content__text info-content__text-4">
                                Длина гуська - 4 метра
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="info-content__price">
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-hour btn"
                          >
                            804 грн./ час
                          </button>
                          <button
                            type="submit"
                            className="info-content__button-price info-content__button-day btn"
                          >
                            6804 грн./ смена
                          </button>
                          <a
                            href="#"
                            target="_blank"
                            className="info-content__button-price info-content__button-order btn btn-c"
                            data-translate="GET_ORDER_BUTTON"
                          >
                            Заказать
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs__body tabs__body-map">
                  <p className="tabs__text">Содержимое второго таба</p>
                </div>
              </div>
              <form
                className="tabs__search-map"
                data-da=".tabs__body-map,991.98,0"
              >
                <div
                  data-dropdown
                  className="tabs__search-dropdown tabs__dropdown dropdown"
                >
                  <button
                    type="button"
                    data-dropdown-button
                    className="tabs__dropdown-search tabs__dropdown-button dropdown__button _icon-arrow-1"
                    data-value=""
                    data-translate="CHOOSE_CATEGORY_PLACEHOLDER"
                  >
                    Виберіть категорію
                  </button>
                  <div data-dropdown-list className="tabs__list dropdown__list">
                    <div className="category-header__wrapper">
                      <div className="category-header__items">
                        <h6 className="category-header__title _icon-excavator">
                          Землеройная техника
                        </h6>
                        <ul className="category-header__list">
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="1"
                          >
                            Самосвалы
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="2"
                          >
                            Экскаваторы
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="3"
                          >
                            Экскаваторы-погрузчики
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="4"
                          >
                            Мини-экскаваторы
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="5"
                          >
                            Бульдозеры
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="6"
                          >
                            Фронтальные погрузчики
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="7"
                          >
                            Мини-погрузчики
                          </li>
                        </ul>
                      </div>
                      <div className="category-header__items">
                        <h6 className="category-header__title _icon-crane_truck">
                          Краны и погрузочно-разгрузочная техника
                        </h6>
                        <ul className="category-header__list">
                          <li className="category-header__item" />
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="8"
                          >
                            Автокраны
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="9"
                          >
                            Телескопические погрузчики
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="10"
                          >
                            Вилочные погрузчики
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="11"
                          >
                            Погрузчики-манипуляторы
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="12"
                          >
                            Автовышки
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="13"
                          >
                            Гусеничные краны
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="14"
                          >
                            Складская техника
                          </li>
                        </ul>
                      </div>
                      <div className="category-header__items">
                        <h6 className="category-header__title _icon-bulldozers">
                          Бетон & Дорожностроительная техника
                        </h6>
                        <ul className="category-header__list">
                          <li className="category-header__item" />
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="15"
                          >
                            Экскаваторы
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="16"
                          >
                            Бульдозеры
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="17"
                          >
                            Дорожные катки и асфальтоукладчики
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="18"
                          >
                            Буровая и сваебойная техника
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="19"
                          >
                            Грейдеры
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="20"
                          >
                            Бетоносмесители (Бетоновозы и цементовозы)
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="21"
                          >
                            Бетононасосы
                          </li>
                        </ul>
                      </div>
                      <div className="category-header__items">
                        <h6 className="category-header__title _icon-truck-1">
                          Коммунально-дорожные машины & Другая техника
                        </h6>
                        <ul className="category-header__list">
                          <li className="category-header__item" />
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="22"
                          >
                            Автоцистерны
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="23"
                          >
                            Мусоровозы
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="24"
                          >
                            Эвакуаторы
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="25"
                          >
                            Коммунально-дорожные машины
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="26"
                          >
                            Прицепы и полуприцепы (16 Тралы и низкорамные
                            платформы)
                          </li>
                          <li
                            className="dropdown__item"
                            data-dropdown-item
                            data-value="27"
                          >
                            Другая техника (башенные краны)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="search-map"
                    value=""
                    data-dropdown-input
                    className="dropdown__input-hidden"
                  />
                </div>
                <button
                  type="submit"
                  className="tabs__search-button btn btn-c"
                  data-translate="SEARCH_BUTTON"
                >
                  Шукати
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="technique">
          <div className="technique__container">
            <div className="technique__wrapper">
              <div className="technique__content">
                <h2
                  className="technique__title"
                  data-translate="EQUIPMENT_MAIN_TITLE"
                >
                  Техніка повинна працювати
                </h2>
                <div className="technique__row">
                  <div className="technique__item">
                    <div className="technique__icon">
                      <img src="/static/img/main/arrow.svg" alt="" />
                    </div>
                    <p
                      className="technique__text"
                      data-translate="EQUIPMENT_ITEM_1"
                    >
                      Отримуйте вигідні замовлення для вашої техніки вже
                      сьогодні
                    </p>
                  </div>
                  <div className="technique__item">
                    <div className="technique__icon">
                      <img src="/static/img/main/arrow.svg" alt="" />
                    </div>
                    <p
                      className="technique__text"
                      data-translate="EQUIPMENT_ITEM_2"
                    >
                      Безкоштовна реєстрація в 2 кроки
                    </p>
                  </div>
                </div>
                <a
                  href="https://google.com"
                  className="technique__button btn btn-w"
                  data-da=".technique__image,767.98,2"
                  data-translate="EQUIPMENT_BUTTON"
                >
                  Підключити техніку
                </a>
              </div>
              <div className="technique__image">
                <img
                  src="/static/img/main/banner.svg"
                  alt=""
                  className="technique__light-theme"
                />
                <img
                  src="/static/img/main/banner-dark-theme.svg"
                  alt=""
                  className="technique__dark-theme"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="catalog-section">
          <div className="catalog-section__container">
            <div data-tabs className="catalog-section__tabs tabs">
              <nav data-tabs-titles className="tabs__navigation">
                <button
                  type="button"
                  className="catalog-section__title tabs__title _tab-active f16"
                >
                  <span className="_icon-truck-2" />
                  <span data-translate="EQUIPMENT_CATALOG_TAB">
                    Каталог техніки
                  </span>
                </button>
                <button
                  type="button"
                  className="catalog-section__title tabs__title f16"
                >
                  <span className="_icon-time_works" />
                  <span data-translate="EQUIPMENT_ORDER_TAB">Заявки</span>
                </button>
              </nav>
              <div data-tabs-body className="tabs__content">
                <div className="tabs__body tabs__body-filter">
                  <div className="catalog-section__filter filter">
                    <button
                      className="open-filter filter__text _icon-filter"
                      data-translate="EQUIPMENT_FILTER"
                    >
                      Фільтри
                    </button>
                    <div
                      data-da=".sidebar__header,991.98,0"
                      className="filter__header filter__text _icon-filter"
                      data-translate="EQUIPMENT_FILTER"
                    >
                      Фільтри
                    </div>
                    <div className="filter__block-search">
                      <div className="filter__grid" id="filter__grid">
                        <button
                          type="submit"
                          id="grid-rows"
                          className="filter__grid-button _icon-rows"
                        />
                        <button
                          type="submit"
                          id="grid-columns"
                          className="filter__grid-button active _icon-columns"
                        />
                      </div>
                      <div
                        data-da=".filter,767.98,0"
                        className="filter__form-search"
                      >
                        <input
                          type="text"
                          name="search"
                          placeholder="Что найти?"
                          data-translate="SEARCH_EQUIPMENT_PLACEHOLDER"
                          className="filter__search"
                        />
                        <button
                          type="submit"
                          className="filter__button-search btn btn-c"
                          data-translate="SEARCH_BUTTON"
                        >
                          SEARCH_BUTTON
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__items-container sidebar__items-container_aside">
                    <div className="sidebar__selected-items" />
                    <button className="" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="catalog-section__wrap">
                    <form className="filter__column sidebar">
                      <div className="sidebar__header">
                        <button className="sidebar__close" type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="sidebar__items-container">
                        <div className="sidebar__selected-items" />
                        <button className="" type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="sidebar__groups">
                        <div className="sidebar__group">
                          <h2 className="sidebar__subtitle">Регіон</h2>
                          <ul className="sidebar__list">
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Регіон1
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (12)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Регіон2
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (12)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Регіон3
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (12)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Регіон4
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (12)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Регіон5
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (12)
                                  </span>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="sidebar__group">
                          <h2 className="sidebar__subtitle _icon-excavator">
                            Землеройная техника
                          </h2>
                          <ul className="sidebar__list">
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Самосвалы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (4)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Экскаваторы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (2)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Экскаваторы-погрузчики
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (16)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Мини-экскаваторы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (6)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Бульдозеры
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (8)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Фронтальные погрузчики
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (11)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Мини-погрузчики
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (2)
                                  </span>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="sidebar__group">
                          <h2 className="sidebar__subtitle _icon-crane_truck">
                            Краны и погрузочно-разгрузочная техника
                          </h2>
                          <ul className="sidebar__list">
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Автокраны
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (23)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Телескопические погрузчики
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (23)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Вилочные погрузчики
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (23)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Погрузчики-манипуляторы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (23)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Автовышки
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (23)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Гусеничные краны
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (23)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Складская техника
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (23)
                                  </span>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="sidebar__group">
                          <h2 className="sidebar__subtitle _icon-bulldozers">
                            Бетон & Дорожностроительная техника
                          </h2>
                          <ul className="sidebar__list">
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Экскаваторы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (17)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Бульдозеры
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (17)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Дорожные катки и асфальтоукладчики
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (17)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Буровая и сваебойная техника
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (17)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Грейдеры
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (17)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Бетоносмесители (Бетоновозы и цементовозы){' '}
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (17)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Бетононасосы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (17)
                                  </span>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="sidebar__group">
                          <h2 className="sidebar__subtitle _icon-truck-1">
                            Коммунально-дорожные машины & Другая техника
                          </h2>
                          <ul className="sidebar__list">
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Автоцистерны
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (9)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Мусоровозы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (9)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Эвакуаторы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (9)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Коммунально-дорожные машины
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (9)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Прицепы и полуприцепы (16 Тралы и
                                    низкорамные платформы)
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (9)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Другая техника (башенные краны){' '}
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (9)
                                  </span>
                                </span>
                              </label>
                            </li>
                            <li className="sidebar__item">
                              <label>
                                <input type="checkbox" />
                                <span>
                                  <span className="sidebar__item-text">
                                    Бетононасосы
                                  </span>
                                  <span className="sidebar__item-quantity">
                                    (9)
                                  </span>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter__price price">
                        <div className="price__row">
                          <div
                            className="price__text"
                            data-translate="PRICE_LABEL"
                          >
                            Ціна
                          </div>
                        </div>
                        <div className="price__range range">
                          <div
                            id="sliderPrice"
                            className="range__slider-price"
                            data-min="0"
                            data-max="10000"
                            data-step="5"
                          />
                          <div className="range__inputs">
                            <label className="range__label">
                              <input type="text" className="range__input" />
                              <span
                                className="range__text"
                                data-translate="FROM"
                              >
                                від
                              </span>
                            </label>
                            <label className="range__label">
                              <input type="text" className="range__input" />
                              <span className="range__text" data-translate="TO">
                                до
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="filter__show btn btn-c"
                        data-translate="SHOW_BUTTON"
                      >
                        Показати
                      </button>
                      <button type="button" className="filter__reset">
                        <span className="filter__icon-wrap">
                          <span className="filter__icon">
                            <span />
                            <span />
                          </span>
                        </span>
                        <span data-translate="RESET_FILTERS">
                          Скинути всі фільтри
                        </span>
                      </button>
                    </form>

                    <div className="catalog-section__layout">
                      <div className="catalog-section__sort sort-section">
                        <div
                          className="sort-section__title"
                          data-translate="PHOTO_LABEL"
                        >
                          Фото
                        </div>
                        <div className="sort-section__name">
                          <span data-translate="TYPE_LABEL">Тип</span>
                          <button
                            type="submit"
                            className="sort-section__button _icon-arrow-6"
                          />
                        </div>
                        <div
                          className="sort-section__name"
                          data-translate="BRAND_LABEL"
                        >
                          Марка
                        </div>
                        <div className="sort-section__name">
                          <span data-translate="REGION_LABEL">Регіон</span>
                          <button
                            type="submit"
                            className="sort-section__button _icon-arrow-6"
                          />
                        </div>
                        <div
                          className="sort-section__characteristics"
                          data-translate="CHARACTERISTICS_LABEL"
                        >
                          Характеристики
                        </div>
                        <div className="sort-section__name-cost">
                          <span data-translate="PRICE_LABEL">Ціна</span>
                          <button
                            type="submit"
                            className="sort-section__button _icon-arrow-6"
                          />
                        </div>
                      </div>
                      <div
                        data-da=".sort-section,991.98,1"
                        className="sort-section__name-mob"
                        data-translate="FULL_LABELS"
                      >
                        Тип, Марка, Регіон, Характеристики
                      </div>
                      <div className="catalog-section__block">
                        <div className="catalog-section__wrapper">
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регион
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регион
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регіон
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регион
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регион
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регион
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регион
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="product.html"
                            className="catalog-section__items"
                          >
                            <div className="catalog-section__image-ibg">
                              <picture>
                                <source
                                  srcSet="/static/img/catalog/catalog_img-01.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="/static/img/catalog/catalog_img-01.png"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="catalog-section__content">
                              <div className="catalog-section__main">
                                <div className="catalog-section__header">
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="TYPE_LABEL"
                                    >
                                      Тип
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="BRAND_LABEL"
                                    >
                                      Марка
                                    </div>
                                    <div className="catalog-section__descr">
                                      Автовышки
                                    </div>
                                  </div>
                                  <div className="catalog-section__row">
                                    <div
                                      className="catalog-section__name"
                                      data-translate="REGION_LABEL"
                                    >
                                      Регион
                                    </div>
                                    <div className="catalog-section__descr">
                                      г. Яготин
                                    </div>
                                  </div>
                                </div>
                                <div className="catalog-section__footer">
                                  <div className="catalog-section__text">
                                    Грузоподъемность - 100 тонн
                                  </div>
                                  <div className="catalog-section__text">
                                    Вылет стрелы - 25 метров
                                  </div>
                                  <div className="catalog-section__text">
                                    Тип проходимости - колесный
                                  </div>
                                  <div className="catalog-section__text">
                                    Длина гуська - 3 метра
                                  </div>
                                </div>
                              </div>
                              <div className="catalog-section__bottom">
                                <div className="catalog-section__price">
                                  8000 грн
                                </div>
                                <div
                                  className="catalog-section__button btn btn-c _icon-arrow-2"
                                  data-translate="TO_TARGET_BUTTON"
                                >
                                  Перейти
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs__body orders rows">
                  <div className="orders__filter filter-orders">
                    <div
                      data-dropdown
                      className="filter-orders__dropdown dropdown"
                    >
                      <button
                        type="button"
                        data-dropdown-button
                        className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                        data-value="1"
                        data-translate="REGION_LABEL"
                      >
                        Регіон
                      </button>
                      <ul
                        data-dropdown-list
                        className="tabs__list dropdown__list"
                      >
                        <li
                          data-dropdown-item
                          data-value="1"
                          className="dropdown__item"
                          data-translate="REG_PL_PL"
                        >
                          Польща
                        </li>
                        <li
                          data-dropdown-item
                          data-value="2"
                          className="dropdown__item"
                          data-translate="REG_UK_UA"
                        >
                          Україна
                        </li>
                      </ul>
                      <input
                        type="text"
                        name="orders-location"
                        value=""
                        data-dropdown-input
                        className="dropdown__input-hidden"
                      />
                    </div>
                    <div
                      data-dropdown
                      className="filter-orders__dropdown dropdown"
                    >
                      <button
                        type="button"
                        data-dropdown-button
                        className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                        data-value=""
                        data-translate="CHOOSE_CATEGORY"
                      >
                        Виберіть категорію
                      </button>
                      <div
                        data-dropdown-list
                        className="tabs__list dropdown__list"
                      >
                        <div className="category-header__wrapper">
                          <div className="category-header__items">
                            <ul className="category-header__list">
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="0"
                                data-translate="ALL_EQUIPMENT"
                              >
                                Вся техніка
                              </li>
                            </ul>
                            <h6 className="category-header__title _icon-excavator">
                              Землеройная техника
                            </h6>
                            <ul className="category-header__list">
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="1"
                              >
                                Самосвалы
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="2"
                              >
                                Экскаваторы
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="3"
                              >
                                Экскаваторы-погрузчики
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="4"
                              >
                                Мини-экскаваторы
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="5"
                              >
                                Бульдозеры
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="6"
                              >
                                Фронтальные погрузчики
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="7"
                              >
                                Мини-погрузчики
                              </li>
                            </ul>
                          </div>
                          <div className="category-header__items">
                            <h6 className="category-header__title _icon-crane_truck">
                              Краны и погрузочно-разгрузочная техника
                            </h6>
                            <ul className="category-header__list">
                              <li className="category-header__item" />
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="8"
                              >
                                Автокраны
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="9"
                              >
                                Телескопические погрузчики
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="10"
                              >
                                Вилочные погрузчики
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="11"
                              >
                                Погрузчики-манипуляторы
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="12"
                              >
                                Автовышки
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="13"
                              >
                                Гусеничные краны
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="14"
                              >
                                Складская техника
                              </li>
                            </ul>
                          </div>
                          <div className="category-header__items">
                            <h6 className="category-header__title _icon-bulldozers">
                              Бетон & Дорожностроительная техника
                            </h6>
                            <ul className="category-header__list">
                              <li className="category-header__item" />
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="15"
                              >
                                Экскаваторы
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="16"
                              >
                                Бульдозеры
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="17"
                              >
                                Дорожные катки и асфальтоукладчики
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="18"
                              >
                                Буровая и сваебойная техника
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="19"
                              >
                                Грейдеры
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="20"
                              >
                                Бетоносмесители (Бетоновозы и цементовозы)
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="21"
                              >
                                Бетононасосы
                              </li>
                            </ul>
                          </div>
                          <div className="category-header__items">
                            <h6 className="category-header__title _icon-truck-1">
                              Коммунально-дорожные машины & Другая техника
                            </h6>
                            <ul className="category-header__list">
                              <li className="category-header__item" />
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="22"
                              >
                                Автоцистерны
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="23"
                              >
                                Мусоровозы
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="24"
                              >
                                Эвакуаторы
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="25"
                              >
                                Коммунально-дорожные машины
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="26"
                              >
                                Прицепы и полуприцепы (16 Тралы и низкорамные
                                платформы)
                              </li>
                              <li
                                className="dropdown__item"
                                data-dropdown-item
                                data-value="27"
                              >
                                Другая техника (башенные краны)
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <input
                        type="text"
                        id="orders-category"
                        name="select-category"
                        value=""
                        data-dropdown-input
                        className="dropdown__input-hidden"
                      />
                    </div>
                    <div
                      data-dropdown
                      className="filter-orders__dropdown dropdown"
                    >
                      <button
                        type="button"
                        data-dropdown-button
                        className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                        data-value=""
                        data-translate="PAYMENT_LABEL"
                      >
                        Тип оплати
                      </button>
                      <ul
                        data-dropdown-list
                        className="tabs__list dropdown__list"
                      >
                        <li
                          data-dropdown-item
                          data-value="2"
                          className="dropdown__item"
                        >
                          Все типы оплаты
                        </li>
                        <li
                          data-dropdown-item
                          data-value="3"
                          className="dropdown__item"
                        >
                          Резервирование суммы на карте
                        </li>
                        <li
                          data-dropdown-item
                          data-value="4"
                          className="dropdown__item"
                        >
                          Безналичный расчет с НДС
                        </li>
                        <li
                          data-dropdown-item
                          data-value="1"
                          className="dropdown__item"
                        >
                          Безналичный расчет без НДС
                        </li>
                        <li
                          data-dropdown-item
                          data-value="1"
                          className="dropdown__item"
                        >
                          Наличный расчет
                        </li>
                      </ul>
                      <input
                        type="text"
                        name="orders-payment"
                        value=""
                        data-dropdown-input
                        className="dropdown__input-hidden"
                      />
                    </div>
                    <div
                      data-dropdown
                      className="filter-orders__dropdown dropdown"
                    >
                      <button
                        type="button"
                        data-dropdown-button
                        className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                        data-value=""
                        data-translate="STATUS_LABEL"
                      >
                        Статус
                      </button>
                      <ul
                        data-dropdown-list
                        className="tabs__list dropdown__list"
                      >
                        <li
                          data-dropdown-item
                          data-value="2"
                          className="dropdown__item"
                        >
                          Все статусы
                        </li>
                        <li
                          data-dropdown-item
                          data-value="3"
                          className="dropdown__item"
                        >
                          Все статусы
                        </li>
                        <li
                          data-dropdown-item
                          data-value="4"
                          className="dropdown__item"
                        >
                          Все статусы
                        </li>
                      </ul>
                      <input
                        type="text"
                        name="orders-status"
                        value=""
                        data-dropdown-input
                        className="dropdown__input-hidden"
                      />
                    </div>
                  </div>
                  <div className="orders__sort sort-orders">
                    <div className="sort-orders__row">
                      <div
                        className="sort-orders__name"
                        data-translate="EQUIPMENT_LABEL"
                      >
                        Техніка
                      </div>
                      <div
                        className="sort-orders__name"
                        data-translate="WORK_DESC_LABEL"
                      >
                        Опис робіт
                      </div>
                      <div
                        className="sort-orders__name"
                        data-translate="REGION_LABEL"
                      >
                        Регіон
                      </div>
                      <div className="sort-orders__name">
                        <span data-translate="DATE_LABEL">Дата</span>
                        <button
                          type="submit"
                          className="sort-section__button _icon-arrow-6"
                        />
                      </div>
                      <div
                        className="sort-orders__name"
                        data-translate="PAYMENT_SINGLE_LABEL"
                      >
                        Оплата
                      </div>
                      <div
                        className="sort-orders__name-cost"
                        data-translate="MAPACTION_BUTTON"
                      >
                        Взаємодіяти
                      </div>
                    </div>
                    <div
                      data-da=".sort-orders__row,991.98,0"
                      className="sort-orders__name-mob"
                      data-translate="FULL_LABELS_ORDERS"
                    >
                      Техніка, Опис рабіт, Регіон, Дата, Оплата
                    </div>
                    <div className="catalog-section__wrapper">
                      <a href="#" className="catalog-section__items">
                        <div className="catalog-section__content">
                          <div className="sort-orders__main">
                            <div className="sort-orders__text">Автовышки</div>
                            <div className="sort-orders__text">
                              Спилить ветки деревьев в селе по 3-м улицам,
                              покрасить заборы
                            </div>
                            <div className="sort-orders__text">г. Яготин</div>
                            <div className="sort-orders__text">18.02.2022</div>
                            <div className="sort-orders__text">
                              Наличный расчет
                            </div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">
                              8000 грн
                            </div>
                            <div
                              className="catalog-section__button btn btn-c _icon-arrow-2"
                              data-translate="TO_TARGET_BUTTON"
                            >
                              Перейти
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="catalog-section__items">
                        <div className="catalog-section__content">
                          <div className="sort-orders__main">
                            <div className="sort-orders__text">Автовышки</div>
                            <div className="sort-orders__text">
                              Спилить ветки деревьев в селе по 3-м улицам,
                              покрасить заборы
                            </div>
                            <div className="sort-orders__text">г. Яготин</div>
                            <div className="sort-orders__text">18.02.2022</div>
                            <div className="sort-orders__text">
                              Наличный расчет
                            </div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">
                              8000 грн
                            </div>
                            <div
                              className="catalog-section__button btn btn-c _icon-arrow-2"
                              data-translate="TO_TARGET_BUTTON"
                            >
                              Перейти
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="catalog-section__items">
                        <div className="catalog-section__content">
                          <div className="sort-orders__main">
                            <div className="sort-orders__text">Автовышки</div>
                            <div className="sort-orders__text">
                              Спилить ветки деревьев в селе по 3-м улицам,
                              покрасить заборы
                            </div>
                            <div className="sort-orders__text">г. Яготин</div>
                            <div className="sort-orders__text">18.02.2022</div>
                            <div className="sort-orders__text">
                              Наличный расчет
                            </div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">
                              8000 грн
                            </div>
                            <div
                              className="catalog-section__button btn btn-c _icon-arrow-2"
                              data-translate="TO_TARGET_BUTTON"
                            >
                              Перейти
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="catalog-section__items">
                        <div className="catalog-section__content">
                          <div className="sort-orders__main">
                            <div className="sort-orders__text">Автовышки</div>
                            <div className="sort-orders__text">
                              Спилить ветки деревьев в селе по 3-м улицам,
                              покрасить заборы
                            </div>
                            <div className="sort-orders__text">г. Яготин</div>
                            <div className="sort-orders__text">18.02.2022</div>
                            <div className="sort-orders__text">
                              Наличный расчет
                            </div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">
                              8000 грн
                            </div>
                            <div
                              className="catalog-section__button btn btn-c _icon-arrow-2"
                              data-translate="TO_TARGET_BUTTON"
                            >
                              Перейти
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="catalog-section__items">
                        <div className="catalog-section__content">
                          <div className="sort-orders__main">
                            <div className="sort-orders__text">Автовышки</div>
                            <div className="sort-orders__text">
                              Спилить ветки деревьев в селе по 3-м улицам,
                              покрасить заборы
                            </div>
                            <div className="sort-orders__text">г. Яготин</div>
                            <div className="sort-orders__text">18.02.2022</div>
                            <div className="sort-orders__text">
                              Наличный расчет
                            </div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">
                              8000 грн
                            </div>
                            <div
                              className="catalog-section__button btn btn-c _icon-arrow-2"
                              data-translate="TO_TARGET_BUTTON"
                            >
                              Перейти
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="orders__title f18">ЗАКАЗЫ</div>
                  <div className="orders__sort sort-orders">
                    <div className="sort-orders__row sort-orders__row-orders">
                      <div
                        className="sort-orders__name"
                        data-translate="ORDER_NUMBER_LABEL"
                      >
                        Номер замовлення
                      </div>
                      <div
                        className="sort-orders__name"
                        data-translate="DESC_LABEL"
                      >
                        Опис
                      </div>
                      <div
                        className="sort-orders__name"
                        data-translate="DATE_LABEL"
                      >
                        Дата
                      </div>
                      <div
                        className="sort-orders__name"
                        data-translate="PAYMENT_SINGLE_LABEL"
                      >
                        Оплата
                      </div>
                      <div
                        className="sort-orders__name-cost"
                        data-translate="ACTION_LABEL"
                      >
                        Взаємодіяти
                      </div>
                    </div>
                    <div
                      data-da=".sort-orders__row-orders,991.98,0"
                      className="sort-orders__name-mob"
                      data-translate="FULL_LABELS_ORDERS_NUMBER"
                    >
                      Номер замовлення, Опис робіт, Дата, Оплата
                    </div>
                    <div className="catalog-section__wrapper">
                      <a href="#" className="catalog-section__items">
                        <div className="catalog-section__content">
                          <div className="sort-orders__main">
                            <div className="sort-orders__text">101-07-ВН</div>
                            <div className="sort-orders__text">
                              Выкопать траншею
                            </div>
                            <div className="sort-orders__text">18.02.2022</div>
                            <div className="sort-orders__text">
                              Безналичный расчет с НДС
                            </div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">
                              8000 грн
                            </div>
                            <div
                              className="catalog-section__button btn btn-c _icon-arrow-2"
                              data-translate="TO_TARGET_BUTTON"
                            >
                              Перейти
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                data-micromodal-trigger="popup_add"
                data-da=".filter,767.98,1"
                className="catalog-section__button-add btn btn-c"
              >
                <span>+</span>
                <div data-translate="ADD_EQUIPMENT_BUTTON">Додати техніку</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomeContainer
