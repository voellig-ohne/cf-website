import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Illustration from '../components/Illustration'
import Hero from '../components/Hero'
import Forrest from '../components/Forrest'
import MiniForrestGroup from '../components/MiniForrestGroup'
import FoxAndYou from '../components/FoxAndYou'

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
                        <h1>
                            Es ist mehr als nur eine <span className="dont-break">E-Mail</span>. 
                        </h1>
                        <p>
                            Wir stehen für <strong>360</strong>°Grad Kommunikation im <strong>E-Mail-Marketing</strong> und <em>Digitaldialog</em>. Für uns ist die E-Mail Kunstobjekt und modernes Mittel zum 
                            dauerhaften Dialog mit dem Kunden. Unser Ansatz ist die Kombination und 
                            Integration von Marketing und IT zur zielgenauen Kommunikation. 
                            Testen Sie uns.
                        </p>
                    </div>
                    <div className="section_content-secondary">
                        <div className="circles">
                            <div className="circles-circle">
                                <Illustration illustration="icon_planung"
                                    className="circles-image" />
                                <div className="circles-title">
                                    Planung
                                </div>
                            </div>
                            <div className="circles-circle">
                                <Illustration illustration="icon_programmierung"
                                    className="circles-image" />
                                <div className="circles-title">
                                    Program&shy;mierung
                                </div>
                            </div>
                            <div className="circles-circle">
                                <Illustration illustration="icon_beratung"
                                    className="circles-image"/>
                                <div className="circles-title">
                                    Beratung
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <IntroSection
                        cta={{link: '/leistungen/', text: 'leistungen'}}
                        illustration={(<Forrest
                            mode="single"
                            className="section_content-graphic-image" />)}>
                    <h1>Wir finden den richtigen Weg durch den Wald.</h1>
                    <p>
                        Eine erfolgreiche Jagderfordert die richtige Vorbereitung. Im digitalen 
                        Dschungel ist das nicht anders. Jeder Kunde bringt unterschiedliche 
                        Voraussetzungen und Ziele mit sich.Wir legen die richtige Fährte als 
                        Team mit dem Kunden fest und unterstützen Sie in verschiedensten Spektren 
                        des E-Mail-Marketings. Sie bestimmen die Trophäe. Wir als Team müssen 
                        dafür das Beste aus dem vorgegebenen und vorhandenenPotenzial schaffen. 
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
                        Unterschiedliche Herausforderungen erfordern 
                        unterschiedliches KnowHow und Herangehensweisen. 
                        Mehr Details über erfolgreiche Projekte lesen Sie 
                        hier nach.
                    </p>
                </IntroSection>

                <Hero image="wald_seile">
                    <Link className="cta" to="/leistungen/">
                        Finden Sie mit uns durch den Wald
                    </Link>
                </Hero>
                
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
                        { cta.text }
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
