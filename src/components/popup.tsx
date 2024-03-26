import { Fragment } from 'react'

const Popup = () => {
  return (
    <Fragment>
      <div id="popup" aria-hidden="true" className="popup">
        <div className="popup__wrapper">
          <div className="popup__content popup__form">
            <div className="popup__row">
              <div className="popup__steps">
                <div
                  className="popup__step popup__step-1 f16"
                  data-translate="POPUP_LINE_ORDER"
                >
                  <span>1</span>Замовлення
                </div>
                <div
                  className="popup__step popup__step-2 color f16"
                  data-translate="POPUP_LINE_DETAILS"
                >
                  <span>2</span>Деталі
                </div>
                <div
                  className="popup__step popup__step-3 f16"
                  data-translate="POPUP_LINE_PAYMENT"
                >
                  <span>3</span>Оплата
                </div>
              </div>
              <button
                data-close
                data-da=".popup__content,767.98,5"
                type="button"
                className="popup__close"
              >
                <span className="popup__button-close btn-close">
                  <span></span>
                </span>
              </button>
            </div>
            <form action="#" className="popup__form-step popup__form-1">
              <div className="tabs__top-row">
                <div className="tabs__icon">
                  <img src="/static/img/main/info.svg" alt="" />
                </div>
                <p className="tabs__text" data-translate="POPUP_DATE_INFO">
                  Виберіть дату запропонованої роботи та опишіть завдання,
                  додайте фотографії.
                </p>
              </div>
              <div className="popup__body">
                <div className="popup__date">
                  <input id="daterangepicker1" type="hidden" />
                  <div
                    id="daterangepicker1-container"
                    className="embedded-daterangepicker"
                  ></div>
                </div>
                <div className="popup__descr">
                  <textarea
                    name="descr"
                    data-translate="DESCRIPTION_PLACEHOLDER"
                    placeholder="Опис"
                    className="popup__textarea"
                  ></textarea>
                  <div className="popup__upload-file upload-file">
                    <div className="upload-file__icon _icon-clip"></div>
                    <p
                      className="upload-file__text"
                      data-translate="ATTACH_INFO"
                    >
                      Додайте документи або сфотографуйте місце роботи
                    </p>
                    <div className="upload-file__input-body">
                      <input
                        type="file"
                        name="files[]"
                        id="upload-file__input_1"
                        className="upload-file__input"
                        accept=".jpg, .jpeg, .png"
                      />
                      <label
                        className="upload-file__label"
                        htmlFor="upload-file__input_1"
                      >
                        <span
                          className="upload-file__label-text"
                          data-translate="ATTACH_BUTTON"
                        >
                          Прикріпити
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popup__buttons">
                <button
                  data-close
                  type="button"
                  className="popup__button btn popup__button-prev prev-1"
                  data-translate="BACK_BUTTON"
                >
                  Назад
                </button>
                <button
                  type="button"
                  className="popup__button btn btn-c popup__button-next next-1"
                  data-translate="NEXT_BUTTON"
                >
                  Далі
                </button>
              </div>
            </form>
            <form action="#" className="popup__form-step popup__form-2">
              <div className="tabs__top-row">
                <div className="tabs__icon">
                  <img src="/static/img/main/info.svg" alt="" />
                </div>
                <p className="tabs__text" data-translate="BUDGET_INFO">
                  Вкажіть бажаний бюджет для робіт або залиште поле порожнім.
                  Бюджет запропонують підрядники
                </p>
              </div>
              <div className="popup__body popup__body-step2">
                <div className="popup__column">
                  <input
                    type="number"
                    className="popup__budget"
                    data-translate="BUDGET_PLACEHOLDER"
                    placeholder="Робочий бюджет"
                  />
                  <div className="tabs__top-row">
                    <div className="tabs__icon">
                      <img src="/static/img/main/info.svg" alt="" />
                    </div>
                    <p
                      id="text"
                      className="tabs__text"
                      data-translate="CHOOSE_INFO"
                    >
                      Я знаю, що мені потрібно і виберу сам. Приклад: потрібен
                      автокран
                    </p>
                  </div>
                </div>
                <div className="popup__column popup__column-radio">
                  <div className="radio">
                    <h6
                      className="radio__title"
                      data-translate="TYPE_DEAL_TITLE"
                    >
                      Тип угоди
                    </h6>
                    <div className="radio__item">
                      <input
                        className="radio__input"
                        defaultChecked
                        type="radio"
                        id="answer-first-1"
                        name="safe-deal"
                      />
                      <label
                        htmlFor="answer-first-1"
                        className="radio__label"
                      ></label>
                      <p
                        className="radio__label-text"
                        data-translate="SAVE_DEAL"
                      >
                        <span
                          data-text="Работа через безопасную сделку обеспечивает финансовые гарантии сторонам. Вы получите качественный и своевременный результат или мы вернем вам деньги."
                          className="radio__label-icon _icon-star"
                        ></span>
                        Безпечна угода
                      </p>
                    </div>
                    <div className="radio__item">
                      <input
                        className="radio__input"
                        type="radio"
                        id="answer-first-2"
                        name="safe-deal"
                      />
                      <label
                        htmlFor="answer-first-2"
                        className="radio__label"
                      ></label>
                      <p
                        className="radio__label-text"
                        data-translate="DIRECT_SETTLEMENT"
                      >
                        <span
                          data-text="Прямые расчеты с исполнителем на свой страх и риск."
                          className="radio__label-icon _icon-attention"
                        ></span>
                        Пряме врегулювання
                      </p>
                    </div>
                  </div>
                  <div className="radio">
                    <h6
                      className="radio__title"
                      data-translate="POPUP_LINE_PAYMENT"
                    >
                      Оплата
                    </h6>
                    <div className="radio__item">
                      <input
                        className="radio__input"
                        defaultChecked
                        type="radio"
                        id="answer-second-1"
                        name="pay"
                      />
                      <label
                        htmlFor="answer-second-1"
                        className="radio__label"
                      ></label>
                      <p
                        className="radio__label-text"
                        data-translate="RESERVATION_AMOUNT"
                      >
                        Резервування суми на карті
                      </p>
                    </div>
                    <div className="radio__item">
                      <input
                        className="radio__input"
                        type="radio"
                        id="answer-second-2"
                        name="pay"
                      />
                      <label
                        htmlFor="answer-second-2"
                        className="radio__label"
                      ></label>
                      <p
                        className="radio__label-text"
                        data-translate="CASHLESS_WITH_VAT"
                      >
                        Безготівковий розрахунок з ПДВ
                      </p>
                    </div>
                    <div className="radio__item">
                      <input
                        className="radio__input"
                        type="radio"
                        id="answer-second-3"
                        name="pay"
                      />
                      <label
                        htmlFor="answer-second-3"
                        className="radio__label"
                      ></label>
                      <p
                        className="radio__label-text"
                        data-translate="CASHLESS_WITHOUT_VAT"
                      >
                        Безготівковий розрахунок без ПДВ
                      </p>
                    </div>
                    <div className="radio__item">
                      <input
                        className="radio__input"
                        disabled
                        type="radio"
                        id="answer-second-4"
                        name="pay"
                      />
                      <label
                        htmlFor="answer-second-4"
                        className="radio__label"
                      ></label>
                      <p className="radio__label-text" data-translate="CASH">
                        Готівка
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popup__buttons">
                <button
                  type="button"
                  className="popup__button btn popup__button-prev prev-2"
                  data-translate="BACK_BUTTON"
                >
                  Назад
                </button>
                <button
                  type="button"
                  className="popup__button btn btn-c popup__button-next next-2"
                  data-translate="ADD_BUTTON"
                >
                  Додати
                </button>
              </div>
            </form>
            <form action="#" className="popup__form-step popup__form-3">
              <div className="popup__successfully successfully">
                <h5 className="successfully__title" data-translate="">
                  Пошук виконавця
                </h5>
                <p
                  className="successfully__text"
                  data-translate="RESULT_SUCCESS_MESSAGE"
                >
                  Ви успішно розмістили замовлення на пошук спецтехніки:
                </p>
                <div className="successfully__body">
                  <div className="successfully__info">
                    <p className="successfully__info-text">Автокраны</p>
                    <p className="successfully__info-text">
                      г. Киев, ул. Софиевская, 24
                    </p>
                    <p className="successfully__info-text">18.03.2022</p>
                    <p className="successfully__info-text">Наличный расчет</p>
                  </div>
                  <div className="successfully__sms">
                    <p
                      className="successfully__sms-text"
                      data-translate="SEND_CODE_LABEL"
                    >
                      Будь ласка, введіть код із SMS-повідомлення:
                    </p>
                    <input
                      type="tel"
                      className="successfully__sms-code"
                      placeholder="_ _ _ _"
                    />
                    <button
                      type="submit"
                      className="successfully__button btn btn-c"
                      data-translate="CONFIRM_BUTTON"
                    >
                      Підтвердити
                    </button>
                  </div>
                </div>
                <div className="successfully__footer">
                  <button
                    type="button"
                    className="popup__button btn popup__button-prev prev-3"
                    data-translate="BACK_BUTTON"
                  >
                    Назад
                  </button>
                  <div
                    className="successfully__social _icon-telegram"
                    data-translate="TELEGRAM_BOT_MESSAGE"
                  >
                    Щоб отримати рахунок на оплату, підключіть телеграм-бот
                  </div>
                  <button
                    type="submit"
                    className="successfully__footer-button btn btn-w"
                    data-translate="CONNECT_BUTTON"
                  >
                    Підключитися
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="popup-login" aria-hidden="true" className="popup">
        <div className="popup__wrapper">
          <div className="popup__content popup__content-login login-popup">
            <div data-tabs className="login-popup__tabs">
              <nav data-tabs-titles className="login-popup__navigation">
                <button
                  type="button"
                  className="login-popup__title _tab-active"
                  data-translate="SIGNIN_TAB"
                >
                  Авторизація
                </button>
              </nav>
              <div data-tabs-body className="login-popup__content">
                <div className="login-popup__body">
                  <div className="login-popup__wrapper">
                    <div className="login-popup__column">
                      <div className="login-popup auth-block">
                        <div className="login-popup__title-second auth-block__title-second">
                          <p data-translate="SUBMIT_NUMBER_TITLE">
                            Підтвердіть номер телефону
                          </p>
                          <p data-translate="SUBMIT_NUMBER_SUBTITLE">
                            Скористайтеся месенджером або смс
                          </p>
                        </div>
                        <a
                          href=""
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
                            Через Telegram
                          </span>
                        </a>
                        <a
                          href=""
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
                          <span data-translate="SIGNIN_VIBER">Через Viber</span>
                        </a>
                        <div className="login-popup__tel-auth auth-parent auth-block__tel-auth">
                          <div className="tel-auth-wrapper login-popup__tel-auth-wrapper auth-block__tel-auth-wrapper">
                            <div className="login-popup__social-wrapper auth-block__social-wrapper">
                              <p data-translate="OLD_METHOD_SMS">
                                Застарілий спосіб підтвердження через СМС
                              </p>
                              <button className="tel-auth-trigger login-popup__social auth-block__social">
                                <div className="login-popup__icon"></div>
                                <span data-translate="GET_CODE_BY_SMS">
                                  Отримати код по SMS
                                </span>
                              </button>
                            </div>
                            <div className="login-popup__tel-input auth-block__tel-input">
                              <div className="_form-error">
                                <input
                                  data-error=""
                                  data-validate=""
                                  data-required=""
                                  type="tel"
                                  name="tel"
                                  className="phone-mask tel-auth-input"
                                  placeholder="+__ ___ ___ ____"
                                  inputMode="text"
                                />
                              </div>
                              <button
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
                                  type="submit"
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
                                    <span className="auth-current-tel"></span>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-popup__buttons">
              <button data-close type="button" className="popup__close">
                <span className="popup__button-close btn-close">
                  <span></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="popup-success-auth" aria-hidden="true" className="popup-success">
        <div tabIndex={-1} className="popup-success__wrapper">
          <div>
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="popup-success-auth-title"
              className="popup-success__content"
            >
              <header className="popup-success__header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  className="popup-success__check"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h2
                  id="popup-success-auth-title"
                  className="popup-success__title"
                  data-translate="SUCCESS_AUTH"
                >
                  Успішна авторизація!
                </h2>
              </header>
              <button
                className="btn btn-c popup-success__button"
                data-translate="CONFIRM_BUTTON"
              >
                Добре
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Popup
