/* eslint-disable jsx-a11y/control-has-associated-label */
function Search() {
  return (
    <form action="#" className="header__search search-header">
      <input
        id="search-input"
        type="text"
        name="form[]"
        data-error="Ошибка"
        data-translate="MAIN_SEARCH_PLACEHOLDER"
        placeholder="Що потрібно знайти?"
        className="search-header__input"
      />
      <ul id="suggestions-list" className="search-header__suggestions-list" />
      <button
        type="submit"
        className="search-header__button _icon-search-1 btn-c"
      />
      <button type="button" className="search-header__button-clear btn-close" />
    </form>
  )
}

export default Search
