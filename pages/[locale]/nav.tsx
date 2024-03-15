import { getStaticPaths, getI18nProps } from '@Libs/getStatic'

import NavContainer from '@Containers/Nav'

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await getI18nProps(ctx, ['common', 'nav', 'home'])),
  },
})

export default NavContainer
