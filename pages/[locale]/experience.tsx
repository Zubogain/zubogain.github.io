import { getStaticPaths, getI18nProps } from '../../src/libs/getStatic';

import ExperienceContainer from "../../src/containers/Experience";

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common', 'experience'])),
        },
    }
}

export default ExperienceContainer;
