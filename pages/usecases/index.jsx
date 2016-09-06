import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import MiniForrest from 'components/MiniForrest'
import Hero from 'components/Hero'

const f = 'f'
const t = 't'
const e = 'e'

const forrest = [
    [t, t, t],
    [t, f, f],
    [t, t, t]
]

export default class UseCases extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle }>
                <main>
                    <section className="sub_intro">
                        <MiniForrest className="sub_intro-forrest"
                            forrest={forrest}/>
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Für jeden Wald der richtige Fuchs.
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
