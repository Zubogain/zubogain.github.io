import { getStaticPaths, getI18nProps } from '@Libs/getStatic'

import ProductContainer from '@Containers/Product'

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await getI18nProps(ctx, ['common', 'product', 'home'])),
  },
})

export default ProductContainer
