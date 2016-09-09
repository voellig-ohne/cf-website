import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { map, includes } from 'lodash'
import MiniForrest from 'components/MiniForrest'
import Hero from 'components/Hero'
import classNames from 'classNames'
import forrests from './_forrests.js'
import style from './style.module.less'


export default class UseCases extends React.Component {
    render() {
        const greenBackground = [1,3,4,6]

        return (
            <DocumentTitle title={ config.siteTitle + ' | use cases' }>
                <main>
                    <section className="sub_intro">
                        <div className={classNames(style.forrests, 'sub_intro-forrest')}>
                            {
                                map(forrests, (forrest, idx) => {

                                    return (
                                        <MiniForrest className={style.forrest}
                                            forrest={forrest}
                                            background={includes(greenBackground, idx) ? 'green' : 'white'}
                                            key={idx} />
                                    )
                                })
                            }
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
