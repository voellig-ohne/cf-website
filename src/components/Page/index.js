import React from 'react';
import { graphql } from 'gatsby';
import Navigation from '../Navigation';
import Footer from '../Footer';
import LogoContainer from '../LogoContainer';
import Favicon from './favicon.png';

import '../style/main.less';
import { Helmet } from 'react-helmet-async';

export default ({ data, location }) => {
    const { contentfulGlobal, contentfulPage } = data;
    console.log(data, location);

    return (
        <>
            <Helmet>
                <title>{contentfulGlobal.title}</title>
                <meta name="description" content={contentfulGlobal.description.description} />
                <link rel="icon" type="image/png" href={Favicon} />
            </Helmet>
            <Navigation location={location.pathname} />
            <Footer />
            <LogoContainer className="logo-container" />
        </>
    );
};

export const pageQuery = graphql`
    query StaticPageBySlug($slug: String!) {
        contentfulGlobal(contentful_id: { eq: "6KsBufkTaS3SQwjqkwflQU" }) {
            title
            description {
                description
            }
        }
        contentfulPage(slug: { eq: $slug }) {
            title
            description {
                internal {
                    content
                }
            }
        }
    }
`;
