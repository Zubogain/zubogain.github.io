import { getStaticPaths, getI18nProps } from '@Libs/getStatic';

import ExperienceContainer from "@Containers/experience";

export { getStaticPaths }
export const getStaticProps = async ctx => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common', 'experience'])),
        },
    }
}

export default ExperienceContainer;
