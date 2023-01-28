import { getStaticPaths, getI18nProps } from '@Libs/getStatic';

import ContactContainer from "@Containers/contact";

export { getStaticPaths }
export const getStaticProps = async ctx => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common', 'contact'])),
        },
    }
}

export default ContactContainer;
