import { getStaticPaths, getI18nProps } from '../../src/libs/getStatic';

import HomeContainer from "../../src/containers/Home";

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common', 'home'])),
        },
    }
}

export default HomeContainer;
