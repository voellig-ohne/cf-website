import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Forrest from 'components/Forrest'
import Hero from 'components/Hero'

export default class Workshops extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle  + ' | workshops' }>
                <main>
                    <section className="sub_intro">
                        <Forrest className="sub_intro-forrest"
                            mode="many"/>
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Jeder kann ein Fuchs sein.
                            </h1>
                        </header>
                    </section>

                    <Hero title="...mehr als E-Mail Marketing."
                            image="/img/wald_1.jpg">
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
                    </Hero>
                </main>
            </DocumentTitle>
        )
    }
}
