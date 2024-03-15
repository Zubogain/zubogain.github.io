import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { useTranslation } from 'next-i18next'

import { motion } from 'framer-motion'

const CatalogContainer = () => {
  const { t } = useTranslation(['home'])

  return (
    <>
      <Head>
        <title>{t('home:page-title')}</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          title: t('home:og.title'),
          description: t('home:og.description'),
        }}
      />
      {/* <motion.section
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
            <a href="#" className="side-button__link _icon-telegram"></a>
          </div>
        </div>
        <section className="breadcrumb">
          <div className="breadcrumb__container">
            <h2 className="breadcrumb__title" data-translate="ALL_EQUIPMENT">
              Вся спецтехніка
            </h2>
            <ul className="breadcrumb__list">
              <li>
                <a href="#" data-translate="LINK_MAIN">
                  Головна
                </a>
              </li>
              <li
                className="breadcrumb__active"
                data-translate="LINK_ALL_EQUIPMENT"
              >
                Вся спецтехніка
              </li>
            </ul>
          </div>
        </section>
        <section className="categories">
          <div className="categories__bg">
            <img
              src="/static/img/main/background.svg"
              alt=""
              className="categories__light-theme"
            />
            <img
              src="/static/img/main/background-dark-theme.svg"
              alt=""
              className="categories__dark-theme"
            />
          </div>
          <div className="categories__container">
            <div className="categories__popular">
              <h3 className="categories__title-top" data-translate="POPULAR_TITLE">
                Популярні
              </h3>
              <div className="categories__list">
                <a href="" className="categories__item">
                  <div className="categories__image">
                    <picture>
                      <source
                        srcSet="/static/img/categories/categories_img-01.webp"
                        type="image/webp"
                      />
                      <img src="/static/img/categories/categories_img-01.png" alt="" />
                    </picture>
                  </div>
                  <div className="categories__name">Автокраны</div>
                </a>
                <a href="" className="categories__item">
                  <div className="categories__image">
                    <picture>
                      <source
                        srcSet="/static/img/categories/categories_img-02.webp"
                        type="image/webp"
                      />
                      <img src="/static/img/categories/categories_img-02.png" alt="" />
                    </picture>
                  </div>
                  <div className="categories__name">Экскаваторы</div>
                </a>
                <a href="" className="categories__item">
                  <div className="categories__image">
                    <picture>
                      <source
                        srcSet="/static/img/categories/categories_img-03.webp"
                        type="image/webp"
                      />
                      <img src="/static/img/categories/categories_img-03.png" alt="" />
                    </picture>
                  </div>
                  <div className="categories__name">Самосвалы</div>
                </a>
                <a href="" className="categories__item">
                  <div className="categories__image">
                    <picture>
                      <source
                        srcSet="/static/img/categories/categories_img-04.webp"
                        type="image/webp"
                      />
                      <img src="/static/img/categories/categories_img-04.png" alt="" />
                    </picture>
                  </div>
                  <div className="categories__name">Автоцистерны</div>
                </a>
                <a href="" className="categories__item">
                  <div className="categories__image">
                    <picture>
                      <source
                        srcSet="/static/img/categories/categories_img-05.webp"
                        type="image/webp"
                      />
                      <img src="/static/img/categories/categories_img-05.png" alt="" />
                    </picture>
                  </div>
                  <div className="categories__name">Погрузчики-манипуляторы</div>
                </a>
                <a href="" className="categories__item">
                  <div className="categories__image">
                    <picture>
                      <source
                        srcSet="/static/img/categories/categories_img-06.webp"
                        type="image/webp"
                      />
                      <img src="/static/img/categories/categories_img-06.png" alt="" />
                    </picture>
                  </div>
                  <div className="categories__name">Экскаваторы-погрузчики</div>
                </a>
                <a href="" className="categories__item">
                  <div className="categories__image">
                    <picture>
                      <source
                        srcSet="/static/img/categories/categories_img-07.webp"
                        type="image/webp"
                      />
                      <img src="/static/img/categories/categories_img-07.png" alt="" />
                    </picture>
                  </div>
                  <div className="categories__name">Автовышки</div>
                </a>
                <a href="" className="categories__item">
                  <div className="categories__image">
                    <picture>
                      <source
                        srcSet="/static/img/categories/categories_img-08.webp"
                        type="image/webp"
                      />
                      <img src="/static/img/categories/categories_img-08.png" alt="" />
                    </picture>
                  </div>
                  <div className="categories__name">Вилочные погрузчики</div>
                </a>
              </div>
            </div>
            <h3 className="categories__title" data-translate="CATEGORIES_TITLE">
              Категорії
            </h3>
            <div
              data-spollers="991.98,max"
              data-one-spoller
              className="categories__wrapper"
            >
              <div className="categories__row">
                <h3
                  data-spoller
                  data-spoller-close
                  className="categories__title-top _icon-arrow-1"
                >
                  Землеройная техника
                </h3>
                <div className="categories__list-wrap">
                  <div className="categories__list">
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-03.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-03.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Самосвалы</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-02.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-02.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Экскаваторы</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-06.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-06.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Экскаваторы-погрузчики</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-09.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-09.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Мини-экскаваторы</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-10.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-10.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Бульдозеры</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-11.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-11.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Фронтальные погрузчики</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-12.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-12.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Мини-погрузчики</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="categories__row">
                <h3
                  data-spoller
                  data-spoller-close
                  className="categories__title-top _icon-arrow-1"
                >
                  Краны и погрузочно-разгрузочная техника
                </h3>
                <div className="categories__list-wrap">
                  <div className="categories__list">
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-01.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-01.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Автокраны</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-13.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-13.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">
                        Телескопические погрузчики
                      </div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-08.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-08.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Вилочные погрузчики</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-05.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-05.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">
                        Погрузчики-манипуляторы
                      </div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-07.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-07.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Автовышки</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-12.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-12.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Мини-погрузчики</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-15.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-15.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Гусеничные краны</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-16.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-16.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Складская техника</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="categories__row">
                <h3
                  data-spoller
                  data-spoller-close
                  className="categories__title-top _icon-arrow-1"
                >
                  Бетон & Дорожностроительная техника
                </h3>
                <div className="categories__list-wrap">
                  <div className="categories__list">
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-02.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-02.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Экскаваторы</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-10.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-10.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Бульдозеры</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-17.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-17.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">
                        Дорожные катки и асфальтоукладчики
                      </div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-18.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-18.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">
                        Буровая и сваебойная техника
                      </div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-19.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-19.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Грейдеры</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-20.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-20.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">
                        Бетоносмесители (Бетоновозы и цементовозы)
                      </div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-21.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-21.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Бетононасосы</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="categories__row">
                <h3
                  data-spoller
                  data-spoller-close
                  className="categories__title-top _icon-arrow-1"
                >
                  Коммунально-дорожные машины & Другая техника
                </h3>
                <div className="categories__list-wrap">
                  <div className="categories__list">
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-04.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-04.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Автоцистерны</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-22.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-22.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Мусоровозы</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-23.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-23.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">Эвакуаторы</div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-24.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-24.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">
                        Коммунально-дорожные машины
                      </div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-25.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-25.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">
                        Прицепы и полуприцепы (16 Тралы и низкорамные платформы)
                      </div>
                    </a>
                    <a href="" className="categories__item">
                      <div className="categories__image">
                        <picture>
                          <source
                            srcSet="/static/img/categories/categories_img-26.webp"
                            type="image/webp"
                          />
                          <img
                            src="/static/img/categories/categories_img-26.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="categories__name">
                        Другая техника (башенные краны)
                      </div>
                    </a>
                  </div>
                </div>
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
                  data-translate="EQUIPMENT_CATALOG_TAB"
                >
                  Каталог техніки
                </button>
                <button
                  type="button"
                  className="catalog-section__title tabs__title f16"
                  data-translate="EQUIPMENT_ORDER_TAB"
                >
                  Заявки
                </button>
              </nav>
              <div data-tabs-body className="tabs__content">
                <div className="tabs__body tabs__body-filter">
                  <div className="catalog-section__filter filter">
                    <button
                      className="open-filter filter__text _icon-filter"
                      data-translate="EQUIPMENT_FILTER"
                    >
                      Фільтры
                    </button>
                    <div
                      data-da=".sidebar__header,991.98,0"
                      className="filter__header filter__text _icon-filter"
                      data-translate="EQUIPMENT_FILTER"
                    >
                      Фільтры
                    </div>
                    <div className="filter__block-search">
                      <div className="filter__grid" id="filter__grid">
                        <button
                          type="submit"
                          id="grid-rows"
                          className="filter__grid-button _icon-rows"
                        ></button>
                        <button
                          type="submit"
                          id="grid-columns"
                          className="filter__grid-button active _icon-columns"
                        ></button>
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
                          Шукати
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__items-container sidebar__items-container_aside">
                    <div className="sidebar__selected-items"></div>
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
                        <div className="sidebar__selected-items"></div>
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
                          <div className="price__text" data-translate="PRICE_LABEL">
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
                          ></div>
                          <div className="range__inputs">
                            <label className="range__label">
                              <input type="text" className="range__input" />
                              <span className="range__text" data-translate="FROM">
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
                            <span></span>
                            <span></span>
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
                          ></button>
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
                          ></button>
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
                          ></button>
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                          <a href="product.html" className="catalog-section__items">
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
                    <div data-dropdown className="filter-orders__dropdown dropdown">
                      <button
                        type="button"
                        data-dropdown-button
                        className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                        data-value=""
                        data-translate="REGION_LABEL"
                      >
                        Регион
                      </button>
                      <ul data-dropdown-list className="tabs__list dropdown__list">
                        <li
                          data-dropdown-item
                          data-value="2"
                          className="dropdown__item"
                          data-translate="REG_RO_RO"
                        >
                          Румунія
                        </li>
                        <li
                          data-dropdown-item
                          data-value="3"
                          className="dropdown__item"
                          data-translate="REG_TR_TR"
                        >
                          Турція
                        </li>
                        <li
                          data-dropdown-item
                          data-value="4"
                          className="dropdown__item"
                          data-translate="REG_PL_PL"
                        >
                          Польща
                        </li>
                        <li
                          data-dropdown-item
                          data-value="1"
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
                    <div data-dropdown className="filter-orders__dropdown dropdown">
                      <button
                        type="button"
                        data-dropdown-button
                        className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                        data-value=""
                        data-translate="CHOOSE_CATEGORY"
                      >
                        Виберіть категорію
                      </button>
                      <div data-dropdown-list className="tabs__list dropdown__list">
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
                              <li className="category-header__item"></li>
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
                              <li className="category-header__item"></li>
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
                              <li className="category-header__item"></li>
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
                    <div data-dropdown className="filter-orders__dropdown dropdown">
                      <button
                        type="button"
                        data-dropdown-button
                        className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                        data-value=""
                        data-translate="PAYMENT_LABEL"
                      >
                        Тип оплати
                      </button>
                      <ul data-dropdown-list className="tabs__list dropdown__list">
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
                    <div data-dropdown className="filter-orders__dropdown dropdown">
                      <button
                        type="button"
                        data-dropdown-button
                        className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                        data-value=""
                        data-translate="STATUS_LABEL"
                      >
                        Статус
                      </button>
                      <ul data-dropdown-list className="tabs__list dropdown__list">
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
                        ></button>
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
                        Действие
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
                            <div className="sort-orders__text">Наличный расчет</div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">8000 грн</div>
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
                            <div className="sort-orders__text">Наличный расчет</div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">8000 грн</div>
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
                            <div className="sort-orders__text">Наличный расчет</div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">8000 грн</div>
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
                            <div className="sort-orders__text">Наличный расчет</div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">8000 грн</div>
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
                            <div className="sort-orders__text">Наличный расчет</div>
                          </div>
                          <div className="catalog-section__bottom catalog-section__bottom-orders">
                            <div className="catalog-section__price">8000 грн</div>
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
                        Взаємодія
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
                            <div className="catalog-section__price">8000 грн</div>
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
                data-translate="ADD_EQUIPMENT_BUTTON"
              >
                <span>+</span> Додати техніку
              </button>
            </div>
          </div>
        </section>

        <section className="add-technique">
          <div className="add-technique__container">
            <div className="add-technique__image">
              <img
                className="add-technique__banner light-theme"
                src="/static/img/main/banner-2.svg"
                alt=""
              />
              <img
                className="add-technique__bg light-theme"
                src="/static/img/main/background-2.svg"
                alt=""
              />
              <img
                className="add-technique__banner dark-theme"
                src="/static/img/main/banner-2-dark-theme.svg"
                alt=""
              />
              <img
                className="add-technique__bg dark-theme"
                src="/static/img/main/background-2-dark-theme.svg"
                alt=""
              />
            </div>
            <form action="#" className="add-technique__form">
              <h3
                className="add-technique__title"
                data-translate="ADD_EQUIPMENT_BUTTON"
              >
                Додати техніку
              </h3>
              <div data-dropdown className="tabs__dropdown dropdown">
                <button
                  type="button"
                  data-dropdown-button
                  className="tabs__dropdown-button dropdown__button _icon-arrow-1"
                  data-value=""
                  data-translate="CHOOSE_CATEGORY"
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
                        <li className="category-header__item"></li>
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
                        <li className="category-header__item"></li>
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
                        <li className="category-header__item"></li>
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
                  name="select-category"
                  value=""
                  data-dropdown-input
                  className="dropdown__input-hidden"
                />
              </div>
              <input
                data-validate
                data-required
                type="text"
                name="name"
                className="tabs__input"
                placeholder="Ваше ім'я"
                data-translate="NAME_PLACEHOLDER"
              />
              <input
                data-error="Номер телефона должен начинаться с +40, +90, +373, +380"
                data-validate
                data-required
                type="tel"
                name="tel"
                className="tabs__input phone-mask"
                placeholder="+__ ___ ___ ____"
              />
              <div className="add-technique__button-row">
                <button
                  type="submit"
                  className="add-technique__button btn btn-c"
                  data-translate="ADD_BUTTON"
                >
                  Додати
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default CatalogContainer
