/* eslint-disable jsx-a11y/label-has-associated-control */
function RegionSelector() {
  return (
    <div className="header__location location-header">
      <div data-dropdown-hover="" className="location-header__items">
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
          <div className="spollers__arrow" />
          <div className="lang-header__row">
            <div className="lang-header__title" data-translate="CHOOSE_REGION">
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
                  defaultChecked
                  type="radio"
                  id="location-1"
                  name="location"
                />
                <label htmlFor="location-1" data-translate="REG_UK_UA">
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
                <label htmlFor="location-2" data-translate="REG_PL_PL">
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
        <div data-da=".wrapper,767.98,1" className="location-header__body">
          <div className="spollers__arrow" />
          <p className="location-header__text" data-translate="LANG_POPUP_INFO">
            Ми визначили вашу країну як Україна. Ви можете змінити це в
            налаштуваннях.
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
  )
}

export default RegionSelector
