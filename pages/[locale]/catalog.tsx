import { getStaticPaths, getI18nProps } from '@Libs/getStatic'

import CatalogContainer from '@Containers/Catalog'

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await getI18nProps(ctx, ['common', 'catalog', 'home'])),
  },
})

export default CatalogContainer
