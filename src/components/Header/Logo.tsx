/* eslint-disable @next/next/no-img-element */
import ActiveLink from '@Components/ActiveLink'

function Logo() {
  return (
    <ActiveLink href="/" activeClassName="">
      <img src="/static/img/main/logo-header.svg" alt="Buuz24" />
    </ActiveLink>
  )
}

export default Logo
