function TechniqueMapSection() {
  return (
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
          <form className="tabs__search-map" data-da=".tabs__body-map,991.98,0">
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
                        Прицепы и полуприцепы (16 Тралы и низкорамные платформы)
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
  )
}

export default TechniqueMapSection
