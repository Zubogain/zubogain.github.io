import { getStaticPaths, getI18nProps } from '@Libs/getStatic'

import ErrorPageContainer from '@Containers/ErrorPage'

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await getI18nProps(ctx, ['common', 'error-page'])),
  },
})

export default ErrorPageContainer
