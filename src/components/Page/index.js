import React from 'react';
import { graphql } from 'gatsby';
import '../style/main.less';
import { Helmet } from 'react-helmet-async';
import SectionContentSingle from '../SectionContentSingle';
import contentfulRichText from '../contentfulRichText';
import PageWrapper from '../PageWrapper';
import IntroSection from '../IntroSection';
import Hero from '../Hero';
import Img from 'gatsby-image';
import style from './style.module.less';

export default ({ data: { contentfulPage }, location: { pathname } }) => {
    return (
        <PageWrapper pathname={pathname}>
            {contentfulPage.sections.map((section, index) => (
                <React.Fragment key={index}>
                    {section.__typename === 'ContentfulSectionIntro' && (
                        <IntroSection claim={section.claim} type={section.type} />
                    )}
                    {section.__typename === 'ContentfulSectionHero' && (
                        <Hero ctaTarget={section?.ctaButton} image={section.image} />
                    )}
                    {section.__typename === 'ContentfulSection' && !section.sideImage && (
                        <SectionContentSingle title={section.titleDisplay}>
                            {contentfulRichText(section?.body?.json)}
                        </SectionContentSingle>
                    )}
                    {section.__typename === 'ContentfulSection' && section.sideImage && (
                        <SectionContentSingle wide={true} title={section.titleDisplay}>
                            <div className={style.sideImage}>
                                <div className={style.sideImage_imageContainerContainer}>
                                    <div className={style.sideImage_imageContainer}>
                                        <Img className={style.sideImage_image} fluid={section.sideImage.fluid} />
                                    </div>
                                </div>
                                <div className={style.sideImage_text}>{contentfulRichText(section?.body?.json)}</div>
                            </div>
                        </SectionContentSingle>
                    )}
                </React.Fragment>
            ))}
            <Helmet>
                <title>{contentfulPage.title}</title>
                {contentfulPage?.description?.description && (
                    <meta name="description" content={contentfulPage?.description?.description} />
                )}
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
                ... on Node {
                    ... on ContentfulSection {
                        __typename
                        body {
                            json
                        }
                        titleDisplay
                        sideImage {
                            id
                            fluid(maxWidth: 8000) {
                                ...GatsbyContentfulFluid_noBase64
                            }
                        }
                    }
                    ... on ContentfulSectionIntro {
                        __typename
                        claim
                        type
                    }
                    ... on ContentfulSectionHero {
                        __typename
                        image {
                            fluid(maxWidth: 2000) {
                                ...GatsbyContentfulFluid_noBase64
                            }
                        }
                        ctaButton {
                            label
                            targetLink
                            targetPage {
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;
