import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Illustration from '../components/Illustration'
import Hero from '../components/Hero'
import Forrest from '../components/Forrest'
import MiniForrestGroup from '../components/MiniForrestGroup'

export default class Index extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle }>
              <main>
                <section className="intro">
                    <Illustration illustration="fuchs"
                            className="intro-fuchs" />
                    <Illustration illustration="wald"
                            className="intro-wald" />
                </section>

                <section className="section_content section_content--argument">
                    <div className="section_content-main">
                        <h1>Es ist mehr als nur eine E-Mail.</h1>
                        <p>
                            Wir sehen E-Mail Marketing langfristig. Eine
                            Zusammenwirkung zwischen Marketing/CRM und
                            IT-Abteilung. Zielgenaue Kommunikation mit dem
                            Kunden. Weniger ist mehr. Dafür passender und
                            wertvoller.
                        </p>
                    </div>
                    <div className="section_content-secondary">
                        <div className="circles">
                            <div className="circles-circle">
                                <Illustration illustration="icon_planung"
                                    className="circles-image" />
                                <span className="circles-title">
                                    Planung
                                </span>
                            </div>
                            <div className="circles-circle">
                                <Illustration illustration="icon_programmierung"
                                    className="circles-image" />
                                <span className="circles-title">
                                    Programmierung
                                </span>
                            </div>
                            <div className="circles-circle">
                                <Illustration illustration="icon_beratung"
                                    className="circles-image"/>
                                <span className="circles-title">
                                    Beratung
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <Hero image="/img/mails.jpg" title="...mehr als E-Mail Marketing." />

                <IntroSection
                        cta={{link: '/leistungen/', text: 'leistungen'}}
                        illustration={(<Forrest
                            mode="single"
                            className="section_content-graphic-image" />)}>
                    <h1>Wir finden den richtigen Weg durch den Wald.</h1>
                    <p>
                        (LEISTUNGEN) Analyse Umsetzung Template-
                        Programmierung Projektmanagement Design
                        Versandunterstützung Seminare & Workshops Es
                        id quibusdam quam aut quia volum fugia culloriat.
                        Atur alicatur a del is eum natis maio. Itam explaut
                        quibus et asperciendam rendus delectus que nonsequi
                        doluptius, idellessit acesto quo molum dello et, sus.
                    </p>
                </IntroSection>

                <IntroSection
                        cta={{link: '/workshops/', text: 'mehr über workshops'}}
                        illustration={(<Forrest
                            mode="many"
                            density="0"
                            className="section_content-graphic-image" />)}>
                    <h1>Jeder kann ein Fuchs sein.</h1>

                    <p>
                        (Arbeitsweise) Analyse Umsetzung Template-
                        Programmierung Projektmanagement Design
                        Versandunterstützung Seminare & Workshops Es
                        id quibusdam quam aut quia volum fugia culloriat.
                        Atur alicatur a del is eum natis maio. Itam explaut
                        quibus et asperciendam rendus delectus que nonsequi
                        doluptius, idellessit acesto quo molum dello et, sus.
                    </p>
                </IntroSection>

                <IntroSection
                        cta={{link: '/usecases/', text: 'alle usecases'}}
                        illustration={(<MiniForrestGroup
                            isSmall={true}
                            className="section_content-graphic-image" />)}>
                    <h1>Für jeden Wald der richtige Fuchs.</h1>

                    <p>
                        (Use Cases) Analyse Umsetzung Template-
                        Programmierung Projektmanagement Design
                        Versandunterstützung Seminare & Workshops Es
                        id quibusdam quam aut quia volum fugia culloriat.
                        Atur alicatur a del is eum natis maio. Itam explaut
                        quibus et asperciendam rendus delectus que nonsequi
                        doluptius, idellessit acesto quo molum dello et, sus.
                    </p>
                </IntroSection>
              </main>
            </DocumentTitle>
        )
    }
}

class IntroSection extends React.Component {
    render() {
        const { illustration, cta } = this.props
        return (
            <section className="section_content">
                <div className="section_content-main">
                    { this.props.children }

                    <Link to={cta.link}
                        className="cta">
                        {cta.text}
                    </Link>
                </div>
                <div className="section_content-secondary">
                    <div className="section_content-graphic">
                        { illustration }
                    </div>
                </div>
            </section>
        )
    }

}
