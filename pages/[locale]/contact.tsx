import { getStaticPaths, getI18nProps } from '@Libs/getStatic'

import ContactContainer from '@Containers/Contact'

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await getI18nProps(ctx, ['common', 'contact'])),
  },
})

export default ContactContainer
