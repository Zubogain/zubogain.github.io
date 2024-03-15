function LanguageDropdown() {
  return (
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
      <div data-dropdown-list className="lang-header__list dropdown__list">
        <div className="spollers__arrow"></div>
        <div className="lang-header__row">
          <div className="lang-header__title" data-translate="CHANGE_LANG">
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
  )
}

export default LanguageDropdown
