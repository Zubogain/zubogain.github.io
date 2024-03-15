/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-fragments */
import React, { useState, Dispatch, SetStateAction } from 'react'

//
const dropdownMockData = [
  {
    name: 'lorem',
    value: 'lorem',
    list: [
      {
        name: 'nested ipsum',
        value: 'nested_ipsum',
      },
      {
        name: 'nested ipsum',
        value: 'nested_ipsum',
      },
    ],
  },
  {
    name: 'ipsum',
    value: 'ipsum',
    list: [
      {
        name: 'nested ipsum',
        value: 'nested_ipsum',
      },
    ],
  },
]

function Dropdown({
  type,
  setter,
}: {
  type?: string
  setter: Dispatch<SetStateAction<string>>
}) {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState('Виберіть категорію')

  const btnClasses =
    'tabs__dropdown-search tabs__dropdown-button dropdown__button _icon-arrow-1'
  const listClasses = 'tabs__list dropdown__list'

  const toggleHandler = () => {
    console.log('toggleHandler')
    setIsActive(!isActive)
  }

  const itemClickHandler = (value: string, name: string) => () => {
    setter(value)
    setValue(name)
    toggleHandler()
  }

  return (
    <React.Fragment>
      <button
        type="button"
        data-dropdown-button
        className={isActive ? `${btnClasses} active` : btnClasses}
        data-value=""
        data-translate="CHOOSE_CATEGORY_PLACEHOLDER"
        onClick={toggleHandler}
      >
        {value}
      </button>
      <div
        data-dropdown-list
        className={isActive ? `${listClasses} visible` : listClasses}
      >
        <div className="category-header__wrapper">
          <div className="category-header__items">
            <h6 className="category-header__title _icon-excavator">
              Землеройная техника
            </h6>
            {dropdownMockData.map((item) => {
              return (
                <li
                  className="dropdown__item"
                  data-dropdown-item
                  data-value="1"
                  onClick={itemClickHandler('value_1', 'Самосвалы')}
                >
                  Самосвалы
                </li>
              )
            })}
            <ul className="category-header__list">
              <li
                className="dropdown__item"
                data-dropdown-item
                data-value="1"
                onClick={itemClickHandler('value_1', 'Самосвалы')}
              >
                Самосвалы
              </li>
              <li
                className="dropdown__item"
                data-dropdown-item
                data-value="2"
                onClick={itemClickHandler('value_2', 'Экскаваторы')}
              >
                Экскаваторы
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="3">
                Экскаваторы-погрузчики
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="4">
                Мини-экскаваторы
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="5">
                Бульдозеры
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="6">
                Фронтальные погрузчики
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="7">
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
              <li className="dropdown__item" data-dropdown-item data-value="8">
                Автокраны
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="9">
                Телескопические погрузчики
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="10">
                Вилочные погрузчики
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="11">
                Погрузчики-манипуляторы
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="12">
                Автовышки
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="13">
                Гусеничные краны
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="14">
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
              <li className="dropdown__item" data-dropdown-item data-value="15">
                Экскаваторы
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="16">
                Бульдозеры
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="17">
                Дорожные катки и асфальтоукладчики
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="18">
                Буровая и сваебойная техника
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="19">
                Грейдеры
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="20">
                Бетоносмесители (Бетоновозы и цементовозы)
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="21">
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
              <li className="dropdown__item" data-dropdown-item data-value="22">
                Автоцистерны
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="23">
                Мусоровозы
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="24">
                Эвакуаторы
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="25">
                Коммунально-дорожные машины
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="26">
                Прицепы и полуприцепы (16 Тралы и низкорамные платформы)
              </li>
              <li className="dropdown__item" data-dropdown-item data-value="27">
                Другая техника (башенные краны)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dropdown
