/* eslint-disable jsx-a11y/anchor-is-valid */
function Breadcrumbs() {
  return (
    <section className="breadcrumb">
      <div className="breadcrumb__container">
        <h2 className="breadcrumb__title" data-translate="ALL_EQUIPMENT">
          Вся спецтехніка
        </h2>
        <ul className="breadcrumb__list">
          <li>
            <a href="#" data-translate="LINK_MAIN">
              Головна
            </a>
          </li>
          <li
            className="breadcrumb__active"
            data-translate="LINK_ALL_EQUIPMENT"
          >
            Вся спецтехніка
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumbs
