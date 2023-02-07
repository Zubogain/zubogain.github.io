import { getStaticPaths, getI18nProps } from '@Libs/getStatic'

import ExperienceContainer from '@Containers/Experience'

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await getI18nProps(ctx, ['common', 'experience'])),
  },
})

export default ExperienceContainer
