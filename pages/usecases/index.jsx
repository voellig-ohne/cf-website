import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { map, includes } from 'lodash'
import MiniForrestGroup from 'components/MiniForrestGroup'
import Hero from 'components/Hero'
import classNames from 'classNames'

export default class UseCases extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle + ' | use cases' }>
                <main>
                    <section className="sub_intro">
                        <div className={classNames('sub_intro-forrest')}>
                            <MiniForrestGroup />
                        </div>
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
