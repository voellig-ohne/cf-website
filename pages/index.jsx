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
import Teaser from 'components/Teaser'

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


                <Teaser title={ ( <span>Es ist mehr <br />als nur eine <span className="dont-break">E-Mail</span></span> ) }>

                    <p>
                        Wir stehen für <strong>360</strong>°Grad Kommunikation im <strong>E-Mail-Marketing</strong> und <em>Digitaldialog</em>. Für uns ist die E-Mail Kunstobjekt und modernes Mittel zum 
                        dauerhaften Dialog mit dem Kunden. Unser Ansatz ist die Kombination und 
                        Integration von Marketing und IT zur zielgenauen Kommunikation. 
                        Testen Sie uns.
                    </p> 

                    <div className="circles">
                            <div className="circles-circle">
                                <Illustration illustration="icon_planung"
                                    className="circles-image" />
                                <div className="circles-title">
                                    Interim- & Projektmanagement
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
                                    Beratung & <br />Betreuung
                                </div>
                            </div>
                        </div>
                    
                </Teaser>

                <IntroSection
                        cta={{link: '/leistungen/', text: 'leistungen'}}
                        illustration={(<Forrest
                            mode="single"
                            className="section_content-graphic-image" />)}>
                    <h1>Wir finden den richtigen Weg durch den Wald.</h1>
                    <p>
                        Eine erfolgreiche Jagd erfordert die richtige Vorbereitung. Im digitalen Dschungel ist das nicht anders. Jeder Kunde bringt unterschiedliche Voraussetzungen und Ziele mit sich. Wir legen die richtige Fährte als Team mit dem Kunden fest und unterstützen Sie in verschiedensten Spektren des E-Mail-Marketings. Sie bestimmen die Trophäe. Wir als Team müssen dafür das Beste aus dem vorgegebenen und vorhandenen Potenzial schaffen.
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
                        Mit unseren Workshops wird auch aus dir ein Fuchs. Wir passen uns deiner wilden Umgebung an und stellen dir gerne ein individuelles Waldprogramm zusammen. 
                    </p>
                </IntroSection>

                <IntroSection
                        cta={{link: '/usecases/', text: 'alle use cases'}}
                        illustration={(<MiniForrestGroup
                            isSmall={true}
                            className="section_content-graphic-image" />)}>
                    <h1>Für jeden Wald der richtige Fuchs.</h1>

                    <p>
                        Weidmannsheil! Unterschiedliche Herausforderungen 
                        erfordern unterschiedliches Know-How und Herangehensweisen. 
                        Details zu erfolgreichen Projekten finden Sie hier.
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
