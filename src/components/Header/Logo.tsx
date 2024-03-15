import Image from 'next/image'
import ActiveLink from '@Components/ActiveLink'

function Logo() {
  return (
    <ActiveLink href="/" activeClassName="">
      <Image src="/static/img/main/logo-header.svg" alt="Buuz24" />
    </ActiveLink>
  )
}

export default Logo
