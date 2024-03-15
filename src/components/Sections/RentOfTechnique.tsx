import TechniqueForm from '@Components/Form/Technique'

function RentOfTechniqueSection() {
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title" data-translate="MAIN_TITLE">
          ПОШУК ТА ОРЕНДА СПЕЦТЕХНІКИ
        </h1>
        <div className="main__wrapper">
          <div className="main__content">
            <div className="main__tabs tabs">
              <nav className="tabs__navigation" />
              <div className="tabs__content">
                <TechniqueForm />
              </div>
            </div>
          </div>
          <div className="main__image">
            <img
              src="/static/img/main/main-background.svg"
              alt="Main background"
              className="main__bg light-theme"
            />
            <img
              src="/static/img/main/main-background-mobile.svg"
              alt="Main background"
              className="main__bg-mob light-theme"
            />
            <img
              src="/static/img/main/main-background-dark-theme.svg"
              alt="Main background"
              className="main__bg dark-theme"
            />
            <img
              src="/static/img/main/main-background-mobile-dark-theme.svg"
              alt="Main background"
              className="main__bg-mob dark-theme"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RentOfTechniqueSection
