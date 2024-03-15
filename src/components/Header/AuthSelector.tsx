function AuthDropdown() {
  return (
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
              <span data-translate="NEW_CUSTOMER">Новий клієнт</span>?
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
  )
}

export default AuthDropdown
