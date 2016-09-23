import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Forrest from 'components/Forrest'
import Hero from 'components/Hero'
import { filter, map } from 'lodash'
import IllustratedSection from 'components/IllustratedSection'

export default class Leistungen extends React.Component {
    render() {
        const leistungen = filter(this.props.route.pages, (page) => {
            return page.path.includes('/leistungen/items/')
        })

        return (
            <DocumentTitle title={ config.siteTitle + ' | leistungen'  }>
                <main>
                    <section className="sub_intro">
                        <Forrest className="sub_intro-forrest"
                            mode="single"/>
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Wir finden den richtigen Weg durch den Wald.
                            </h1>
                        </header>
                    </section>

                    <section className="section_content">
                        <h1 className="page_heading">Unsere Leistungen</h1>
                    </section>

                    {
                        map(leistungen, (leistung, idx) => {
                            return (
                                <IllustratedSection
                                        title={leistung.data.title}
                                        subTitle={leistung.data.subTitle}
                                        illustration={'icon_' + leistung.data.icon}>
                                    <div dangerouslySetInnerHTML={{ __html: leistung.data.body }} />
                                </IllustratedSection>
                            ) 
                        })
                    }

                    <Hero image="/img/wald_buro.jpg">
                        <Link to="/arbeitsweisen/" className="cta">
                            Wie arbeitet fuchs+wald?
                        </Link>
                    </Hero>

                </main>
            </DocumentTitle>
        )
    }
}
