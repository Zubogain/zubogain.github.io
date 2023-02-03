import { getStaticPaths, getI18nProps } from '@Libs/getStatic';

import SkillsContainer from "@Containers/Skills";

export { getStaticPaths }
export const getStaticProps = async ctx => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common', 'skills'])),
        },
    }
}


export default SkillsContainer;
