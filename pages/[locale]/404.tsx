import { getStaticPaths, getI18nProps } from '../../src/libs/getStatic';

import ErrorPageContainer from "../../src/containers/ErrorPage";

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common', 'error-page'])),
        },
    }
}

export default ErrorPageContainer;
