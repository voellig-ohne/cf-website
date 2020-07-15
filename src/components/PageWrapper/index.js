import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navigation from '../Navigation';
import Footer from '../Footer';
import LogoContainer from '../LogoContainer';
import Favicon from './favicon.png';

import '../style/main.less';
import { Helmet } from 'react-helmet-async';

export default ({ children, pathname }) => {
    const { contentfulGlobal } = useStaticQuery(graphql`
        query PageWrapperQuery {
            contentfulGlobal(contentful_id: { eq: "6KsBufkTaS3SQwjqkwflQU" }) {
                title
                description {
                    description
                }
                menu {
                    label
                    targetPage {
                        slug
                    }
                    targetLink
                }
            }
        }
    `);

    return (
        <>
            <Helmet titleTemplate={`${contentfulGlobal.title} | %s`}>
                <html lang="de" />
                <title>{contentfulGlobal.title}</title>
                <meta name="description" content={contentfulGlobal.description.description} />
                <link rel="icon" type="image/png" href={Favicon} />
                <link
                    rel="preload"
                    href="https://fuchsfonts.volligohne.de/31DA6A_0_0.woff2"
                    as="font"
                    type="font/woff2"
                    crossorigin
                />
                <link
                    rel="preload"
                    href="https://fuchsfonts.volligohne.de/31DA6A_1_0.woff2"
                    as="font"
                    type="font/woff2"
                    crossorigin
                />
                <link
                    rel="preload"
                    href="https://fuchsfonts.volligohne.de/31DA6A_2_0.woff2"
                    as="font"
                    type="font/woff2"
                    crossorigin
                />
            </Helmet>
            {children}
            <Navigation location={pathname} menu={contentfulGlobal.menu} />
            <Footer />
            <LogoContainer className="logo-container" />
        </>
    );
};
