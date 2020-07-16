import React from 'react';
import { graphql } from 'gatsby';
import '../style/main.less';
import { Helmet } from 'react-helmet-async';
import SectionContentSingle from '../SectionContentSingle';
import contentfulRichText from '../contentfulRichText';
import PageWrapper from '../PageWrapper';
import IntroSection from '../IntroSection';
import PartnerList from '../PartnerList';
import Hero from '../Hero';
import Img from 'gatsby-image';
import style from './style.module.less';
import VerticalSection from '../VerticalSection';

export default ({ data: { contentfulPage }, location: { pathname } }) => {
    return (
        <PageWrapper pathname={pathname}>
            {contentfulPage.sections.map((section, index) => {
                if (section.__typename === 'ContentfulSectionIntro') {
                    return <IntroSection key={index} claim={section.claim} type={section.type} />;
                }
                if (section.__typename === 'ContentfulSectionHero') {
                    return <Hero key={index} ctaTarget={section?.ctaButton} image={section.image} />;
                }
                if (section.__typename === 'ContentfulSection' && section.sideImage) {
                    return (
                        <SectionContentSingle key={index} wide={true} title={section.titleDisplay}>
                            <div className={style.sideImage}>
                                <div className={style.sideImage_imageContainerContainer}>
                                    <div className={style.sideImage_imageContainer}>
                                        <Img className={style.sideImage_image} fluid={section.sideImage.fluid} />
                                    </div>
                                </div>
                                <div className={style.sideImage_text}>{contentfulRichText(section?.body?.json)}</div>
                            </div>
                        </SectionContentSingle>
                    );
                }
                if (section.__typename === 'ContentfulSection' && section.teamMembers) {
                    return (
                        <SectionContentSingle key={index} wide={true} title={section.titleDisplay}>
                            <PartnerList partners={section.teamMembers} />
                        </SectionContentSingle>
                    );
                }
                if (section.__typename === 'ContentfulSection' && section.verticalIconSection) {
                    return (
                        <SectionContentSingle key={index} wide={true} title={section.titleDisplay}>
                            <VerticalSection sections={section.verticalIconSection} />
                        </SectionContentSingle>
                    );
                }
                if (section.__typename === 'ContentfulSection') {
                    return (
                        <SectionContentSingle key={index} title={section.titleDisplay}>
                            {contentfulRichText(section?.body?.json)}
                        </SectionContentSingle>
                    );
                }
            })}
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
                        teamMembers {
                            image {
                                fluid(maxWidth: 500) {
                                    ...GatsbyContentfulFluid_noBase64
                                }
                            }
                            name
                            body {
                                json
                            }
                        }
                        verticalIconSection {
                            aboveHeading
                            body {
                                json
                            }
                            icon {
                                type
                            }
                            title
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
