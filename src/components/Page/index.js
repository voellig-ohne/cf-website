import React from 'react';
import { graphql } from 'gatsby';
import '../style/main.less';
import { Helmet } from 'react-helmet-async';
import SectionContentSingle from '../SectionContentSingle';
import contentfulRichText from '../contentfulRichText';
import PageWrapper from '../PageWrapper';

export default ({ data: { contentfulPage }, location: { pathname } }) => {
    return (
        <PageWrapper pathname={pathname}>
            {contentfulPage.sections.map((section, index) => (
                <SectionContentSingle key={index} title={section.titleDisplay}>
                    {contentfulRichText(section.body.json)}
                </SectionContentSingle>
            ))}
            <Helmet>
                <title>{contentfulPage.title}</title>
                <meta name="description" content={contentfulPage.description.description} />
            </Helmet>
        </PageWrapper>
    );
};

export const pageQuery = graphql`
    query StaticPageBySlug($slug: String!) {
        contentfulPage(slug: { eq: $slug }) {
            title
            description {
                internal {
                    content
                }
            }
            sections {
                body {
                    json
                }
                titleDisplay
            }
        }
    }
`;
