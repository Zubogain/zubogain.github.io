import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { useTranslation } from 'next-i18next'

import { motion } from 'framer-motion'

const ProductContainer = () => {
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
      <div className="wrapper">
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
              <h2 className="breadcrumb__title">
                МУСОРОВОЗЫ EPIROC YALOVA 014027000991
              </h2>
              <ul className="breadcrumb__list">
                <li>
                  <a href="#" data-translate="LINK_MAIN">
                    Головна
                  </a>
                </li>
                <li>
                  <a href="#" data-translate="LINK_ALL_EQUIPMENT">
                    Вся спецтехніка
                  </a>
                </li>
                <li className="breadcrumb__active">Мусоровозы</li>
              </ul>
            </div>
          </section>
          <section className="product">
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
            <div className="product__container">
              <div className="product__layout">
                <div className="product__row-mob">
                  <div className="product__date">
                    Обновлено 06.07.2022 09:27:14
                  </div>
                </div>
                <div className="product__row">
                  <h4 className="product__title">
                    Мусоровозы Epiroc Yalova 014027000991
                  </h4>
                  <button
                    data-da=".product__row-mob,767.98,2"
                    className="product__share _icon-share"
                    data-translate="SHARE_BUTTON"
                  >
                    Поділитися
                  </button>
                </div>
                <div className="product__top">
                  <div className="product__gallery">
                    <div className="product__slider swiper">
                      <div className="product__swiper swiper-wrapper">
                        <div className="product__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                        <div className="product__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                        <div className="product__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                        <div className="product__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                        <div className="product__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div className="product__thumbs thumbs-images swiper">
                      <div className="thumbs-images__swiper swiper-wrapper">
                        <div className="thumbs-images__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                        <div className="thumbs-images__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                        <div className="thumbs-images__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                        <div className="thumbs-images__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                        <div className="thumbs-images__slide-ibg swiper-slide">
                          <picture>
                            <source
                              srcSet="/static/img/catalog/catalog_img-16.webp"
                              type="image/webp"
                            />
                            <img src="/static/img/catalog/catalog_img-16.png" alt="" />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__descr-wrap">
                    <h5 className="product__descr" data-translate="DESC_LABEL">
                      Опис
                    </h5>
                    <p className="product__descr-text">
                      Voluptas totam mollitia doloribus rerum velit molestiae
                      qui. Magni nemo ut enim consequuntur ut. Voluptas totam
                      mollitia doloribus rerum velit molestiae qui. Magni nemo
                      ut enim consequuntur ut.Voluptas totam mollitia doloribus
                      rerum velit molestiae qui. Magni nemo ut enim consequuntur
                      ut.
                    </p>
                    <div className="product__price">
                      <div className="product__price-text">
                        <span>296</span> EUR. / 8ч.
                      </div>
                      <div className="product__price-text">
                        <span>1803</span> EUR. / 5ч.
                      </div>
                      <div className="product__price-text">
                        <span>1256</span> EUR. / 2ч.
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="product__descr-button btn btn-c"
                      data-translate="GET_ORDER_BUTTON"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
                <div className="product__bottom">
                  <div className="product__bottom-descr">
                    <h5
                      className="product__descr"
                      data-translate="CHARACTERISTICS_LABEL"
                    >
                      Характеристики
                    </h5>
                    <p className="product__descr-text">
                      Voluptas totam mollitia doloribus rerum velit molestiae
                      qui. Magni nemo ut enim consequuntur ut. Voluptas totam
                      mollitia doloribus rerum velit molestiae qui. Magni nemo
                      ut enim consequuntur ut.Voluptas totam mollitia doloribus
                      rerum velit molestiae qui. Magni nemo ut enim consequuntur
                      ut.
                    </p>
                    <button
                      type="submit"
                      className="product__bottom-button btn"
                    >
                      Вывоз мусора
                    </button>
                  </div>
                  <div className="product__map">
                    <h5
                      className="product__descr"
                      data-translate="LOCATION_LABEL"
                    >
                      Карта базування
                    </h5>
                    <div id="map_container" className="map__wrapper">
                      <div className="map__image">
                        <picture>
                          <source
                            srcSet="/static/img/main/map-background.webp"
                            type="image/webp"
                          />
                          <img src="/static/img/main/map-background.png" alt="Карта" />
                        </picture>
                      </div>
                      <div id="map" className="map__iframe">
                        <div id="map__button" className="map__button-wrap">
                          <button
                            id="load_map_button"
                            className="map__button btn btn-w"
                            data-translate="MAPACTION_BUTTON"
                          >
                            Взаимодіяти
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="similar-technique">
            <div className="similar-technique__container rows">
              <h3
                className="similar-technique__title"
                data-translate="SIMILAR_EQUIPMENT"
              >
                Схожа техніка
              </h3>
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
                  data-da=".sort-section,767.98,1"
                  className="sort-section__name-mob"
                  data-translate="FULL_LABELS"
                >
                  Тип, Марка, Регіон, Характеристики
                </div>
                <div className="catalog-section__wrapper">
                  <a href="#" className="catalog-section__items">
                    <div className="catalog-section__image-ibg">
                      <picture>
                        <source
                          srcSet="/static/img/catalog/catalog_img-01.webp"
                          type="image/webp"
                        />
                        <img src="/static/img/catalog/catalog_img-01.png" alt="" />
                      </picture>
                    </div>
                    <div className="catalog-section__content">
                      <div className="catalog-section__main">
                        <div className="catalog-section__header">
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Тип</div>
                            <div className="catalog-section__descr">
                              Автовышки
                            </div>
                          </div>
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Марка</div>
                            <div className="catalog-section__descr">
                              Автовышки
                            </div>
                          </div>
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Регион</div>
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
                    <div className="catalog-section__image-ibg">
                      <picture>
                        <source
                          srcSet="/static/img/catalog/catalog_img-01.webp"
                          type="image/webp"
                        />
                        <img src="/static/img/catalog/catalog_img-01.png" alt="" />
                      </picture>
                    </div>
                    <div className="catalog-section__content">
                      <div className="catalog-section__main">
                        <div className="catalog-section__header">
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Тип</div>
                            <div className="catalog-section__descr">
                              Автовышки
                            </div>
                          </div>
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Марка</div>
                            <div className="catalog-section__descr">
                              Автовышки
                            </div>
                          </div>
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Регион</div>
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
                        <div className="catalog-section__price">8000 грн</div>
                        <div className="catalog-section__button btn btn-c _icon-arrow-2">
                          Перейти
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="catalog-section__items">
                    <div className="catalog-section__image-ibg">
                      <picture>
                        <source
                          srcSet="/static/img/catalog/catalog_img-01.webp"
                          type="image/webp"
                        />
                        <img src="/static/img/catalog/catalog_img-01.png" alt="" />
                      </picture>
                    </div>
                    <div className="catalog-section__content">
                      <div className="catalog-section__main">
                        <div className="catalog-section__header">
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Тип</div>
                            <div className="catalog-section__descr">
                              Автовышки
                            </div>
                          </div>
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Марка</div>
                            <div className="catalog-section__descr">
                              Автовышки
                            </div>
                          </div>
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Регион</div>
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
                        <div className="catalog-section__price">8000 грн</div>
                        <div className="catalog-section__button btn btn-c _icon-arrow-2">
                          Перейти
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="catalog-section__items">
                    <div className="catalog-section__image-ibg">
                      <picture>
                        <source
                          srcSet="/static/img/catalog/catalog_img-01.webp"
                          type="image/webp"
                        />
                        <img src="/static/img/catalog/catalog_img-01.png" alt="" />
                      </picture>
                    </div>
                    <div className="catalog-section__content">
                      <div className="catalog-section__main">
                        <div className="catalog-section__header">
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Тип</div>
                            <div className="catalog-section__descr">
                              Автовышки
                            </div>
                          </div>
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Марка</div>
                            <div className="catalog-section__descr">
                              Автовышки
                            </div>
                          </div>
                          <div className="catalog-section__row">
                            <div className="catalog-section__name">Регион</div>
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
                        <div className="catalog-section__price">8000 грн</div>
                        <div className="catalog-section__button btn btn-c _icon-arrow-2">
                          Перейти
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="arrow-up _icon-arrow-1"></div>
      </div>
    </>
  )
}

export default ProductContainer
