import React from 'react';
import { graphql } from 'gatsby';
import Navigation from '../Navigation';
// import Footer from '../Footer';
// import LogoContainer from '../LogoContainer';

import '../style/main.less';

export default ({ data, location }) => {
    const { contentfulGlobal, contentfulPage } = data;
    console.log(data, location);

    return (
        <>
            <Navigation location={location.pathname} />
            {/* <Footer />
            <LogoContainer className="logo-container" /> */}
        </>
    );
};

export const pageQuery = graphql`
    query StaticPageBySlug($slug: String!) {
        contentfulGlobal(contentful_id: { eq: "6KsBufkTaS3SQwjqkwflQU" }) {
            title
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
