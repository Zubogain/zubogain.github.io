import { getStaticPaths, getI18nProps } from '../../src/libs/getStatic';

import SkillsContainer from "../../src/containers/Skills";

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common', 'skills'])),
        },
    }
}


export default SkillsContainer;
