import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Forrest from 'components/Forrest';
import Hero from 'components/Hero';
import { filter, map, sortBy, includes } from 'lodash';
import SectionIconStrip from 'components/SectionIconStrip';
import IllustratedSection from 'components/IllustratedSection';

export default class Leistungen extends React.Component {
    render() {
        const leistungen = sortBy(
            filter(this.props.route.pages, (page) => {
                return includes(page.path, '/leistungen/items/');
            }),
            (page) => {
                return page.data.order;
            }
        );

        const branchen = [
            {
                illustration: 'branchen_ecommerce',
                title: 'E-Commerce & Versandhandel',
            },
            {
                illustration: 'branchen_verkehr',
                title: 'Tourismus & Verkehr',
            },
            {
                illustration: 'branchen_dienstleistung',
                title: <span>Dienst&shy;leis&shy;tungen & Hand&shy;werk</span>,
            },
            {
                illustration: 'branchen_b2b',
                title: 'B2B',
            },
            {
                illustration: 'branchen_b2c',
                title: 'B2C',
            },
            {
                illustration: 'branchen_agenturen',
                title: 'Agenturen',
            },
            {
                illustration: 'branchen_ngo',
                title: 'NGOs & Vereine',
            },
            {
                illustration: 'branchen_freelance',
                title: <span>Einzel&shy;unter&shy;nehmer</span>,
            },
            {
                illustration: 'branchen_telecom',
                title: <span>Technik & Tele&shy;kom&shy;muni&shy;ka&shy;tion</span>,
            },
            {
                illustration: 'branchen_medien',
                title: 'Medien & Marketing',
            },
        ];

        return (
            <DocumentTitle title={config.siteTitle + ' | leistungen'}>
                <main>
                    <section className="sub_intro">
                        <Forrest className="sub_intro-forrest" mode="single" />
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">Wir finden den richtigen Weg durch den Wald.</h1>
                        </header>
                    </section>

                    <section className="section_content">
                        <h1 className="page_heading">Leistungen</h1>
                    </section>

                    {map(leistungen, (leistung, idx) => {
                        return (
                            <IllustratedSection
                                title={leistung.data.title}
                                subTitle={leistung.data.subTitle}
                                illustration={'icon_' + leistung.data.icon}
                                key={idx}
                            >
                                <div dangerouslySetInnerHTML={{ __html: leistung.data.body }} />
                            </IllustratedSection>
                        );
                    })}

                    <SectionIconStrip title="Zufriedene Kunden aus den Branchen" illustrations={branchen} />

                    <Hero image="wald_buro">
                        <Link to="/arbeitsweisen/" className="cta">
                            Wie arbeitet fuchs+wald?
                        </Link>
                    </Hero>
                </main>
            </DocumentTitle>
        );
    }
}
