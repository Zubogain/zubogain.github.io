function TechniqueSection() {
  return (
    <section className="technique">
      <div className="technique__container">
        <div className="technique__wrapper">
          <div className="technique__content">
            <h2
              className="technique__title"
              data-translate="EQUIPMENT_MAIN_TITLE"
            >
              Техніка повинна працювати
            </h2>
            <div className="technique__row">
              <div className="technique__item">
                <div className="technique__icon">
                  <img src="/static/img/main/arrow.svg" alt="" />
                </div>
                <p
                  className="technique__text"
                  data-translate="EQUIPMENT_ITEM_1"
                >
                  Отримуйте вигідні замовлення для вашої техніки вже сьогодні
                </p>
              </div>
              <div className="technique__item">
                <div className="technique__icon">
                  <img src="/static/img/main/arrow.svg" alt="" />
                </div>
                <p
                  className="technique__text"
                  data-translate="EQUIPMENT_ITEM_2"
                >
                  Безкоштовна реєстрація в 2 кроки
                </p>
              </div>
            </div>
            <a
              href="https://google.com"
              className="technique__button btn btn-w"
              data-da=".technique__image,767.98,2"
              data-translate="EQUIPMENT_BUTTON"
            >
              Підключити техніку
            </a>
          </div>
          <div className="technique__image">
            <img
              src="/static/img/main/banner.svg"
              alt=""
              className="technique__light-theme"
            />
            <img
              src="/static/img/main/banner-dark-theme.svg"
              alt=""
              className="technique__dark-theme"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechniqueSection
