import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import ActiveLink from '@Components/ActiveLink'
import { useRouter } from 'next/router'
import LanguageSwitchLink from '@Components/LanguageSwitchLink' // TODO: replace
import i18nextConfig from '@/next-i18next.config'

import Logo from '@Components/Header/Logo'
import RegionSelector from '@Components/Header/RegionSelector'
import Search from '@Components/Header/Search'
import CategorySelector from '@Components/Header/CategorySelector'
import LanguageDropdown from '@Components/Header/LanguageDropdown'
import AuthDropdown from '@Components/Header/AuthSelector'
import Dropdown from 'react-dropdown'

function HeaderLine() {
  return <div className="header__line hide-mob" />
}

function Header() {
  const router = useRouter()
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  const { t } = useTranslation(['common'])

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <button type="button" className="header__menu-icon icon-menu">
            <span />
            <span />
            <span />
          </button>
          <Logo />
          <div className="header__main">
            <div className="header__wrap">
              <RegionSelector />

              <HeaderLine />
              <CategorySelector />
              <Search />
              {/* // dropdown sample */}
              <Dropdown>
                <LanguageDropdown />
              </Dropdown>
              <HeaderLine />
              <AuthDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
