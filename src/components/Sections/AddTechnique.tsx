function AddTecnhique() {
  return (
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
              name="select-category"
              defaultValue=""
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
  )
}

export default AddTecnhique
