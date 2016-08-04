import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Forrest from 'components/Forrest'

export default class Index extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle }>
                <main>
                    <section className="sub_intro">
                        <Forrest className="sub_intro-forrest" />
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Wir finden den richtigen Weg durch den Wald.
                            </h1>
                        </header>
                    </section>

                    <section className="section_hero section_hero--has_text">
                        <div className="section_hero-text">
                            <div>
                                <h1>...mehr als E-Mail Marketing.</h1>
                                <p>
                                    (LEISTUNGEN) Analyse Umsetzung Template-
                                    Programmierung Projektmanagement Design
                                    Versandunterstützung Seminare & Workshops Es id
                                    quibusdam quam aut quia volum fugia culloriat.
                                    Atur alicatur a del is eum natis maio. Itam
                                    explaut quibus et asperciendam rendus delectus
                                    que nonsequi doluptius, idellessit acesto quo
                                    molum dello et, sus.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </DocumentTitle>
        )
    }
}
