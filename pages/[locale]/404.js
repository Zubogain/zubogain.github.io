import { getStaticPaths, getI18nProps } from '@Libs/getStatic';

import ErrorPageContainer from "@Containers/error-page";

export { getStaticPaths }
export const getStaticProps = async ctx => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common'])),
        },
    }
}

export default ErrorPageContainer;
