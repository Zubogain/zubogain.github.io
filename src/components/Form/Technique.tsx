/* eslint-disable jsx-a11y/control-has-associated-label */
function TechniqueForm() {
  return (
    <form action="#" className="tabs__body form">
      <button type="button" className="tabs__header _tab-active f16">
        <span className="_icon-truck-2" />
        <span data-translate="CHOOSE_EQUIPMENT">Підбір техніки</span>
      </button>

      <div className="tabs__top-row">
        <div className="tabs__icon">
          <img src="/static/img/main/info.svg" alt="" />
        </div>
        <p className="tabs__text" data-translate="CHOOSE_INFO">
          Я знаю, що мені потрібно і виберу сам. Приклад: потрібен автокран
        </p>
      </div>
      <div className="tabs__row">
        <div data-dropdown className="tabs__dropdown dropdown order-category">
          <button
            type="button"
            data-dropdown-button
            className="tabs__dropdown-button dropdown__button _icon-arrow-1"
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
        <div data-dropdown className="tabs__dropdown dropdown order-location">
          <button
            type="button"
            data-dropdown-button
            className="tabs__dropdown-button dropdown__button _icon-arrow-1"
            data-value=""
            data-translate="CHOOSE_LOCATION_PLACEHOLDER"
          >
            Виберіть адресу робіт
          </button>
          <ul data-dropdown-list className="tabs__list dropdown__list">
            <li className="dropdown__item" data-dropdown-item data-value="1">
              Киевская область
            </li>
            <li className="dropdown__item" data-dropdown-item data-value="2">
              Винницкая область
            </li>
            <li className="dropdown__item" data-dropdown-item data-value="3">
              Сумская область
            </li>
            <li className="dropdown__item" data-dropdown-item data-value="4">
              Одесская область
            </li>
            <li className="dropdown__item" data-dropdown-item data-value="5">
              Днепропетровская область
            </li>
            <li className="dropdown__item" data-dropdown-item data-value="6">
              Черниговская область
            </li>
            <li className="dropdown__item" data-dropdown-item data-value="7">
              Харьковская область
            </li>
            <li className="dropdown__item" data-dropdown-item data-value="8">
              Житомирская область
            </li>
            <li className="dropdown__item" data-dropdown-item data-value="9">
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
                <span data-translate="SIGNIN_TELEGRAM">Telegram</span>
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
                    <img src="/static/img/main/icon-viber.png" alt="viber" />
                  </picture>
                </div>
                <span data-translate="SIGNIN_VIBER">Viber</span>
              </a>
              <div className="login-popup__social-wrapper auth-block__social-wrapper">
                <p data-translate="OLD_METHOD_SMS">Застарілий метод</p>
                <button
                  type="button"
                  className="tel-auth-trigger login-popup__social auth-block__social"
                >
                  <span data-translate="GET_CODE_BY_SMS">SMS</span>
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
              <span data-translate="SUCCESS_AUTH">Успішна авторизація!</span>
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
                    <span data-translate="WE_SENT">Ми надіслали код на</span>
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
                    <span className="get-code-timer">01:59</span>
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

      <p className="order-error-info" data-translate="ORDER_ERROR_MESSAGE">
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
  )
}

export default TechniqueForm
