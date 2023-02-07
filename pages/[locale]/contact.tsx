import { getStaticPaths, getI18nProps } from '../../src/libs/getStatic';

import ContactContainer from "../../src/containers/Contact";

export { getStaticPaths }
export const getStaticProps = async (ctx: any) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common', 'contact'])),
        },
    }
}

export default ContactContainer;
