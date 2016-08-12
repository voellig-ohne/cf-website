import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Illustration from '../components/Illustration'
import Hero from '../components/Hero'
import Forrest from '../components/Forrest'

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
                                <Illustration illustration="PLANUNG"
                                    className="circles-image" />
                                <span className="circles-title">
                                    Planung
                                </span>
                            </div>
                            <div className="circles-circle">
                                <Illustration illustration="PROGRAMMIERUNG"
                                    className="circles-image" />
                                <span className="circles-title">
                                    Programmierung
                                </span>
                            </div>
                            <div className="circles-circle">
                                <Illustration illustration="BERATUNG"
                                    className="circles-image"/>
                                <span className="circles-title">
                                    Beratung
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
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
