import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navigation from '../Navigation';
import Footer from '../Footer';
import LogoContainer from '../LogoContainer';
import Favicon from './favicon.png';

import '../style/main.less';
import { Helmet } from 'react-helmet-async';

export default ({ children, pathname }) => {
    const {
        contentfulGlobal: { title, description, menu, leftColumn, rightColumn },
    } = useStaticQuery(graphql`
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
                leftColumn {
                    json
                }
                rightColumn {
                    json
                }
            }
        }
    `);

    return (
        <>
            <Helmet titleTemplate={`${title} | %s`}>
                <html lang="de" />
                <title>{title}</title>
                <meta name="description" content={description.description} />
                <link rel="icon" type="image/png" href={Favicon} />
            </Helmet>
            {children}
            <Navigation location={pathname} menu={menu} />
            <Footer leftColumn={leftColumn} rightColumn={rightColumn} />
            <LogoContainer className="logo-container" />
        </>
    );
};
